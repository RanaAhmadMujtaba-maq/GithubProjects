using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.UI;
using UnityEngine.SceneManagement;
public class destroyOnTouch : MonoBehaviour
{

    public Text scoreText;
    public static float scoreValue;

    public GameObject healthy1;
    public GameObject healthy1clone;

    public GameObject healthy2;
    public GameObject healthy2clone;

    public GameObject junk1;
    public GameObject junk1clone;

    public GameObject junk2;
    public GameObject junk2clone;

    private void Start()
    {

        for (int i = 0; i < 6; i++)
        {
            Vector2 healthy1pos = new Vector2(Random.Range(-10f, 10f), Random.Range(4, 0));
            healthy1clone = Instantiate(healthy1, healthy1pos, Quaternion.identity);

            Vector2 healthy2pos = new Vector2(Random.Range(-10f, 10f), Random.Range(4, 0));
            healthy2clone = Instantiate(healthy2, healthy2pos, Quaternion.identity);

            Vector2 junk1pos = new Vector2(Random.Range(-10f, 10f), Random.Range(4, 0));
            junk1clone = Instantiate(junk1, junk1pos, Quaternion.identity);

            Vector2 junk2pos = new Vector2(Random.Range(-10f, 10f), Random.Range(4, 0));
            junk2clone = Instantiate(junk2, junk2pos, Quaternion.identity);


        }
        scoreText.text = "Score :" + scoreValue.ToString();
    }


    void Update()
    {
        foreach (Touch touch in Input.touches)
        {
            if (touch.phase == TouchPhase.Began)
            {

                RaycastHit2D hit = Physics2D.Raycast(Camera.main.ScreenToWorldPoint(touch.position), Vector2.zero);

                if (hit.transform.gameObject.name.StartsWith("warship"))
                {
                    
                    Destroy(hit.transform.gameObject);
                    scoreValue += 5f;
                    scoreText.text = "Score :" + scoreValue.ToString();

                    
                }

                else if (hit.transform.gameObject.name.StartsWith("warship2"))
                {
                  
                    Destroy(hit.transform.gameObject);
                    scoreValue += 5f;
                    scoreText.text = "Score :" + scoreValue.ToString();

                   
                }

                else if (hit.transform.gameObject.name.StartsWith("asteroids"))
                {
                    
                    Destroy(hit.transform.gameObject);
                    scoreValue += 5f;
                    scoreText.text = "Score :" + scoreValue.ToString();

               
                }

                else if (hit.transform.gameObject.name.StartsWith("asteroid_2"))
                {
                    
                    Destroy(hit.transform.gameObject);
                    scoreValue += 5f;
                    scoreText.text = "Score :" + scoreValue.ToString();

                    
                }


            }
        }

    }





}