using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.UI;
using UnityEngine.SceneManagement;

public class Enemy : MonoBehaviour
{
    public GameObject fps;
    Animator anim;
    public AudioSource sound;

    public GameObject scoreText;
    public int theScore;

    // Start is called before the first frame update
    void Start()
    {
        anim = GetComponent<Animator>();
        anim.SetBool("isDead", false);
        scoreText.GetComponent<Text>().text = "SCORE: " + theScore.ToString();
    }

    // Update is called once per frame
    void Update()
    {

        transform.LookAt(fps.transform);
 
    }

    public void OnCollisionEnter(Collision col) {

        if (col.gameObject.name.StartsWith("Bullet"))
        {
            anim.SetBool("isDead", true);
            sound.Play();

            theScore += 5;
            scoreText.GetComponent<Text>().text = "SCORE: " + theScore.ToString();
           // SceneManager.LoadScene("GameOver");

        }

    }
}
