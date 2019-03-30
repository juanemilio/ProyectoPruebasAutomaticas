Feature: Test habitica.com
    Realizar diferentes pruebas sobre la app habitica.com

	
Scenario Outline: Login fallido
    Given I go to habitica home screen
    When I open the login screen
    And I fill with <email> and <password>
    And I try to login

	Examples:
      | email            | password | 
      | pruebas    		 | pruebas  |
	  | pruebas1   		 | passWorn |
	  | pruebas2   		 | passWorn2|
	  | pruebas3   		 | passWorn3|
	  

Scenario Outline: Login correcto
    Given I go to habitica home screen
    When I open the login screen
    And I fill with <email> and <password>
    And I try to login

	Examples:
      | email            | password | 
      | pruebaset2    |    pruebas1234  |
	  
	  
	  
Scenario Outline: Crear habitos
	When I try to create habit with <habito>

	Examples:
      | habito 				|
	  | Primer h�bito  	|
	  | Segundo h�bito 	|
	  | Tercer h�bito 	|
	  | Cuarto h�bito 	|