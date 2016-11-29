var shoppingBasket = {
  contents: [],
  add: function(item){
    this.contents.push(item);
  },
  empty: function(){
    this.contents = [];
  },
  values: function(){
    var total = 0;
    for (item of this.contents){
     total += item.price;
    }
   return total;
  }
};

module.exports = shoppingBasket;