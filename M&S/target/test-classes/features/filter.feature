@search
Feature:Look for items  in the M&S webpage using filter

  Scenario: Search for Sole Fish using  the tab and filter
    Given I am a in the M&S webpage
    And I am in the Meat Poultry and Fish Category
    When select Sole from filter
    And  I can confirm the search result contains "Sole"


  Scenario: Search for Salmon Fish using tab,fish and dro down menu
    Given I am a in the M&S webpage
    And I am in the Meat Poultry and Fish Category
    When select Salmon from filter
    And  select ratings from drop down menu
    And  I can confirm the search result contains "Salmon"