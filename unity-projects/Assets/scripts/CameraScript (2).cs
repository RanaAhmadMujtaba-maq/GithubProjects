using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class CameraScript : MonoBehaviour
{
    public Vector3 offset;
    public GameObject MyCar;

    // Start is called before the first frame update
    void Start()
    {
        offset = transform.position - MyCar.transform.position;
    }

    // Update is called once per frame
    void Update()
    {
        transform.position = MyCar.transform.position + offset;
    }
}
