import BasePage from "../pageObjects/basePage";

class CheckoutPage extends BasePage {
    static get checkoutButton(){
        return cy.get('[data-test="checkout"]');
    }
    static get firstName(){
        return cy.get('[data-test="firstName"]');
    }
    static get lastName(){
        return cy.get('[data-test="lastName"]');
    }
    static get zipCode(){
        return cy.get('[data-test="postalCode"]');
    }
    static get continueButton(){
        return cy.get('[data-test="continue"]');
    }
    static get itemName(){
        return cy.get('.inventory_item_name');
    }
    static get finishButton(){
        return cy.get('[data-test="finish"]');
    }
    static get completeHeader(){
        return cy.get('.complete-header');
    }
}

export default CheckoutPage;