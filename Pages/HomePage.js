import { Selector, ClientFunction, t } from "testcafe";

const GetURL = ClientFunction(() => {
    return window.location.href;
});

class HomePage{

    constructor(){
        this.signInLink = Selector('a').withText("Sign In");
        this.createAccountLink = Selector('a').withText("Create an Account");
        this.welcome = Selector('span.base').withText("Home Page");
    }

    async clickRegisterLink(){
        await t.setNativeDialogHandler(() => true);
        await t.click(this.createAccountLink);
    }

    async ClickSignIn(){
        await t.click(this.signInLink);
    }
}

export default new HomePage();