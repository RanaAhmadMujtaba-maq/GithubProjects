using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.UI;
using UnityEngine.SceneManagement;

public class spaceShip : MonoBehaviour
{
    
    public GameObject bulletprefab;
    public GameObject spaceship;
    public GameObject explosion;
    public GameObject gameover;
    public Text HealthText;
    public static float health = 50;
    
    // Start is called before the first frame update
    void Start()
    {
         HealthText.text = "Health: " + health.ToString();
         gameover.SetActive(false);
    }

    // Update is called once per frame
    void Update()
    {
        if (Input.GetKey(KeyCode.RightArrow))//
         {
                    transform.Translate(new Vector2(0, 0.05f));

         }

         if (Input.GetKey(KeyCode.LeftArrow))//
         {
                    transform.Translate(new Vector2(0, -0.05f));

         }

         if (Input.GetKey(KeyCode.UpArrow))//
        {
        transform.Translate(new Vector2(-0.05f, 0f));        
         }

         if (Input.GetKey(KeyCode.DownArrow))//
         {
                    transform.Translate(new Vector2(0.05f, 0f));        

         }
        
         if(Input.GetKeyDown(KeyCode.Space)){
        Instantiate(bulletprefab, transform.position, Quaternion.identity);        

         }

        
    }

    private void OnCollisionEnter2D(Collision2D collision)
    {

        if (collision.gameObject.name.StartsWith("warship"))
        {
            health -= 10;
            HealthText.text = "Health: " + health.ToString();
            print("health: "+health);
            if(health==0){
            Destroy(spaceship);
            HealthText.text = "Health: " + health.ToString();
            gameover.SetActive(true);
            }
            Destroy(collision.gameObject);
            Instantiate(explosion, transform.position, Quaternion.identity);            
        }

        if (collision.gameObject.name.StartsWith("warship2"))
        {
            health -= 10;
            HealthText.text = "Health: " + health.ToString();
            print("health: "+health);
            if(health==0){
            Destroy(spaceship);
            HealthText.text = "Health: " + health.ToString();
            gameover.SetActive(true);
            }
            Destroy(collision.gameObject);
            Instantiate(explosion, transform.position, Quaternion.identity);            
            }
        
        if (collision.gameObject.name.StartsWith("asteroid"))
        {
            health -= 10;
            HealthText.text = "Health: " + health.ToString();
            print("health: "+health);
            if(health==0){
            Destroy(spaceship);
            HealthText.text = "Health: " + health.ToString();
            gameover.SetActive(true);
            }
            Destroy(collision.gameObject);
            Instantiate(explosion, transform.position, Quaternion.identity);            
        }

        if (collision.gameObject.name.StartsWith("asteroid_2"))
        {
            health -= 10;
            HealthText.text = "Health: " + health.ToString();
            print("health: "+health);
            if(health==0){
            Destroy(spaceship);
            HealthText.text = "Health: " + health.ToString();                   
            gameover.SetActive(true);
            }
            Destroy(collision.gameObject);
            Instantiate(explosion, transform.position, Quaternion.identity);            
        }

    }
}
