$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("filter.feature");
formatter.feature({
  "line": 2,
  "name": "Look for items  in the M\u0026S webpage using filter",
  "description": "",
  "id": "look-for-items--in-the-m\u0026s-webpage-using-filter",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@search"
    }
  ]
});
formatter.before({
  "duration": 494863901,
  "status": "passed"
});
formatter.scenario({
  "line": 4,
  "name": "Search for Sole Fish using  the tab and filter",
  "description": "",
  "id": "look-for-items--in-the-m\u0026s-webpage-using-filter;search-for-sole-fish-using--the-tab-and-filter",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 5,
  "name": "I am a in the M\u0026S webpage",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "I am in the Meat Poultry and Fish Category",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "select Sole from filter",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "I can confirm the search result contains \"Sole\"",
  "keyword": "And "
});
formatter.match({
  "location": "Steps_Definition.navigateToPage()"
});
formatter.result({
  "duration": 292358610855,
  "status": "passed"
});
formatter.match({
  "location": "Steps_Definition.i_am_in_the_Meat_Poultry_and_Fish_Category()"
});
formatter.result({
  "duration": 30435730580,
  "error_message": "org.openqa.selenium.NoSuchElementException: Unable to locate element: {\"method\":\"link text\",\"selector\":\"Meat, Poultry \u0026 Fish\"}\nCommand duration or timeout: 30.22 seconds\nFor documentation on this error, please visit: http://seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00272.53.0\u0027, revision: \u002735ae25b1534ae328c771e0856c93e187490ca824\u0027, time: \u00272016-03-15 10:43:46\u0027\nSystem info: host: \u0027Mateus-Da-Silva-MacPro.local\u0027, ip: \u002710.190.137.35\u0027, os.name: \u0027Mac OS X\u0027, os.arch: \u0027x86_64\u0027, os.version: \u002710.10.5\u0027, java.version: \u00271.8.0_73\u0027\nDriver info: org.openqa.selenium.firefox.FirefoxDriver\nCapabilities [{applicationCacheEnabled\u003dtrue, rotatable\u003dfalse, handlesAlerts\u003dtrue, databaseEnabled\u003dtrue, version\u003d43.0, platform\u003dMAC, nativeEvents\u003dfalse, acceptSslCerts\u003dtrue, webStorageEnabled\u003dtrue, locationContextEnabled\u003dtrue, browserName\u003dfirefox, takesScreenshot\u003dtrue, javascriptEnabled\u003dtrue, cssSelectorsEnabled\u003dtrue}]\nSession ID: bfe6ba3e-7401-f54f-9612-2851466952fc\n*** Element info: {Using\u003dlink text, value\u003dMeat, Poultry \u0026 Fish}\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:422)\n\tat org.openqa.selenium.remote.ErrorHandler.createThrowable(ErrorHandler.java:206)\n\tat org.openqa.selenium.remote.ErrorHandler.throwIfResponseFailed(ErrorHandler.java:158)\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:678)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:363)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByLinkText(RemoteWebDriver.java:428)\n\tat org.openqa.selenium.By$ByLinkText.findElement(By.java:246)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:355)\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:69)\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:38)\n\tat com.sun.proxy.$Proxy17.click(Unknown Source)\n\tat com.marksandspencer.ui.pages.FilterPage.meatPoultryFish(FilterPage.java:46)\n\tat com.marksandspencer.ui.stepdefinitions.Steps_Definition.i_am_in_the_Meat_Poultry_and_Fish_Category(Steps_Definition.java:48)\n\tat ✽.And I am in the Meat Poultry and Fish Category(filter.feature:6)\nCaused by: org.openqa.selenium.NoSuchElementException: Unable to locate element: {\"method\":\"link text\",\"selector\":\"Meat, Poultry \u0026 Fish\"}\nFor documentation on this error, please visit: http://seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00272.53.0\u0027, revision: \u002735ae25b1534ae328c771e0856c93e187490ca824\u0027, time: \u00272016-03-15 10:43:46\u0027\nSystem info: host: \u0027Mateus-Da-Silva-MacPro.local\u0027, ip: \u002710.190.137.35\u0027, os.name: \u0027Mac OS X\u0027, os.arch: \u0027x86_64\u0027, os.version: \u002710.10.5\u0027, java.version: \u00271.8.0_73\u0027\nDriver info: driver.version: unknown\n\tat \u003canonymous class\u003e.FirefoxDriver.prototype.findElementInternal_(file:///var/folders/x3/lqj16v991nd4107lknhm76_80000gn/T/anonymous6386594923474090425webdriver-profile/extensions/fxdriver@googlecode.com/components/driver-component.js:10770)\n\tat \u003canonymous class\u003e.fxdriver.Timer.prototype.setTimeout/\u003c.notify(file:///var/folders/x3/lqj16v991nd4107lknhm76_80000gn/T/anonymous6386594923474090425webdriver-profile/extensions/fxdriver@googlecode.com/components/driver-component.js:625)\n",
  "status": "failed"
});
formatter.match({
  "location": "Steps_Definition.select_Sole_from_filter()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Sole",
      "offset": 42
    }
  ],
  "location": "Steps_Definition.i_can_confirm_the_search_result_contains(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.embedding("image/png", "embedded0.png");
formatter.after({
  "duration": 247129914,
  "status": "passed"
});
formatter.before({
  "duration": 26918319,
  "status": "passed"
});
formatter.scenario({
  "line": 11,
  "name": "Search for Salmon Fish using tab,fish and dro down menu",
  "description": "",
  "id": "look-for-items--in-the-m\u0026s-webpage-using-filter;search-for-salmon-fish-using-tab,fish-and-dro-down-menu",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 12,
  "name": "I am a in the M\u0026S webpage",
  "keyword": "Given "
});
formatter.step({
  "line": 13,
  "name": "I am in the Meat Poultry and Fish Category",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "select Salmon from filter",
  "keyword": "When "
});
formatter.step({
  "line": 15,
  "name": "select ratings from drop down menu",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "I can confirm the search result contains \"Salmon\"",
  "keyword": "And "
});
formatter.match({
  "location": "Steps_Definition.navigateToPage()"
});
formatter.result({
  "duration": 32385026540,
  "error_message": "org.openqa.selenium.NoSuchElementException: Unable to locate element: {\"method\":\"css selector\",\"selector\":\"#SC_Level_1_1\u003espan\"}\nCommand duration or timeout: 30.11 seconds\nFor documentation on this error, please visit: http://seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00272.53.0\u0027, revision: \u002735ae25b1534ae328c771e0856c93e187490ca824\u0027, time: \u00272016-03-15 10:43:46\u0027\nSystem info: host: \u0027Mateus-Da-Silva-MacPro.local\u0027, ip: \u002710.190.137.35\u0027, os.name: \u0027Mac OS X\u0027, os.arch: \u0027x86_64\u0027, os.version: \u002710.10.5\u0027, java.version: \u00271.8.0_73\u0027\nDriver info: org.openqa.selenium.firefox.FirefoxDriver\nCapabilities [{applicationCacheEnabled\u003dtrue, rotatable\u003dfalse, handlesAlerts\u003dtrue, databaseEnabled\u003dtrue, version\u003d43.0, platform\u003dMAC, nativeEvents\u003dfalse, acceptSslCerts\u003dtrue, webStorageEnabled\u003dtrue, locationContextEnabled\u003dtrue, browserName\u003dfirefox, takesScreenshot\u003dtrue, javascriptEnabled\u003dtrue, cssSelectorsEnabled\u003dtrue}]\nSession ID: bfe6ba3e-7401-f54f-9612-2851466952fc\n*** Element info: {Using\u003dcss selector, value\u003d#SC_Level_1_1\u003espan}\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:422)\n\tat org.openqa.selenium.remote.ErrorHandler.createThrowable(ErrorHandler.java:206)\n\tat org.openqa.selenium.remote.ErrorHandler.throwIfResponseFailed(ErrorHandler.java:158)\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:678)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:363)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByCssSelector(RemoteWebDriver.java:492)\n\tat org.openqa.selenium.By$ByCssSelector.findElement(By.java:430)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:355)\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:69)\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:38)\n\tat com.sun.proxy.$Proxy17.isDisplayed(Unknown Source)\n\tat com.marksandspencer.ui.pages.SearchPage.isOnSearchPage(SearchPage.java:29)\n\tat com.marksandspencer.ui.stepdefinitions.Steps_Definition.navigateToPage(Steps_Definition.java:27)\n\tat ✽.Given I am a in the M\u0026S webpage(filter.feature:12)\nCaused by: org.openqa.selenium.NoSuchElementException: Unable to locate element: {\"method\":\"css selector\",\"selector\":\"#SC_Level_1_1\u003espan\"}\nFor documentation on this error, please visit: http://seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00272.53.0\u0027, revision: \u002735ae25b1534ae328c771e0856c93e187490ca824\u0027, time: \u00272016-03-15 10:43:46\u0027\nSystem info: host: \u0027Mateus-Da-Silva-MacPro.local\u0027, ip: \u002710.190.137.35\u0027, os.name: \u0027Mac OS X\u0027, os.arch: \u0027x86_64\u0027, os.version: \u002710.10.5\u0027, java.version: \u00271.8.0_73\u0027\nDriver info: driver.version: unknown\n\tat \u003canonymous class\u003e.FirefoxDriver.prototype.findElementInternal_(file:///var/folders/x3/lqj16v991nd4107lknhm76_80000gn/T/anonymous6386594923474090425webdriver-profile/extensions/fxdriver@googlecode.com/components/driver-component.js:10770)\n\tat \u003canonymous class\u003e.fxdriver.Timer.prototype.setTimeout/\u003c.notify(file:///var/folders/x3/lqj16v991nd4107lknhm76_80000gn/T/anonymous6386594923474090425webdriver-profile/extensions/fxdriver@googlecode.com/components/driver-component.js:625)\n",
  "status": "failed"
});
formatter.match({
  "location": "Steps_Definition.i_am_in_the_Meat_Poultry_and_Fish_Category()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Steps_Definition.select_Salmon_from_filter()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Steps_Definition.select_ratings_from_drop_down_menu()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Salmon",
      "offset": 42
    }
  ],
  "location": "Steps_Definition.i_can_confirm_the_search_result_contains(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.embedding("image/png", "embedded1.png");
formatter.after({
  "duration": 228191659,
  "status": "passed"
});
formatter.uri("search.feature");
formatter.feature({
  "line": 2,
  "name": "Search for items  in the M\u0026S webpage",
  "description": "",
  "id": "search-for-items--in-the-m\u0026s-webpage",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@search"
    }
  ]
});
formatter.before({
  "duration": 21145941,
  "status": "passed"
});
formatter.background({
  "line": 4,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 5,
  "name": "I am a in the M\u0026S webpage",
  "keyword": "Given "
});
formatter.match({
  "location": "Steps_Definition.navigateToPage()"
});
formatter.result({
  "duration": 34533120949,
  "error_message": "org.openqa.selenium.NoSuchElementException: Unable to locate element: {\"method\":\"css selector\",\"selector\":\"#SC_Level_1_1\u003espan\"}\nCommand duration or timeout: 32.22 seconds\nFor documentation on this error, please visit: http://seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00272.53.0\u0027, revision: \u002735ae25b1534ae328c771e0856c93e187490ca824\u0027, time: \u00272016-03-15 10:43:46\u0027\nSystem info: host: \u0027Mateus-Da-Silva-MacPro.local\u0027, ip: \u0027192.168.2.2\u0027, os.name: \u0027Mac OS X\u0027, os.arch: \u0027x86_64\u0027, os.version: \u002710.10.5\u0027, java.version: \u00271.8.0_73\u0027\nDriver info: org.openqa.selenium.firefox.FirefoxDriver\nCapabilities [{applicationCacheEnabled\u003dtrue, rotatable\u003dfalse, handlesAlerts\u003dtrue, databaseEnabled\u003dtrue, version\u003d43.0, platform\u003dMAC, nativeEvents\u003dfalse, acceptSslCerts\u003dtrue, webStorageEnabled\u003dtrue, locationContextEnabled\u003dtrue, browserName\u003dfirefox, takesScreenshot\u003dtrue, javascriptEnabled\u003dtrue, cssSelectorsEnabled\u003dtrue}]\nSession ID: bfe6ba3e-7401-f54f-9612-2851466952fc\n*** Element info: {Using\u003dcss selector, value\u003d#SC_Level_1_1\u003espan}\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:422)\n\tat org.openqa.selenium.remote.ErrorHandler.createThrowable(ErrorHandler.java:206)\n\tat org.openqa.selenium.remote.ErrorHandler.throwIfResponseFailed(ErrorHandler.java:158)\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:678)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:363)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByCssSelector(RemoteWebDriver.java:492)\n\tat org.openqa.selenium.By$ByCssSelector.findElement(By.java:430)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:355)\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:69)\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:38)\n\tat com.sun.proxy.$Proxy17.isDisplayed(Unknown Source)\n\tat com.marksandspencer.ui.pages.SearchPage.isOnSearchPage(SearchPage.java:29)\n\tat com.marksandspencer.ui.stepdefinitions.Steps_Definition.navigateToPage(Steps_Definition.java:27)\n\tat ✽.Given I am a in the M\u0026S webpage(search.feature:5)\nCaused by: org.openqa.selenium.NoSuchElementException: Unable to locate element: {\"method\":\"css selector\",\"selector\":\"#SC_Level_1_1\u003espan\"}\nFor documentation on this error, please visit: http://seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00272.53.0\u0027, revision: \u002735ae25b1534ae328c771e0856c93e187490ca824\u0027, time: \u00272016-03-15 10:43:46\u0027\nSystem info: host: \u0027Mateus-Da-Silva-MacPro.local\u0027, ip: \u0027192.168.2.2\u0027, os.name: \u0027Mac OS X\u0027, os.arch: \u0027x86_64\u0027, os.version: \u002710.10.5\u0027, java.version: \u00271.8.0_73\u0027\nDriver info: driver.version: unknown\n\tat \u003canonymous class\u003e.FirefoxDriver.prototype.findElementInternal_(file:///var/folders/x3/lqj16v991nd4107lknhm76_80000gn/T/anonymous6386594923474090425webdriver-profile/extensions/fxdriver@googlecode.com/components/driver-component.js:10770)\n\tat \u003canonymous class\u003e.fxdriver.Timer.prototype.setTimeout/\u003c.notify(file:///var/folders/x3/lqj16v991nd4107lknhm76_80000gn/T/anonymous6386594923474090425webdriver-profile/extensions/fxdriver@googlecode.com/components/driver-component.js:625)\n",
  "status": "failed"
});
formatter.scenario({
  "line": 7,
  "name": "Search for  Dresses using the input box and assert they are valid",
  "description": "",
  "id": "search-for-items--in-the-m\u0026s-webpage;search-for--dresses-using-the-input-box-and-assert-they-are-valid",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 8,
  "name": "I search for \"Floral Dresses\"",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "I can confirm the search result contains \"Dress\"",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "Floral Dresses",
      "offset": 14
    }
  ],
  "location": "Steps_Definition.i_search_for(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Dress",
      "offset": 42
    }
  ],
  "location": "Steps_Definition.i_can_confirm_the_search_result_contains(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.embedding("image/png", "embedded2.png");
formatter.after({
  "duration": 130112794,
  "status": "passed"
});
formatter.before({
  "duration": 29848063,
  "status": "passed"
});
formatter.background({
  "line": 4,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 5,
  "name": "I am a in the M\u0026S webpage",
  "keyword": "Given "
});
formatter.match({
  "location": "Steps_Definition.navigateToPage()"
});
formatter.result({
  "duration": 3951089191,
  "status": "passed"
});
formatter.scenario({
  "line": 11,
  "name": "Search for  Desires usin the input box and assert desire is not present",
  "description": "",
  "id": "search-for-items--in-the-m\u0026s-webpage;search-for--desires-usin-the-input-box-and-assert-desire-is-not-present",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 12,
  "name": "I search for \"Desire\"",
  "keyword": "When "
});
formatter.step({
  "line": 13,
  "name": "I can confirm the search result is empty \"We found 0 results for Desire\"",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "Desire",
      "offset": 14
    }
  ],
  "location": "Steps_Definition.i_search_for(String)"
});
formatter.result({
  "duration": 184585131,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "We found 0 results for Desire",
      "offset": 42
    }
  ],
  "location": "Steps_Definition.i_can_confirm_the_search_result_is_empty(String)"
});
formatter.result({
  "duration": 8120958778,
  "status": "passed"
});
formatter.after({
  "duration": 33554,
  "status": "passed"
});
});