var basket = require('../shopping_basket');
var item = require('../item');
var assert = require("assert");

describe('shoppingBasket', function(){
  it('should start empty', function(){
    assert.equal(0, basket.contents)
  })
  it('should add item', function(){
    basket.add(item.bananas);
    assert.equal(1, basket.contents.length)
  })
  it('should remove item', function(){
    basket.empty();
    assert.equal(0, basket.contents.length)
  })
  it('should count value of items', function(){
    basket.add(item.bananas);
    assert.equal(2, basket.values())      
  })
})