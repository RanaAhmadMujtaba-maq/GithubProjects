using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class Movement : MonoBehaviour
{
    // Start is called before the first frame update
    void Start()
    {
        
    }

    // Update is called once per frame
    void Update()
    {
      
        transform.Translate(0, 0, .1f);

        Vector3 pos = transform.position;
        if (pos.z > 70)
        {
            pos.z = -76;
        }
        transform.position = pos;

    }
}
