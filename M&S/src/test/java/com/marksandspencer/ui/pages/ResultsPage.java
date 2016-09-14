package com.marksandspencer.ui.pages;

import com.marksandspencer.ui.support.Driver;
import org.openqa.selenium.By;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

import java.util.*;

public class ResultsPage extends Driver {

    @FindBy(css = ".item-count>legend")
    private WebElement count;

    @FindBy(css = ".page-xOfY")
    private WebElement pageCount;

    @FindBy(css = ".criteria")
    private WebElement zeroResults;

    public ResultsPage() {
        PageFactory.initElements(driver, this);
    }

    public List<String> getAllPageItems(int count) {

        final List<String> listOfItems = new ArrayList<>();

        for (int i = 0; i < count; i++) {

            List<WebElement> webElementList = driver.findElements(By.cssSelector(".body2"));


            webElementList.forEach(key -> listOfItems.add(key.getText()));

            driver.findElement(By.cssSelector(".next")).click();

        }
        return listOfItems;
    }

    public int getResultsPageCount() {

        List<String> list = Arrays.asList(pageCount.getText().split("of"));

        return Integer.parseInt(list.get(1).trim());
    }

    public void emptyResult() {

        zeroResults.getText();
    }


}
