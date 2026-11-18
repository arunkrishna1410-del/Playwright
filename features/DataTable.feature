@hashes
Feature: going to work with DataTable

    Scenario: Testing DataTable

    Given user opens the testingpage
    When user enters the field
   
    |name|          email           |phone|
    |arun|arunkrishna11210@gmail.com|9874589654|
    |sanjay|sanjay123@gmail.com     |987454154165|

     Then page should close

@rowsHash
    Scenario: Testing DataTable

    Given user opens the testingpage
    When user enters the field
   
    |name|          arun           |
    |email|arunkrishna11210@gmail.com|
    |phone|9874589654|

     Then page should close

@DocString

    Scenario: Testing Address field

    Given user opens the testingpage
    When Enter Address in the field

    """
    no 9; west street ariyur pondy
    pin:605102, pondycherry
    """
    Then page should close