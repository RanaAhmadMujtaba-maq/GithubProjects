using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.UI;


public class Movement_Kids : MonoBehaviour
{
    public GameObject Kidz;

    // Start is called before the first frame update
    void Start()
    {

    }

    // Update is called once per frame
    void Update()
    {

        if (Input.GetKey(KeyCode.P))
        {        
            transform.Translate(0, 0, .1f);

            Vector3 pos = transform.position;
            if (pos.z > -21)
            {
                Destroy(Kidz);
            }
            transform.position = pos;
        }
    }
}
