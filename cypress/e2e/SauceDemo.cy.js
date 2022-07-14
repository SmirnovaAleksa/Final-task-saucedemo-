import LoginPage from "../pageObjects/LoginPage"
import ProductPage from "../pageObjects/ProductPage"
import ItemPage from "../pageObjects/ItemPage"

describe('empty spec', () => {
  beforeEach(() => {
    LoginPage.visit();
  });
  // - 1. Login with locked_out_user
  it('Login with locked_out_user', () => {
    // - Enter username - “locked_out_user”
    LoginPage.usernameInput.type("locked_out_user");
    // - Enter password
    LoginPage.passwordInput.type("secret_sauce");
    LoginPage.loginButton.click();
     // - Validate that user sees error - “Epic sadface: Sorry, this user has been locked out.”
    LoginPage.errorMessage.should("have.text","Epic sadface: Sorry, this user has been locked out.");
  })
  it('Login with wrong password', () => {
    // - Enter username - standard_user
    LoginPage.usernameInput.type("standard_user");
    // - Enter a wrong password
    LoginPage.passwordInput.type("wrong_password");
    LoginPage.loginButton.click();
    // - Validate that user sees error - “Epic sadface: Username and password do not match any user in this service”
    LoginPage.errorMessage.should("have.text","Epic sadface: Username and password do not match any user in this service");
  })
  it('Validate item amount', () => {
    // - Log into page with standard user credentials
    LoginPage.usernameInput.type("standard_user");
    LoginPage.passwordInput.type("secret_sauce");
    LoginPage.loginButton.click();
    // - Validate that default item amount is 6
    ProductPage.itemTable.should("have.length","6");
  })
  it('Sort items - Price high to low', () => {
    // - Log into page with standard user credentials
    LoginPage.usernameInput.type("standard_user");
    LoginPage.passwordInput.type("secret_sauce");
    LoginPage.loginButton.click();
    // - Set filter to Price high to low
    ProductPage.sortSelect.select("Price (high to low)");
    // - Validate that first item is “Sauce Labs Fleece Jacket”
    ProductPage.itemTable.first().within(($list) => {
      ProductPage.itemName.should("have.text","Sauce Labs Fleece Jacket");
    })
    // - Validate that the first item costs “$49.99”
    ProductPage.itemTable.first().within(($list) => {
      ProductPage.itemPrice.should("have.text","$49.99");
    })
  })
  it('Sort items - Price low to High', () => {
    // - Log into page with standard user credentials
    LoginPage.usernameInput.type("standard_user");
    LoginPage.passwordInput.type("secret_sauce");
    LoginPage.loginButton.click();
    // - Set filter to Price low to high
    ProductPage.sortSelect.select("Price (low to high)");
    // - Validate that first item is “Sauce Labs Onesie”
    ProductPage.itemTable.first().within(($list) => {
      ProductPage.itemName.should("have.text","Sauce Labs Onesie");
    })
    // - Validate that the first item costs “$7.99”
    ProductPage.itemTable.first().within(($list) => {
      ProductPage.itemPrice.should("have.text","$7.99");
    })
  })
  it('Sort items - Name (Z to A)', () => {
    // - Log into page with standard user credentials
    LoginPage.usernameInput.type("standard_user");
    LoginPage.passwordInput.type("secret_sauce");
    LoginPage.loginButton.click();
    // - Set filter to Name (Z to A)
    ProductPage.sortSelect.select("Name (Z to A)");
    // - Validate that first item is “Test.allTheThings() T-Shirt (Red)”
    ProductPage.itemTable.first().within(($list) => {
      ProductPage.itemName.should("have.text","Test.allTheThings() T-Shirt (Red)");
    })
  })
  it.only('Validate shopping cart badge amount', () => {
    // - Log into page with standard user credentials
    LoginPage.usernameInput.type("standard_user");
    LoginPage.passwordInput.type("secret_sauce");
    LoginPage.loginButton.click();
    // - Open “Sauce Labs Bolt T-Shirt”
    ProductPage.itemTable.contains("Sauce Labs Bolt T-Shirt").click();
    // - Click “Add to cart“
    ItemPage.addToCartButton.click();
    // - Validate that shoping cart badge is 1 (the red pop-up number)
    ItemPage.shopingCarBadge.should("have.text","1");
    // - Click “Back to products”
    ItemPage.backButton.click();
    // - Open “Sauce Labs Bike Light”
    ProductPage.itemTable.contains("Sauce Labs Bike Light").click();
    // - Click “Add to cart”
    ItemPage.addToCartButton.click();
    // - Validate that shoping cart badge is 2 (the red pop-up number)
    ItemPage.shopingCarBadge.should("have.text","2");
  })
  it('Reset App State', () => {
    // - Log into page with standard user credentials
    // - Open “Sauce Labs Bolt T-Shirt”
    // - Click “Add to cart”
    // - Click “Back to products”
    // - Validate that shoping cart badge is 1 (the red pop-up number)
    // - Click “Stack/Burger” icon
    // - Click “Reset App State”
    // - Validate that the badge no longer exists
  })
  it('Validate shopping cart remove button functionality', () => {
    // - Log into page with standard user credentials
    // - Open “Sauce Labs Bolt T-Shirt”
    // - Click “Add to cart”
    // - Validate that shoping cart badge is 1 (the red pop-up number)
    // - Click “Remove” button
    // - Validate that the badge no longer exists
  })
  it('Buy a T-shirt', () => {
    // - Log into page with standard user credentials
    // - Log into page with standard user credentials
    // - Open “Test.allTheThings() T-Shirt (Red)”
    // - Click “Add to cart”
    // - Click “Shopping cart”
    // - Click “Checkout”
    // - Fill in First name
    // - Fill in Last name
    // - Fill in ZIP/Postal code
    // - Click Continue
    // - Validate item name “Test.allTheThings() T-Shirt (Red)”
    // - Click “Finnish”
    // - Validate header “THANK YOU FOR YOUR ORDER”
  })
})