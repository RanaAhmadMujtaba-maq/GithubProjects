using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class aligatorActions : MonoBehaviour
{
    
    Animator anim;
    private Rigidbody2D r;
    private bool m_FacingRight = true;
    public GameObject bullet;
    public AudioSource sound;


    // Start is called before the first frame update
    void Start()
    {
        anim = GetComponent<Animator>();
        anim.SetBool("isWalk", false);
        anim.SetBool("isShoot", false);
    }

    // Update is called once per frame
    void Update()
    {
        if (Input.GetKey(KeyCode.RightArrow))//
         {
            anim.SetBool("isWalk", true);
            transform.Translate(new Vector2(0.05f, 0));
         }
         else if (Input.GetKey(KeyCode.LeftArrow))//
         {
            anim.SetBool("isWalk", true);
            transform.Translate(new Vector2(-0.05f, 0));
         }
         else{
            anim.SetBool("isWalk", false);
         }
         
         if (Input.GetKeyDown(KeyCode.LeftArrow)){
            Flip();
         }
         else if(Input.GetKeyDown(KeyCode.RightArrow))
         {
         if(m_FacingRight == false){
            Flip();            
         }
         }
         else if(Input.GetKeyDown(KeyCode.Space)){
            Instantiate(bullet, transform.position, Quaternion.identity);
            sound.Play();
         }


        Vector2 pos = transform.position;

        if (pos.x >= 13)
        {
            pos.x = -13;
            transform.position = pos;
        }

    }

    private void Flip()
    {
    // Switch the way the player is labelled as facing.
    m_FacingRight = !m_FacingRight;
    // Multiply the player&#39;s x local scale by -1.
    Vector3 theScale = transform.localScale;
    theScale.x *= -1;
    transform.localScale = theScale;
    }
}
