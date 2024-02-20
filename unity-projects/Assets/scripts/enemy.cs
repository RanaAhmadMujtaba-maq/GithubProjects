using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class enemy : MonoBehaviour
{
 
    public GameObject Enemy,EnemyClone; 
    private bool m_FacingRight = true;

    // Start is called before the first frame update
    void Start()
    {
        Vector2 EnemyPosition = new Vector2(10f, Random.Range(2.3f, 2.3f));
        
        EnemyClone = Instantiate (Enemy, EnemyPosition,Quaternion.identity);

    }

    // Update is called once per frame
    void Update()
    {
        if(m_FacingRight == true){
            Flip();            
         }

        Vector2 pos = transform.position;
        if(pos.y > -2.3){
            transform.Translate(new Vector2(0, -0.2f));
        }
        else if(pos.y > 2.3){
            transform.Translate(new Vector2(0, 0.2f));
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
