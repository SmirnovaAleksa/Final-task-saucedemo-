import LoginPage from "../pageObjects/LoginPage"
import ProductPage from "../pageObjects/ProductPage"
import ItemPage from "../pageObjects/ItemPage"
import CheckoutPage from "../pageObjects/CheckoutPage"

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
  it('Validate shopping cart badge amount', () => {
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
    LoginPage.usernameInput.type("standard_user");
    LoginPage.passwordInput.type("secret_sauce");
    LoginPage.loginButton.click();
    // - Open “Sauce Labs Bolt T-Shirt”
    ProductPage.itemTable.contains("Sauce Labs Bolt T-Shirt").click();
    // - Click “Add to cart”
    ItemPage.addToCartButton.click();
    // - Click “Back to products”
    ItemPage.backButton.click();
    // - Validate that shoping cart badge is 1 (the red pop-up number)
    ItemPage.shopingCarBadge.should("have.text","1");
    // - Click “Stack/Burger” icon
    ProductPage.menuButton.click();
    // - Click “Reset App State”
    ProductPage.resetButton.click();
    // - Validate that the badge no longer exists
    ItemPage.shopingCarBadge.should("not.exist");
  })
  it('Validate shopping cart remove button functionality', () => {
    // - Log into page with standard user credentials
    LoginPage.usernameInput.type("standard_user");
    LoginPage.passwordInput.type("secret_sauce");
    LoginPage.loginButton.click();
    // - Open “Sauce Labs Bolt T-Shirt”
    ProductPage.itemTable.contains("Sauce Labs Bolt T-Shirt").click();
    // - Click “Add to cart”
    ItemPage.addToCartButton.click();
    // - Validate that shoping cart badge is 1 (the red pop-up number)
    ItemPage.shopingCarBadge.should("have.text","1");
    // - Click “Remove” button
    ItemPage.removeCartButton.click();
    // - Validate that the badge no longer exists
    ItemPage.shopingCarBadge.should("not.exist");
  })
  it.only('Buy a T-shirt', () => {
    // - Log into page with standard user credentials
    LoginPage.usernameInput.type("standard_user");
    LoginPage.passwordInput.type("secret_sauce");
    LoginPage.loginButton.click();
    // - Open “Test.allTheThings() T-Shirt (Red)”
    ProductPage.itemTable.contains("Test.allTheThings() T-Shirt (Red)").click();
    // - Click “Add to cart”
    ItemPage.addToCartButton.click();
    // - Click “Shopping cart”
    ItemPage.shopingCarBadge.click();
    // - Click “Checkout”
    CheckoutPage.checkoutButton.click();
    // - Fill in First name
    CheckoutPage.firstName.type("Aleksandra");
    // - Fill in Last name
    CheckoutPage.lastName.type("Smirnova");
    // - Fill in ZIP/Postal code
    CheckoutPage.zipCode.type("LV-3601");
    // - Click Continue
    CheckoutPage.continueButton.click();
    // - Validate item name “Test.allTheThings() T-Shirt (Red)”
    CheckoutPage.itemName.should("have.text","Test.allTheThings() T-Shirt (Red)");
    // - Click “Finnish”
    CheckoutPage.finishButton.click();
    // - Validate header “THANK YOU FOR YOUR ORDER”
    CheckoutPage.completeHeader.should("have.text","THANK YOU FOR YOUR ORDER");
  })
})