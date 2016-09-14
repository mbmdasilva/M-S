package com.marksandspencer.ui.stepdefinitions;


import com.marksandspencer.ui.pages.FilterPage;
import com.marksandspencer.ui.pages.ResultsPage;
import com.marksandspencer.ui.pages.SearchPage;
import com.marksandspencer.ui.support.Driver;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

import java.util.List;

import static org.hamcrest.MatcherAssert.assertThat;
import static org.hamcrest.Matchers.containsString;


public class Steps_Definition {

    SearchPage searchPage = new SearchPage();
    ResultsPage resultsPage = new ResultsPage();
    FilterPage filterPage = new FilterPage();

    @Given("^I am a in the M&S webpage$")
    public void navigateToPage() {
        Driver.navigateToPage();
        searchPage.isOnSearchPage();
    }

    @When("^I search for \"([^\"]*)\"$")
    public void i_search_for(String item) {
        searchPage.searchItem(item);
    }


    @Then("^I can confirm the search result contains \"([^\"]*)\"$")
    public void i_can_confirm_the_search_result_contains(String item) {

        List<String> stringList = resultsPage.getAllPageItems(resultsPage.getResultsPageCount());

        stringList.forEach(key -> assertThat(key, containsString(item)));
    }


    @Given("^I am in the Meat Poultry and Fish Category$")
    public void i_am_in_the_Meat_Poultry_and_Fish_Category() {
        filterPage.foodAndWine();
        filterPage.meatPoultryFish();
    }

    @When("^select Salmon from filter$")
    public void select_Salmon_from_filter() throws Throwable {
        filterPage.selectfilterFish();
        filterPage.selectSalmonFish();
    }

    @When("^select Sole from filter$")
    public void select_Sole_from_filter() {
        filterPage.selectfilterFish();
        filterPage.selectSoleFish();

    }

    @When("^select ratings from drop down menu$")
    public void select_ratings_from_drop_down_menu() {
        filterPage.selectSortByRating();
    }


    @Then("^I can confirm the search result is empty \"([^\"]*)\"$")
    public void i_can_confirm_the_search_result_is_empty(String strToCompare) throws Throwable {
        resultsPage.emptyResult();
        assertThat("We found 0 results for Desire", containsString(strToCompare));

    }


}