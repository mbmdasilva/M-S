package com.marksandspencer.ui.pages;

import com.marksandspencer.ui.support.Driver;
import org.openqa.selenium.By;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.Select;
import org.openqa.selenium.support.ui.WebDriverWait;


public class FilterPage extends Driver {

    @FindBy(css = "#SC_Level_1_1551>span")
    private WebElement foodAndWine;

    @FindBy(linkText = "Food Shop")
    private WebElement foodShop;

    @FindBy(linkText = "Meat, Poultry & Fish")
    private WebElement meatPoultryFish;

    @FindBy(xpath = "//form[@id='filter-listings']/div[2]/div/fieldset[2]/div/div/ul/li[3]/label")
    private WebElement soleFish;

    @FindBy(xpath = "//form[@id='filter-listings']/div[2]/div/fieldset[2]/div/div/ul/li/label")
    private WebElement salmonFish;

    @FindBy(css = "li> label.checkbox-label a:nth-child(1) span")
    private WebElement selectfilterFish;

    public FilterPage() {
        PageFactory.initElements(driver, this);
    }

    public void foodAndWine() {
        foodAndWine.click();
    }

    public void foodShop() {
        foodShop.click();
    }

    public void meatPoultryFish() {
        meatPoultryFish.click();
    }

    public void selectfilterFish() {
        selectfilterFish.click();
    }

    public void selectSoleFish() {
        soleFish.click();
    }

    public void selectSalmonFish() {
        salmonFish.click();
    }

    public void selectSortByRating() {

        WebElement sort = driver.findElement(By.id("sortBy-top"));
        new WebDriverWait(driver, 15).until(ExpectedConditions.visibilityOf(sort));
        new Select(driver.findElement(By.id("sortBy-top"))).selectByVisibleText("RATINGS");
    }

}
