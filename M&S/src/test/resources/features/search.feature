@search
Feature: Search for items  in the M&S webpage

  Background:
    Given I am a in the M&S webpage

  Scenario: Search for  Dresses using the input box and assert they are valid
    When I search for "Floral Dresses"
    Then I can confirm the search result contains "Dress"

  Scenario: Search for  Desires usin the input box and assert desire is not present
    When I search for "Desire"
    Then I can confirm the search result is empty "We found 0 results for Desire"
