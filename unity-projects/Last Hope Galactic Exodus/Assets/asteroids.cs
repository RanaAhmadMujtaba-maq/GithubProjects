using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class asteroids : MonoBehaviour
{
    // Start is called before the first frame update
    void Start()
    {
        
    }

    // Update is called once per frame
    void Update()
    {
        transform.Translate(new Vector2(-0.03f, 0f));
         
         Vector2 pos = transform.position;
            if (pos.x <-17.5)
            {
                pos.x = 17.6f;
            }
            transform.position = pos;
    }
}
