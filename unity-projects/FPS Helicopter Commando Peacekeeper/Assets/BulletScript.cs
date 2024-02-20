using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class BulletScript : MonoBehaviour
{
    public GameObject explosion;
//public AudioClip ExplosionSound;
    // Start is called before the first frame update
    void Start()
    {

    }

    // Update is called once per frame
    void Update()
    {
        transform.Translate(0, 0, 1f);
        explosion.SetActive(false);
    }

    private void OnCollisionEnter(Collision col)
    {
        explosion.SetActive(true);
        if (col.gameObject.name.StartsWith("Cube"))
        {
            Destroy(col.gameObject);
            Instantiate(explosion, transform.position, transform.rotation);
        }

        Destroy(transform.gameObject);

        explosion.SetActive(true);
        if (col.gameObject.name.StartsWith("chillar"))
        {
            Destroy(col.gameObject);
            Instantiate(explosion, transform.position, transform.rotation);
        }

        Destroy(transform.gameObject);
    }
}