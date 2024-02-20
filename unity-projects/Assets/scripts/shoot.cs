using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class shoot : MonoBehaviour
{
    public float damage = 10f;
    public float range = 100f;
 
    public GameObject fpsCam;
   
    // Update is called once per frame
    void Update () {
       
 
        if (Input.GetKeyDown(KeyCode.L))
        {
            print("fire!");
            Shoot();
        }
 
    }
 
    public void Shoot ()
    {
        RaycastHit hit;
        if (Physics.Raycast(fpsCam.transform.position, fpsCam.transform.forward, out hit, range))
        {
            Target target = hit.transform.GetComponent<Target>();
            if (target != null)
            {
                target.TakeDamage(damage);
            }
        }
    }
}