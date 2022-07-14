import BasePage from "../pageObjects/basePage";

class ProductPage extends BasePage {
    static get items(){
        return cy.get("[class = 'inventory_item']");
    }
}

export default ProductPage;