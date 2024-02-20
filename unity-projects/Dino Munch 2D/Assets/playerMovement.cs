using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.UI;

public class playerMovement : MonoBehaviour
{
    Animator anim;
    public CharacterController2D controller;

    public float runSpeed = 100f;
    private float startTouchPosition, endTouchPosition;

    float lefthorizontalMove = -70f;
    float righthorizontalMove = 70f;

    bool jump = false;
    bool crouch = false;

    public Text ScoreText;
    public Text HealthText;
    public Text GameOverText;

    public static float score = 0;
    public static float health = 50;

    public GameObject cloud;
    public GameObject cloud1;
    public GameObject cloud2;

    // Start is called before the first frame update
    void Start()
    {
        anim = GetComponent<Animator>();
        anim.SetBool("isWalk", false);
        anim.SetBool("isJump", false);
        anim.SetBool("isDead", false);
        GameOverText.enabled = false;
        HealthText.text = "Health: " + health.ToString();
        ScoreText.text = "Score: " + score.ToString();

    }

    // Update is called once per frame
    void Update()
    {
        //for swipe Jump

        for (int i = 0; i < Input.touchCount; i++)
        {
            var touch = Input.GetTouch(i);
            if (touch.phase == TouchPhase.Began)
            {
                startTouchPosition = touch.position.y;
            }
            else if (touch.phase == TouchPhase.Ended)
            {
                endTouchPosition = touch.position.y;
                if (endTouchPosition > startTouchPosition)
                {
                    transform.Translate(Vector2.up * 250 * Time.fixedDeltaTime);
                }
                //down movement through the condition below also make the gravity 0
                // else if(endTouchPosition < startTouchPosition){
                //     transform.Translate(Vector2.down * 250 * Time.fixedDeltaTime);
                // }
            }
        }
    }



    private void FixedUpdate()
    {
        // left right touch

        if (Input.touchCount > 0)
        {
            var touch = Input.GetTouch(0);
            if (touch.position.x < Screen.width / 2 && touch.position.y > Screen.height / 8)
            {
                controller.Move(lefthorizontalMove * Time.fixedDeltaTime, crouch, jump);
                anim.SetBool("isWalk", true);
            }

            if (touch.position.x > Screen.width / 2 && touch.position.y > Screen.height / 8)
            {

                controller.Move(righthorizontalMove * Time.fixedDeltaTime, crouch, jump);
                anim.SetBool("isWalk", true);
            }

        }
        else
        {
            anim.SetBool("isWalk", false);
        }

    }

    private void OnCollisionEnter2D(Collision2D collision)
    {
        /*
        if (collision.gameObject.name.StartsWith("cloud"))
        {
            transform.gameObject.transform.parent = cloud.transform;
        }

        if (collision.gameObject.name.StartsWith("cloud1"))
        {
            transform.gameObject.transform.parent = cloud1.transform;
        }

        if (collision.gameObject.name.StartsWith("cloud2"))
        {
            transform.gameObject.transform.parent = cloud2.transform;
        }
        */


        if (collision.gameObject.name.StartsWith("Apple"))
        {
            score += 5;
            health += 10;
            ScoreText.text = "Score: " + score.ToString();
            Destroy(collision.gameObject);

        }


        if (collision.gameObject.name.StartsWith("Saw"))
        {
            health -= 10;
            HealthText.text = "Health: " + health.ToString();
            if (health == 0)
            {
                anim.SetBool("isDead", true);
                GameOverText.enabled = true;
            }
        }
    }


}