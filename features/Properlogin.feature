@properlogin
Feature: Login Functionality

  Scenario Outline: Login with different credentials

    Given user opens the application
    When user enters username "<username>"
    When user enters password "<password>"
    When user clicks login
    Then "<expectedResult>" should be displayed

    Examples:
      | username              | password    | expectedResult |
      | document@gmail.com     | Admin@123   |Dashboard|
      | document@gmail.com     | Admin@1234    |Password wrong|
      | document@gmaiil.com     | Admin@123    |username wrong|
      | wrong@gmail.com       | Admin@12366  |Both wrong|
      |                        |             |Need credentials|  