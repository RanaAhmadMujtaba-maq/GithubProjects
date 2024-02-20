using System.Collections;
using System.Collections.Generic;
using UnityEngine;


public class Instantiator : MonoBehaviour
{
    public int level_Difficulty = 5;
    public GameObject warShip, warShip2,asteroid,asteroid_2, warShipClone, warShip2Clone, asteroidClone, asteroid_2Clone;
    void Start()
    {
        
        Vector2 warShipPosition = new Vector2(17.6f, Random.Range(4, -4));
        warShipClone = Instantiate (warShip, warShipPosition,Quaternion.identity);
        warShipClone.transform.Rotate(0, 180f, 0);
        Vector2 warShip2Position = new Vector2(17.6f, Random.Range(4, -4));
        warShip2Clone = Instantiate( warShip2, warShip2Position, Quaternion.identity);
        warShip2Clone.transform.Rotate(0, 180f, 0);
        Vector2 asteroidPosition = new Vector2(17.6f, Random.Range(4, -4));
        asteroidClone = Instantiate(asteroid, asteroidPosition, Quaternion.identity);
        Vector2 asteroid_2Position = new Vector2(17.6f, Random.Range(4, -4));
        asteroid_2Clone = Instantiate(asteroid_2, asteroid_2Position, Quaternion.identity);
        
        for (int i = 0; i < level_Difficulty; i++)
        {
            StartCoroutine(enemyInstantiator());
        }
    }

    public IEnumerator enemyInstantiator()
    {
        yield return new WaitForSeconds(6f);
        Vector2 warShipPosition = new Vector2(17.6f, Random.Range(4, -4));
        warShipClone = Instantiate (warShip, warShipPosition,Quaternion.identity);
        warShipClone.transform.Rotate(0, 180f, 0);
        yield return new WaitForSeconds(8);        
        Vector2 warShip2Position = new Vector2(17.6f, Random.Range(4, -4));
        warShip2Clone = Instantiate( warShip2, warShip2Position, Quaternion.identity);
        warShip2Clone.transform.Rotate(0, 180f, 0);
        yield return new WaitForSeconds(7f);    
        Vector2 asteroidPosition = new Vector2(17.6f, Random.Range(4, -4));
        asteroidClone = Instantiate(asteroid, asteroidPosition, Quaternion.identity);
        yield return new WaitForSeconds(9f);
        Vector2 asteroid_2Position = new Vector2(17.6f, Random.Range(4, -4));
        asteroid_2Clone = Instantiate(asteroid_2, asteroid_2Position, Quaternion.identity);
    }  
    // Update is called once per frame
    void Update()
    {


        /*foreach(Touch touch in Input.touches)
        {
            if(touch.phase == TouchPhase.Began)
            {
                RaycastHit2D hit = Physics2D.Raycast(Camera.main.ScreenToWorldPoint(touch.position), Vector2.zero);
                if(hit.transform.gameObject.name.StartsWith( warShip"))
                {
                    Destroy(hit.transform.gameObject);
                 warShipscore += 1f;
                 warShipBasket.text = "Number of warShips in Basket: " + warShipscore.ToString();
                    Vector2 warShipPosition = new Vector2(Random.Range(10, -10), -3.0f);
                    StartCoroutine(delaytime());
                 warShipClone= Instantiate warShipPosition,Quaternion.identity);
                }
                else
                     if (hit.transform.gameObject.name.StartsWith("asteroid"))
                {
                    Destroy(hit.transform.gameObject);
                    asteroidscore += 1f;
                    asteroidBasket.text = "Number of asteroids in Basket: " + asteroidscore.ToString();
                    Vector2 asteroidPosition = new Vector2(Random.Range(10, -10), -3.0f);
                    StartCoroutine(delaytime());
                 warShipClone = Instantiate(asteroid, asteroidPosition, Quaternion.identity);
                }

            }
            
        }
    }
*/
        }
    }