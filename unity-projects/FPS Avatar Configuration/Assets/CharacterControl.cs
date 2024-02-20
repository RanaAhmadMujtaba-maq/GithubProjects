using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class CharacterControl : MonoBehaviour
{
    public AudioClip characerAudio;
    Animator anim;
    // Start is called before the first frame update
    void Start()
    {

        anim = GetComponent<Animator>();
        anim.SetBool("isWalk", false);
        anim.SetBool("isJump", false);
        GetComponent<AudioSource>().clip = characerAudio;
    }

    // Update is called once per frame

    void Update()
    {
        if (Input.GetKey(KeyCode.W))
        {
            anim.SetBool("isWalk", true);
            GetComponent<AudioSource>().PlayOneShot(characerAudio);
        }
        else if (Input.GetKey(KeyCode.J))
        {
            anim.SetBool("isJump", true);
        }
        else
        {
            anim.SetBool("isWalk", false);
            anim.SetBool("isJump", false);
        }
    }
}
