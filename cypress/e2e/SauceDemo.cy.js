import LoginPage from "../pageObjects/LoginPage"

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
    // - Enter a wrong password
    // - Validate that user sees error - “Epic sadface: Username and password do not match any user in this service”
  })
  it('Validate item amount', () => {
    // - Log into page with standard user credentials
    // - Validate that default item amount is 6
  })
  it('Sort items - Price high to low', () => {
    // - Log into page with standard user credentials
    // - Set filter to Price high to low
    // - Validate that first item is “Sauce Labs Fleece Jacket”
    // - Validate that the first item costs “$49.99”
  })
  it('Sort items - Price low to High', () => {
    // - Log into page with standard user credentials
    // - Set filter to Price low to high
    // - Validate that first item is “Sauce Labs Onesie”
    // - Validate that the first item costs “$7.99”
  })
  it('Sort items - Name (Z to A)', () => {
    // - Log into page with standard user credentials
    // - Set filter to Name (Z to A)
    // - Validate that first item is “Test.allTheThings() T-Shirt (Red)”
  })
  it('Validate shopping cart badge amount', () => {
    // - Log into page with standard user credentials
    // - Open “Sauce Labs Bolt T-Shirt”
    // - Click “Add to cart“
    // - Validate that shoping cart badge is 1 (the red pop-up number)
    // - Click “Back to products”
    // - Open “Sauce Labs Bike Light”
    // - Click “Add to cart”
    // - Validate that shoping cart badge is 2 (the red pop-up number)
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