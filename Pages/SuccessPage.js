import { Selector,t,ClientFunction } from "testcafe";

class SuccessPage{
    /**
     *
     */
    constructor() {
        this.successStatus = Selector('span.base').withText('Thank you for your purchase!');
        this.orderNo = Selector('p').withText('Your order # is: ');
    }

    async OrderConfirmed(){
        await t.wait(5000);
        await t.expect(this.successStatus.exists).ok();
        await t.expect(this.orderNo.textContent).contains('Your order # is: ');
    }
}

export default new SuccessPage();