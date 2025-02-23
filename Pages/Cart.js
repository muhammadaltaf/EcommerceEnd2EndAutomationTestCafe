import { Selector,t,ClientFunction } from "testcafe";
class CartPage{
    constructor(){
        this.menLiLink = Selector('a#ui-id-5');
        this.bottomLink = Selector('a#ui-id-18').withText('Bottoms');
        this.pants = Selector('a#ui-id-23 span').withText('Pants');
        this.jymPant = Selector('a.product-item-link').withText('Aether Gym Pant');
        this.quantity = Selector('input#qty');
        this.size = Selector('div#option-label-size-143-item-178').withText('36');
        this.color = Selector('div#option-label-color-93-item-50');
        this.addToCart = Selector('button#product-addtocart-button').withText('Add to Cart');
        this.shoppingLinkAppear = Selector('a').withText('shopping cart');
        this.shoppingMiniCart = Selector('span.counter-number');
        this.checkOut = Selector('span').withText('Proceed to Checkout');
    }

    async AddToCart(){
        await t
        .wait(3000)
        .hover(this.menLiLink)
        .hover(this.bottomLink)
        .hover(this.pants)
        .click(this.pants)
        .click(this.jymPant)
        .selectText(this.quantity) // Select all text in the element
        .pressKey('delete') // Delete selected text
        .typeText(this.quantity, '2')
        .click(this.size)
        .click(this.color)
        .click(this.addToCart)
        .wait(2000)
        .expect(this.shoppingLinkAppear.exists).ok()    
        .click(this.shoppingLinkAppear)
        .expect(this.shoppingMiniCart.textContent).eql('2')
        .click(this.checkOut);  
    }
}

export default new CartPage();