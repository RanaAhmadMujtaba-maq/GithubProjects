using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class halicopter : MonoBehaviour
{
    public GameObject bullet;
    // Start is called before the first frame update
    void Start()
    {

    }

    // Update is called once per frame
    void Update()
    {
        if (Input.GetKey(KeyCode.UpArrow))//forward
        {
            transform.Translate(0, 0, 4f);
        }

        if (Input.GetKey(KeyCode.DownArrow))//Backward
        {
            transform.Translate(0, 0, -4f);
        }

        if (Input.GetKey(KeyCode.RightArrow))//Right
        {
            transform.Rotate(0, 4f, 0);
        }

        if (Input.GetKey(KeyCode.LeftArrow))//Left
        {
            transform.Rotate(0, -4f, 0);
        }

        if (Input.GetKey(KeyCode.X))//upwards
        {
            transform.Translate(0, 4f, 0);
        }

        if (Input.GetKey(KeyCode.Z))//Downwards
        {
            transform.Translate(0, -4f, 0);
        }

        if (Input.GetKeyDown(KeyCode.Space))//Instantiate Bullet
        {
           Instantiate(bullet, heliposition, transform.rotation);
        }


    }
}
