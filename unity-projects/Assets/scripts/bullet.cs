using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class bullet : MonoBehaviour
{
    Animator anim;
    //public GameObject bullets;
    //private bool m_FacingRight = true;
   // Start is called before the first frame update
    void Start()
    {
        anim = GetComponent<Animator>();
        anim.SetBool("isDead", false);
    }
    // Update is called once per frame
    void Update()
    {
        transform.Translate(new Vector2(0.2f, 0));
        // if(m_FacingRight == true){
        //     transform.Translate(new Vector2(0.2f, 0));
        // }
        // else{
        //     transform.Translate(new Vector2(-0.2f, 0));
        // }

        // Vector2 pos = transform.position;
        // if(pos.x > 21.5){
            
        //     if(bullets.gameObject.name.StartsWith("bullets")){
        //         Destroy(bullets.gameObject);
        //     }
        // }
        // else if(pos.x > -21.5){
        //     if(bullets.gameObject.name.StartsWith("bullets")){
        //         Destroy(bullets.gameObject);
        //     }
        // }
        // transform.position = pos;
    }

    // private void OnCollisionEnter2D(Collision2D collision)
    // {
    //     if(collision.gameObject.name.StartsWith("enemy")){
    //     anim.SetBool("isDead", true);
            
    //     }
    //     else{
    //                 anim.SetBool("isDead", false);
    //     }

    // }
}
