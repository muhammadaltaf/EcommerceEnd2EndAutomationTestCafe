import { Selector,t,ClientFunction } from "testcafe";

class ShippingPage{
    constructor(){
        this.shippingPresent = Selector('span').withText('Shipping');
        this.email = Selector('input#customer-email');
        this.firstName = Selector('input[name="firstname"]');
        this.lastName = Selector('input[name="lastname"]');
        this.company = Selector('input[name="company"]');
        this.address = Selector('input[name="street[0]"]');
        this.city = Selector('input[name="city"]');
        this.selectState = Selector('Select[name="region_id"]');
        this.stateNameOption = Selector('option').withText('Alabama');
        this.zipCode = Selector('input[name="postcode"]');
        this.country = Selector('Select[name="country_id"]');
        this.countrySelected = Selector('option').withText('United States');
        this.phoneNo = Selector('input[name="telephone"]');
        this.shippingMethod = Selector('input[value="flatrate_flatrate"]');
        this.nextButton = Selector('span').withText('Next');
    }

    async EnterShippingDetails(){
        await t.wait(5000);
        await t.expect(this.shippingPresent.exists).ok();
        await t.typeText(this.email, "test2@yahoo.com");
        await t.typeText(this.firstName, "Test");
        await t.typeText(this.lastName, "User");
        await t.typeText(this.company, "Test Company");
        await t.typeText(this.address, "Test Address");
        await t.typeText(this.city, "Test City");
        await t.click(this.selectState);
        await t.click(this.selectState.find('option').withText('Alabama'));
        await t.typeText(this.zipCode, "06514");
        await t.click(this.country);
        await t.click(this.country.find('option').withText('United States'));
        await t.typeText(this.phoneNo, "2134567890");
        await t.click(this.shippingMethod);
        await t.click(this.nextButton);
    }
}

export default new ShippingPage();
