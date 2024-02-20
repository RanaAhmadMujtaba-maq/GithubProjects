using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class MyCar : MonoBehaviour
{
    public AudioClip carSound;
    public AudioClip carHorn;

    // Start is called before the first frame update
    void Start()
    {
        GetComponent<AudioSource>().clip = carSound;
        GetComponent<AudioSource>().clip = carHorn;
    }

    void Update()
    {
        if (Input.GetKey(KeyCode.UpArrow))
        {
            transform.Translate(0, 0, 4f);
        }
        if (Input.GetKey(KeyCode.DownArrow))
        {
            transform.Translate(0, 0, -6f);
        }
        if (Input.GetKey(KeyCode.LeftArrow))
        {
            transform.Rotate(0, -2f, 0);
        }
        if (Input.GetKey(KeyCode.RightArrow))
        {
            transform.Rotate(0, 2f, 0);
        }

        Vector3 pos = transform.position;
        if (pos.z > 225)
        {
            pos.z = -800;
        }
        transform.position = pos;
    }
    private void OnCollisionEnter(Collision col)
    {
        if (col.gameObject.name.StartsWith("Bus_1"))
        {
            print("collision with bus");
        }
    }
}
