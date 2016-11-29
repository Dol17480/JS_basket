var shoppingBasket = {
  value: 0,
  contents: [],
  add: function(item){
        this.contents.push(item);
      },
      empty: function(){
        this.contents = [];
      }
    };

module.exports = shoppingBasket;