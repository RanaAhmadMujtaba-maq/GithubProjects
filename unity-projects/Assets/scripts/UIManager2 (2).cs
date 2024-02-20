using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.UI;


public class UIManager2 : MonoBehaviour
{
    public Button MuteButton;
    public Button UnMuteButton;

    public Slider volumeSlider;
    public GameObject MenuPanel;
    public AudioSource gameaudio;

    void Start()
    {
        MenuPanel.SetActive(false); 
        gameaudio = GetComponent<AudioSource>();
        volumeSlider.onValueChanged.AddListener(delegate{changeVolume(volumeSlider.value);});
    }

    public void changeVolume(float slidervalue){
        gameaudio.volume = slidervalue;
    }

    public void ExitGame()
    {
        Application.Quit();
    }

    public void PauseGame()
    {
        Time.timeScale = 0;
        ShowMenuPanel();   
    }

    public void ResumeGame()
    {
        Time.timeScale = 1;
        MenuPanel.SetActive(false);
    }

    public void ShowMenuPanel()
    {
        MenuPanel.SetActive(true);
    }

    public void muteGame()
    {
        gameaudio.mute = true;
        MuteButton.gameObject.SetActive(false);
        UnMuteButton.gameObject.SetActive(true);
    }

    public void UnmuteGame()
    {
        gameaudio.mute = false;
        UnMuteButton.gameObject.SetActive(false);
        MuteButton.gameObject.SetActive(true);
    }


}
