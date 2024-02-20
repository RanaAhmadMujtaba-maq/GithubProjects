using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class CameraScript : MonoBehaviour
{
    public Vector3 offset;
    public GameObject SoccerBall;

    // Start is called before the first frame update
    void Start()
    {
        offset = transform.position - SoccerBall.transform.position;

    }

    // Update is called once per frame
    void Update()
    {
        transform.position = SoccerBall.transform.position + offset;

    }
}
