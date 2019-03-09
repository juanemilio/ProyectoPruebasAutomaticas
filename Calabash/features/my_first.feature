Feature: First Steps with the app

  Scenario: As a user I want to be able to open the aplication by first time
    Given I see the text "Welcome to Calendula!"
    Then I take a picture
    Then I wait
    Then I swipe right
    Then I wait
    Then I take a picture

Scenario: As a user I want to be able to create default patient
 	Given the app is running
 	Then I take a picture
 	Then I swipe left
 	And I wait
 	Then I should see "Patients"
 	And I wait
 	And I press "Patients"
 	And I wait
 	Then I press "User"
 	Then I take a picture
 	

 

