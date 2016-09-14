package com.marksandspencer.ui.cucumber;

import com.marksandspencer.ui.support.Driver;
import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;
import org.junit.AfterClass;
import org.junit.BeforeClass;
import org.junit.runner.RunWith;


@RunWith(Cucumber.class)
@CucumberOptions(monochrome = true, strict = true,
        tags = {"@search"},
        features = "src/test/resources/features",
        format = {"html:target/cucumber"},
        glue = {"com.marksandspencer.ui.cucumber",
                "com.marksandspencer.ui.stepdefinitions",
                "com.marksandspencer.ui.support",
                "com.marksandspencer.ui.pages"})

public class RunCukesTest {


    @BeforeClass
    public static void setup() {
        Driver.initialiseDriver();
    }

    @AfterClass

    public static void teardown() {
        Driver.quitDriver();
    }

}
