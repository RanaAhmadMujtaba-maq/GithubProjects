using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class cube : MonoBehaviour
{
    public AudioClip cubeaudio;
    Animator anim;
    // Start is called before the first frame update
    void Start()
    {
        
        anim = GetComponent<Animator>();
        anim.SetBool("isRotate", false);
        GetComponent<AudioSource>().clip = cubeaudio;
    }

    // Update is called once per frame
    void Update()
    {
        if (Input.GetKey(KeyCode.UpArrow))
        {
            transform.Translate(0, 0.3f, 0);
            anim.SetBool("isRotate", true);
            GetComponent<AudioSource>().PlayOneShot(cubeaudio);

        }
        else  if (Input.GetKey(KeyCode.DownArrow))
        {
            transform.Translate(0, -0.3f, 0f);
            anim.SetBool("isRotate", true);
            GetComponent<AudioSource>().PlayOneShot(cubeaudio);

        }
        else
        {
            anim.SetBool("isRotate", false);
        }
    }
}
