import BasePage from "../pageObjects/basePage";

class ItemPage extends BasePage {
    static get addToCartButton(){
        return cy.get("[class = 'btn btn_primary btn_small btn_inventory']");
    }
    static get shopingCarBadge(){
        return cy.get('.shopping_cart_badge');
    }
    static get backButton(){
        return cy.get('[data-test="back-to-products"]');
    }
    static get removeCartButton(){
        return cy.get("[class = 'btn btn_secondary btn_small btn_inventory']");
    }
}

export default ItemPage;