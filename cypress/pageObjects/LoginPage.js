import BasePage from "../pageObjects/basePage";

class LoginPage extends BasePage {
  static get url() {
    return "https://www.saucedemo.com/";
  }
  static get usernameInput(){
    return cy.get('[data-test="username"]');
  }
  static get passwordInput(){
    return cy.get('[data-test="password"]');
  }
  static get loginButton(){
    return cy.get('[data-test="login-button"]');
  }
  static get errorMessage(){
    return cy.get('.error-message-container');
  }
  //
}

export default LoginPage;
