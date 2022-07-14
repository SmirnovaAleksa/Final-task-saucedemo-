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
}

export default ItemPage;