using Cinemachine;
using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using MoreMountains.NiceVibrations;

public class PlayerEvents : MonoBehaviour
{
    public static PlayerEvents instance;

    public GameObject stage;
    public GameObject stageRotationCam;
    public int speed = 63;

    [Header("Power Slide Health")]
    public float slipPowerDecrease = 0.1f;
    public float allPowerIcrease = 0.2f;
    public float mudShowerPowerDecrease = 0.3f;
    public int cashIncreaseAmount = 20;
    public int cashDecreaseAmount = -50;

    [Header("Sound")]
    public AudioClip ShowerPlusOther;
    public AudioClip SlipPlusOther;
    public AudioClip CashSound;

    [Header("Bridal Objects")]
    public GameObject Bride;
    public GameObject Dresses;
    public GameObject DirtyDresses;
    public GameObject Hairs;
    public GameObject HairDirt;
    public GameObject RightShoes;
    public GameObject DirtRightShoes;
    public GameObject LeftShoes;
    public GameObject DirtLeftShoes;

    [Header("Particles")]
    public GameObject dollerParticles;
    public GameObject WaterStarsBlue;
    public GameObject ClothsBlashBlue;

    [Header("Camera Related")]
    public Camera MainCamera;
    public GameObject StageCamera;
    public float initialFOV = 90f;
    public float finalFOV = 45f;
    public float animationDuration = 5f;

    [Header("Misc")]
    public CinemachineVirtualCamera virtualCamera;

    [Header("Animation")]
    private bool isAnimating = false;
    Animator animBride;
    Animator playerAnim;

    [Header("Clothing")]
    public int currentCloths;
    public int currentHairs;
    public int currentShoes;
    bool dirty = false;

    private void Awake()
    {

        if (instance == null)
        {

            instance = this;

        }

    }
    void Start()
    {

        animBride = Bride.GetComponent<Animator>();
        playerAnim = gameObject.GetComponent<Animator>();
        //groomAnimator = groomCharacter.GetComponent<Animator>();
        MainCamera = Camera.main;
        Dresses.transform.GetChild(currentCloths).gameObject.SetActive(true);
        Hairs.transform.GetChild(currentHairs).gameObject.SetActive(true);
        LeftShoes.transform.GetChild(currentShoes).gameObject.SetActive(true);
        RightShoes.transform.GetChild(currentShoes).gameObject.SetActive(true);

    }
    private void Update()
    {

        if (UI_Events.instance.stageCamRotation)
        {

            stageRotationCam.transform.RotateAround(stage.transform.position, Vector3.up, speed * Time.deltaTime);

        }

    }
    private void OnTriggerEnter(Collider other)
    {

        switch (other.gameObject.tag)
        {

            case "Doller":

                GameObject temp = Instantiate(dollerParticles, other.transform.position, Quaternion.identity);
                Destroy(other.gameObject);
                Destroy(temp, 1f);
                
                if (PlayerPrefs.GetInt("Vibration") == 0)
                {

                    //Handheld.Vibrate();
                    MMVibrationManager.Haptic(HapticTypes.Selection, false, true, this);

                }
                SoundManager.Instance?.PlaySound(CashSound);
                PowerSlideCntr.instance.increaseCash(cashIncreaseAmount);
                break;

            case "Tax":

                GameObject temp2 = Instantiate(dollerParticles, other.transform.position, Quaternion.identity);
                Destroy(other.gameObject);
                Destroy(temp2, 1f);
                SoundManager.Instance?.PlaySound(SlipPlusOther);
                PowerSlideCntr.instance.decreaseCash(cashDecreaseAmount);
                break;

            case "Slip":

                animBride.SetTrigger("Slip");
                dirty = true;
                Dresses.transform.GetChild(currentCloths).gameObject.SetActive(false);
                DirtyDresses.transform.GetChild(currentCloths).gameObject.SetActive(true);
                HairDirt.SetActive(true);
                DirtLeftShoes.SetActive(true);
                DirtRightShoes.SetActive(true);
                SoundManager.Instance?.PlaySound(SlipPlusOther);
                if (PlayerPrefs.GetInt("Vibration") == 0)
                {

                    MMVibrationManager.Haptic(HapticTypes.Selection, false, true, this);
                    //Handheld.Vibrate();

                }

                PowerSlideCntr.instance.decreaseHealth(slipPowerDecrease);
                break;

            //Cloths
            case "Purple":
            case "LightGreen":
            case "SkyBlue":
            case "Cyan":
            case "White":
            case "CyanHalf":
            case "Pink":
            case "WhiteSkyBlue":

                int clothIndex = GetClothIndex(other.gameObject.tag);
                if (clothIndex != -1)
                {
                    if (!dirty)
                    {

                        ClothsBlashBlue.SetActive(true);
                        Dresses.transform.GetChild(currentCloths).gameObject.SetActive(false);
                        currentCloths = clothIndex;
                        Dresses.transform.GetChild(currentCloths).gameObject.SetActive(true);
                        Destroy(other.gameObject);
                        if (PlayerPrefs.GetInt("Vibration") == 0)
                        {
                            MMVibrationManager.Haptic(HapticTypes.Selection, false, true, this);
                            //Handheld.Vibrate();
                        }

                        SoundManager.Instance?.PlaySound(ShowerPlusOther);
                        PowerSlideCntr.instance.increaseHealth(allPowerIcrease);

                    }
                    else
                    {

                        DirtyDresses.transform.GetChild(currentCloths).gameObject.SetActive(false);
                        currentCloths = clothIndex;
                        DirtyDresses.transform.GetChild(currentCloths).gameObject.SetActive(true);
                        Destroy(other.gameObject);
                        if (PlayerPrefs.GetInt("Vibration") == 0)
                        {
                            MMVibrationManager.Haptic(HapticTypes.Selection, false, true, this);
                            //Handheld.Vibrate();
                        }

                        SoundManager.Instance?.PlaySound(ShowerPlusOther);
                        PowerSlideCntr.instance.increaseHealth(allPowerIcrease);

                    }

                }
                break;
            // Cloths Ends here

            case "Mudshower":

                dirty = true;
                Dresses.transform.GetChild(currentCloths).gameObject.SetActive(false);
                DirtyDresses.transform.GetChild(currentCloths).gameObject.SetActive(true);
                HairDirt.SetActive(true);
                DirtLeftShoes.SetActive(true);
                DirtRightShoes.SetActive(true);
                if (PlayerPrefs.GetInt("Vibration") == 0)
                {
                    MMVibrationManager.Haptic(HapticTypes.Selection, false, true, this);
                    //Handheld.Vibrate();
                }

                SoundManager.Instance?.PlaySound(SlipPlusOther);
                PowerSlideCntr.instance.decreaseHealth(mudShowerPowerDecrease);
                break;

            case "WaterShower":

                if (dirty)
                {

                    StartCoroutine(ShowerEffects());
                    if (PlayerPrefs.GetInt("Vibration") == 0)
                    {
                        MMVibrationManager.Haptic(HapticTypes.Selection, false, true, this);
                        //Handheld.Vibrate();
                    }

                    SoundManager.Instance?.PlaySound(ShowerPlusOther);
                    PowerSlideCntr.instance.increaseHealth(allPowerIcrease);

                }
                else
                {

                    if (PlayerPrefs.GetInt("Vibration") == 0)
                    {
                        MMVibrationManager.Haptic(HapticTypes.Selection, false, true, this);
                        //Handheld.Vibrate();
                    }

                    SoundManager.Instance?.PlaySound(ShowerPlusOther);
                    PowerSlideCntr.instance.increaseHealth(allPowerIcrease);

                }
                break;

            //Hairs
            case "Hair1":
            case "Hair2":
            case "Hair3":
            case "Hair4":
            case "Hair5":
            case "Hair6":
            case "Hair7":
            case "Hair8":
            case "Hair9":

                int hairIndex = GetHairIndex(other.gameObject.tag);

                if (hairIndex != -1)
                {

                    Hairs.transform.GetChild(currentHairs).gameObject.SetActive(false);
                    currentHairs = hairIndex;
                    Hairs.transform.GetChild(currentHairs).gameObject.SetActive(true);
                    Destroy(other.gameObject);
                    SoundManager.Instance?.PlaySound(ShowerPlusOther);
                    PowerSlideCntr.instance.increaseHealth(allPowerIcrease);

                }
                break;
            //Hairs Ends here

            //Shoes
            case "Shoes1":
            case "Shoes2":
            case "Shoes3":
            case "Shoes4":
            case "Shoes5":

                int shoeIndex = GetShoeIndex(other.gameObject.tag);

                if (shoeIndex != -1)
                {

                    LeftShoes.transform.GetChild(currentShoes).gameObject.SetActive(false);
                    RightShoes.transform.GetChild(currentShoes).gameObject.SetActive(false);
                    currentShoes = shoeIndex;
                    LeftShoes.transform.GetChild(currentShoes).gameObject.SetActive(true);
                    RightShoes.transform.GetChild(currentShoes).gameObject.SetActive(true);
                    Destroy(other.gameObject);
                    SoundManager.Instance?.PlaySound(ShowerPlusOther);
                    PowerSlideCntr.instance.increaseHealth(allPowerIcrease);

                }
                break;
            //Hairs Ends here

            case "LevelComplete":

                StartCoroutine(CompleteLevel());
                break;

        }
    }

    private int GetClothIndex(string tag)
    {

        switch (tag)
        {

            case "Purple": return 0;
            case "LightGreen": return 1;
            case "SkyBlue": return 2;
            case "Cyan": return 3;
            case "White": return 4;
            case "CyanHalf": return 5;
            case "Pink": return 6;
            case "WhiteSkyBlue": return 7;
            default: return -1; // Tag not found

        }

    }
    private int GetHairIndex(string tag)
    {

        switch (tag)
        {

            case "Hair1": return 0;
            case "Hair2": return 1;
            case "Hair3": return 2;
            case "Hair4": return 3;
            case "Hair5": return 4;
            case "Hair6": return 5;
            case "Hair7": return 6;
            case "Hair8": return 7;
            case "Hair9": return 8;
            default: return -1; // Tag not found

        }

    }
    private int GetShoeIndex(string tag)
    {

        switch (tag)
        {

            case "Shoes1": return 0;
            case "Shoes2": return 1;
            case "Shoes3": return 2;
            case "Shoes4": return 3;
            case "Shoes5": return 4;
            default: return -1; // Tag not found

        }

    }
    public IEnumerator CompleteLevel()
    {

        virtualCamera.Follow = null;
        PlayerScript.instance.levelComplete = true;
        UI_Events.instance.Main_Menu.transform.GetChild(3).gameObject.SetActive(false);
        playerAnim.enabled = true;
        animBride.SetTrigger("LevelComplete");
        yield return new WaitForSeconds(2f);
        animBride.SetTrigger("Walk");
        yield return new WaitForSeconds(2.5f);
        animBride.SetTrigger("Stand");
        yield return new WaitForSeconds(1f);
        StageCamera.SetActive(true);
        MainCamera.gameObject.SetActive(false);
        //yield return new WaitForSeconds(3f);
        //StartCoroutine(AnimateFOVReduction());
        yield return new WaitForSeconds(5f);

        if (PowerSlideCntr.instance.getPowerSlidePercentage()<=0.8)
        {

            UI_Events.instance.Failed();
            SoundManager.Instance?.PlaySound(UI_Events.instance.LevelFailSound);

        }
        else
        {

            UI_Events.instance.ChooseAction.gameObject.SetActive(true);
            SoundManager.Instance?.PlaySound(UI_Events.instance.LevelCompleteSound);

        }

    }
    public IEnumerator ShowerEffects()
    {

        dirty = false;
        WaterStarsBlue.SetActive(true);
        DirtyDresses.transform.GetChild(currentCloths).gameObject.SetActive(false);
        Dresses.transform.GetChild(currentCloths).gameObject.SetActive(true);
        HairDirt.SetActive(false);
        DirtLeftShoes.SetActive(false);
        DirtRightShoes.SetActive(false);
        yield return new WaitForSeconds(2.5f);
        WaterStarsBlue.SetActive(false);

    }
    private IEnumerator AnimateFOVReduction()
    {

        isAnimating = true;
        float startTime = Time.time;

        while (Time.time - startTime < animationDuration)
        {

            float t = (Time.time - startTime) / animationDuration;
            float currentFOV = Mathf.Lerp(initialFOV, finalFOV, t);
            StageCamera.GetComponent<Camera>().fieldOfView = currentFOV;
            yield return null; // Wait for the next frame

        }

        // Ensure the final FOV is set
        StageCamera.GetComponent<Camera>().fieldOfView = finalFOV;
        isAnimating = false;

    }
}