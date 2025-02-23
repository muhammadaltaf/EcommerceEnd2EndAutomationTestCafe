import { Selector, ClientFunction, t } from "testcafe";

class LoginPage{

    constructor(){
        this.signInLink = Selector('span.logged-in');
        this.status = Selector("div[data-bind='html: $parent.prepareMessageForHtml(message.text)']");
        this.myAccount = Selector('.base').withText('My Account');
        this.dropDown = Selector("span[class='customer-name active'] button[type='button']"); 
        
        this.signOut = Selector('a').withText('Sign Out');
        this.email = Selector('input#email');
        this.password = Selector('input#pass');
        this.signInButton = Selector('span').withText('Sign In');
    }
    async UserRegistered(){
        await t
        .expect(this.signInLink.textContent).contains('Welcome', 'Account Created Successfully')
        .expect(this.status.exists).ok('Account Created Successfully')
        .expect(this.myAccount.textContent).eql('My Account', 'User is on My AccountPage')
    }

    async UserSignOut(){
        await t.click(this.dropDown);
        await t.wait(2000);
        await t.takeScreenshot();
        await t.click(this.signOut);
    }

    async UserSignIn(){
        await t.typeText(this.email, "test2@yahoo.com");
        await t.typeText(this.password, "Test@123");
        await t.click(this.signInButton);
    }
}

export default new LoginPage();