using System.Collections.Generic;
using UnityEngine;
using UnityEngine.UI;
using UnityEngine.SceneManagement;

public class bullet : MonoBehaviour
{
    public Text ScoreText;
    public float highscore = 100;
    public static float score = 0;
    public GameObject bulletprefab, explosion;
    // Start is called before the first frame update
    void Start()
    {
        ScoreText.text = "Score: " + score.ToString();
    }
        
    void Update() 
    {
        transform.Translate(new Vector2(0.2f, 0));

        Vector2 pos = transform.position;
        if(pos.x > 17.6){
            
            if(bulletprefab.gameObject.name.StartsWith("bullets(Clone)")){
                Destroy(bulletprefab.gameObject);
            }
        }
        transform.position = pos;

    }

     private void OnCollisionEnter2D(Collision2D collision)
    {

        if (collision.gameObject.name.StartsWith("warship"))
        {
            score += 5;
            ScoreText.text = "Score: " + score.ToString();            
            print("score: "+score);
            if(score==highscore){
            SceneManager.LoadScene("GameOver");
            }
            Instantiate(explosion, transform.position, Quaternion.identity);            
            Destroy(collision.gameObject);
            Destroy(bulletprefab);
            if(explosion.gameObject.name.StartsWith("explosion(Clone)")){
                Destroy(explosion.gameObject);
            }

        }

       else if (collision.gameObject.name.StartsWith("warship2"))
        {
            score += 5;
            ScoreText.text = "Score: " + score.ToString(); 
            print("score: "+score);
            if(score==highscore){
            SceneManager.LoadScene("GameOver");
            }
            Instantiate(explosion, transform.position, Quaternion.identity);            
            Destroy(collision.gameObject);
            Destroy(bulletprefab);
            if(explosion.gameObject.name.StartsWith("explosion(Clone)")){
                Destroy(explosion.gameObject);
            }
        }
        else if (collision.gameObject.name.StartsWith("asteroids"))
        {
            score += 5;
            ScoreText.text = "Score: " + score.ToString();
            print("score: "+score);
            if(score==highscore){
            SceneManager.LoadScene("GameOver");
            }            
            Instantiate(explosion, transform.position, Quaternion.identity); 
            Destroy(collision.gameObject);
            Destroy(bulletprefab);
            if(explosion.gameObject.name.StartsWith("explosion(Clone)")){
                Destroy(explosion.gameObject);
            }
        }

         else   if (collision.gameObject.name.StartsWith("asteroid_2"))
            {
            score += 5;
            ScoreText.text = "Score: " + score.ToString();
            print("score: "+score);
            if(score==highscore){
                SceneManager.LoadScene("GameOver");
            }
            Instantiate(explosion, transform.position, Quaternion.identity);            
            Destroy(collision.gameObject);
            Destroy(bulletprefab);
            if(explosion.gameObject.name.StartsWith("explosion(Clone)")){
                Destroy(explosion.gameObject);
            }        
            }

    }

}
