import { Selector,t,ClientFunction } from "testcafe";

class PaymentPage{
    /**
     *
     */
    constructor() {
        this.paymentPage = Selector('span').withText('Review & Payments');
        this.placeOrderButton = Selector('span').withText('Place Order');
    }

    async PlaceOrder(){
        await t.wait(5000);
        await t.expect(this.paymentPage.exists).ok();
        await t.click(this.placeOrderButton);
    }
}

export default new PaymentPage();