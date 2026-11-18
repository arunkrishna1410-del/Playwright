@regression
Feature: Login

  @smoke
  Scenario: Valid login
    Given user opens the login page
    Then dashboard should be displayed

  @negative
  Scenario: Invalid login
    Given user opens the login page
    Then error message should be displayed