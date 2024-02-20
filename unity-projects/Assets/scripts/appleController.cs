using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class appleController : MonoBehaviour
{

    public GameObject apple;


    // Start is called before the first frame update
    void Start()
    {
        for (int i = 0; i <= 10; i++)
        {
            Vector2 applepos = new Vector2(Random.Range(1, 70), Random.Range(-4, 4));
            Instantiate(apple, applepos, Quaternion.identity);
        }
    }
}

