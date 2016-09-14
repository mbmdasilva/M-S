package com.marksandspencer.ui.pages;


import com.marksandspencer.ui.support.Driver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

public class SearchPage extends Driver{

    @FindBy(css = "#SC_Level_1_1>span")
    private WebElement msSearchPage;

    @FindBy(css = "#global-search")
    private WebElement searchInputBox;

    @FindBy(css = "#goButton")
    private WebElement goButton;

    @FindBy(css = "#SC_Level_1_586>span")
    private  WebElement menTab;

    public SearchPage(){
        PageFactory.initElements(driver,this);
    }


    public void  isOnSearchPage() {
        msSearchPage.isDisplayed();
    }

    public void  searchItem(String item){
        searchInputBox.clear();
        searchInputBox.sendKeys(item);
        goButton.click();

    }





}
