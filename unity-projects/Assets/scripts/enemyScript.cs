using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class enemyScript : MonoBehaviour
{
    public GameObject heli;
    // Start is called before the first frame update
    void Start()
    {
        // me = GameObject.Find("Helicopter"); //when your gameobject is private
//        for (int i = 0; i <= 19; i++)
  //      {
    //        Vector3 enemypos = new Vector3(Random.Range(500, 1000), Random.Range(100, 150), Random.Range(50, 100));
      //      Instantiate(enemy, enemypos, transform.rotation);
        //}
    }

    // Update is called once per frame
    void Update()
    {
        transform.Translate(0, 0, 0.1f);
        transform.LookAt(heli.transform);
    }
}