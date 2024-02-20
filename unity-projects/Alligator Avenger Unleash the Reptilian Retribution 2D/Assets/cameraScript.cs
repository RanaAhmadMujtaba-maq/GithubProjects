using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class cameraScript : MonoBehaviour
{
    public GameObject dino;
    private Vector3 offset;
    // Start is called before the first frame update
    void Start()
    {
        offset = transform.position - dino.transform.position;
    }

    // Update is called once per frame
    void Update()
    {
        transform.position = dino.transform.position + offset;
    }
}
