package com.marksandspencer.ui.support;

import org.openqa.selenium.Alert;
import org.openqa.selenium.NoAlertPresentException;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.firefox.FirefoxDriver;


public class Driver {

    public static WebDriver driver;
    private boolean acceptNextAlert = true;

    public static void navigateToPage() {
        driver.get("http://www.marksandspencer.com/");
        if (isAlertPresent()){
            Alert alert = driver.switchTo().alert();
            alert.dismiss();

        }
    }

    public static void initialiseDriver() {
        driver = new FirefoxDriver();
    }

    public static void quitDriver() {

        driver.quit();
    }

    public static boolean isAlertPresent() {
        try {
            driver.switchTo().alert();
            return true;
        } catch (NoAlertPresentException e) {
            return false;
        }
    }


}
