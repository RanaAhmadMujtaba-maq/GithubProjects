using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.UI;
using UnityEngine.SceneManagement;

public class carHunt : MonoBehaviour
{
    public Text carBasket,jeepBasket,truckBasket,bicycleBasket;
    public static float carscore = 0;
    public static float jeepscore = 0;
    public static float truckscore = 0;
    public static float bicyclescore = 0;
    public static float sumscore;
    public GameObject car,jeep,truck,bicycle,carClone, jeepClone, truckClone, bicycleClone;
    void Start()
    {
        Vector2 carPosition = new Vector2(Random.Range(10, -10), -3.0f);
        carClone= Instantiate(car,carPosition,Quaternion.identity);
        Vector2 jeepPosition = new Vector2(Random.Range(10, -10), -3.0f);
        jeepClone = Instantiate(jeep, jeepPosition, Quaternion.identity);
        Vector2 truckPosition = new Vector2(Random.Range(10, -10), -3.0f);
        truckClone = Instantiate(truck, truckPosition, Quaternion.identity);
        Vector2 bicyclePosition = new Vector2(Random.Range(10, -10), -3.0f);
        bicycleClone = Instantiate(bicycle, bicyclePosition, Quaternion.identity);
        StartCoroutine(ShowAndHide(2.0f));
        carBasket.text = "Number of Cars in Basket: " + carscore.ToString();
        jeepBasket.text = "Number of Cars in Basket: " + jeepscore.ToString();
        truckBasket.text = "Number of truck in Basket: " + truckscore.ToString();
        bicycleBasket.text = "Number of bicycle in Basket: " + bicyclescore.ToString();
    }
    IEnumerator ShowAndHide(float delay)
    {
        car.SetActive(true);
        yield return new WaitForSeconds(delay);
        car.SetActive(false);
    }

    // Update is called once per frame
    void Update()
    {
        foreach(Touch touch in Input.touches)
        {
            if(touch.phase == TouchPhase.Began)
            {
                RaycastHit2D hit = Physics2D.Raycast(Camera.main.ScreenToWorldPoint(touch.position), Vector2.zero);
                if(hit.transform.gameObject.name.StartsWith("car"))
                {
                    Destroy(hit.transform.gameObject);
                    carscore += 1f;
                    carBasket.text = "Number of Cars in Basket: " + carscore.ToString();
                    Vector2 carPosition = new Vector2(Random.Range(10, -10), -3.0f);
                    StartCoroutine(delaytime());
                    carClone= Instantiate(car,carPosition,Quaternion.identity);
                }
                else
                     if (hit.transform.gameObject.name.StartsWith("truck"))
                {
                    Destroy(hit.transform.gameObject);
                    truckscore += 1f;
                    truckBasket.text = "Number of trucks in Basket: " + truckscore.ToString();
                    Vector2 truckPosition = new Vector2(Random.Range(10, -10), -3.0f);
                    StartCoroutine(delaytime());
                    carClone = Instantiate(truck, truckPosition, Quaternion.identity);
                }
                else
                     if (hit.transform.gameObject.name.StartsWith("jeep"))
                {
                    Destroy(hit.transform.gameObject);
                    jeepscore += 1f;
                    jeepBasket.text = "Number of jeeps in Basket: " + jeepscore.ToString();
                    Vector2 jeepPosition = new Vector2(Random.Range(10, -10), -3.0f);
                    StartCoroutine(delaytime());
                    carClone = Instantiate(jeep, jeepPosition, Quaternion.identity);
                }
                else
                     if (hit.transform.gameObject.name.StartsWith("bicycle"))
                {
                    Destroy(hit.transform.gameObject);
                    bicyclescore += 1f;
                    bicycleBasket.text = "Number of bicycles in Basket: " + bicyclescore.ToString();
                    Vector2 bicyclePosition = new Vector2(Random.Range(10, -10), -3.0f);
                    StartCoroutine(delaytime());
                    carClone = Instantiate(bicycle, bicyclePosition, Quaternion.identity);
                }

            }
            
            sumscore = carscore+jeepscore+truckscore+bicyclescore;
            if(carscore>=10 || jeepscore>=10 || bicyclescore>=10 || truckscore>=10){
                SceneManager.LoadScene("You Win");
            }
        }
    }

    IEnumerator delaytime()
    {
        yield return new WaitForSeconds(2.0f);
    }
}