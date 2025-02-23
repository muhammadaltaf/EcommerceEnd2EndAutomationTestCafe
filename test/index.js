import { Selector, test, ClientFunction } from "testcafe";
import HomePage from "../Pages/HomePage";
import RegisterPage from "../Pages/Register";
import LoginPage from "../Pages/Login";
import Cart from "../Pages/Cart";
import Shipping from "../Pages/Shipping";
import Payment from "../Pages/Payment";
import SuccessPage from "../Pages/SuccessPage";

const URL = 'https://magento.softwaretestingboard.com/';

fixture("Initial Script Settings Fixture")
    .page("https://magento.softwaretestingboard.com/")
    .beforeEach(async t => {
        await t
        .maximizeWindow()
        .setTestSpeed(0.8)
        .setPageLoadTimeout(1);
    });

fixture("HomePage Fixture")
    .page("https://magento.softwaretestingboard.com/");

test('User is Currently on Home Page', async t => {
        await t
        .expect(HomePage.welcome.textContent).eql('Home Page', 'User is on Home Page');
        //.expect(HomePage.GetURL()).eql(URL, 'URL Matches with Home Page URL.');
});

test('User Clicks on Register Link', async t => {
    await HomePage.clickRegisterLink();
    await t.expect(RegisterPage.registerPage.textContent).eql('Create New Customer Account', 'User is on Register Page');
    await RegisterPage.Register();
    await LoginPage.UserRegistered();
});

test.skip('User Sign Out Successfully', async t => {
    await t
    .LoginPage.UserSignOut()
    .expect(HomePage.registerLink.exists).ok('User is Signed Out Successfully')
    .expect(Selector('span.base').withText('You are signed out').exists).ok('User is Signed Out Successfully');
});

test('User Logged In Successfully', async t => {
    await HomePage.ClickSignIn();
    await LoginPage.UserSignIn();
});

test('E2E Test for Placing Order', async t => {
    await Cart.AddToCart();
    await Shipping.EnterShippingDetails();
    await Payment.PlaceOrder();
    await SuccessPage.OrderConfirmed();
});
