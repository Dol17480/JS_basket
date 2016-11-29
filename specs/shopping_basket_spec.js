var basket = require('../shopping_basket');
var assert = require("assert");

describe('shoppingBasket', function(){
  it('should start empty', function(){
    assert.equal(0, basket.value)
  })
  it('should add item', function(){
    basket.add("bananas");
    assert.equal("bananas", basket.contents)
  })
  it('should remove item', function(){
    basket.empty();
    assert.equal(0, basket.contents)
  })
})