import BasePage from "../pageObjects/basePage";

class ProductPage extends BasePage {
    static get itemTable(){
        return cy.get("[class = 'inventory_item']");
    }
    static get sortSelect(){
        return cy.get('[data-test="product_sort_container"]');
    }
    static get itemName(){
        return cy.get("[class = 'inventory_item_name']");

    }
    static get itemPrice(){
        return cy.get("[class = 'inventory_item_price']");
    }
}

export default ProductPage;