var discount = require('../discount');
var basket = require('../shopping_basket');
var assert = require('assert');
var item = require('../item');


describe('discount', function(){
  it('should give discount for more than 20', function(){
    basket.add(item.nappies);
    basket.add(item.nappies);
    basket.add(item.beer);
    basket.add(item.beer);
    basket.add(item.beer);
    basket.discount();
    assert.equal(27.90, basket.total)
  });
});