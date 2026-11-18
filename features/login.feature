Feature: Login Functionality
@loginfunctions

  Scenario Outline: Login with multiple credentials
    Given opening the application
    When user logs in with "<email>" and "<password>" 
    Then appointment message "<expected_output>" should be displayed 

        Examples:
      | email              | password  | expected_output                 |
      | document@gmail.com |           | Please enter password           |
      |                    | Admin@123 | Please enter email              |
      | wrong@gmail.com    | Wrong@123 | Invalid email or password       |
      |                    |           | Please enter email and password |
      | document@gmail.com | Admin@123 | Dashboard                       |
