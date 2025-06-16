Feature: Login to the secure area

  Background:
    Given the user navigates to the login "https://the-internet.herokuapp.com/login"

  Scenario: Successful login with valid credentials
    When the user enters the username "tomsmith"
    And the user enters the password "SuperSecretPassword!"
    And the user clicks the login button
    Then the user should see a message that says "You logged into a secure area!"
