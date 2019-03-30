var {defineSupportCode} = require('cucumber');
var {expect} = require('chai');

defineSupportCode(({Given, When, Then}) => {
  Given('I go to habitica home screen', () => {
    browser.url('/');    
  });

  When('I open the login screen', () => {
	browser.click('.login-button');
  });

 
 When(/^I fill with (.*) and (.*)$/ , (email, password) => {
    var mailInput = browser.element('input[id=usernameInput]');
    mailInput.click();
    mailInput.keys(email);

    var passwordInput = browser.element('input[id=passwordInput]');
    passwordInput.click();
    passwordInput.keys(password)
  });

  When('I try to login', () => {	  
	  browser.click('.btn.btn-info');
	  var cajaTexto = browser.element('.habit > .tasks-list > textarea.quick-add');
	  cajaTexto.click();
  });

 When(/^I try to create habit with (.*)$/ , (name) => {
	  var cajaTexto = browser.element('.habit > .tasks-list > textarea.quick-add');
	  cajaTexto.click();
	  cajaTexto.keys(name);
	
  });
  
});
