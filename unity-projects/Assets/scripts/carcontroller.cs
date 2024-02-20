using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class carcontroller : MonoBehaviour
{
    public GameObject car;
    // Start is called before the first frame update
    void Start()
    {
        
    }

    // Update is called once per frame
    void Update()
    {
        if (Input.GetKeyDown(KeyCode.Space))
        {
            int distance = 200;
            for (int i = 0; i < 10; i++)
            {
                
                Instantiate(car, new Vector3(63,300 , -1140+ distance), Quaternion.identity);
                distance += 200;
            }

        }
        if (Input.GetKey(KeyCode.D))
        {
            
            Destroy(GameObject.Find("MyCar Variant(Clone)"));
        }
    }
   
      
        

    }
