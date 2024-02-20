using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class cubeInstantiate : MonoBehaviour
{
    // Start is called before the first frame update
    public GameObject cubeobj;
    void Start()
    {
        for (int i = 0; i < 10; i++)
        {
            Vector3 cubepos = new Vector3(Random.Range(23, 20), Random.Range(1, 1), Random.Range(-21, 24));
            Instantiate(cubeobj, cubepos, Quaternion.identity);
        }
    }

    // Update is called once per frame
    void Update()
    {
        
    }
}
