import { Selector, ClientFunction, t } from "testcafe";

class RegisterPage{

    constructor(){
        this.createAccount = Selector('a').withText("Create an Account");
        this.registerPage = Selector('span.base').withText("Create New Customer Account");
        this.firstName = Selector('input#firstname');
        this.lastName = Selector('input#lastname');
        this.email = Selector('input#email_address');
        this.password = Selector('input#password');
        this.confirmPassword = Selector('input#password-confirmation');
        this.submitButton = Selector('span').withText('Create an Account');
    }

    generateRandomNumber() {
        return Math.floor(Math.random() * 10000);
    }
    
    async Register(){
        const randomNumber = this.generateRandomNumber();
        const randomEmail = `test${randomNumber}@gmail.com`;

        await t.typeText(this.firstName, "Test");
        await t.typeText(this.lastName, "User");
        await t.typeText(this.email, randomEmail);
        await t.typeText(this.password, "Test@123");
        await t.typeText(this.confirmPassword, "Test@123");
        await t.click(this.submitButton);
    }
}

export default new RegisterPage();