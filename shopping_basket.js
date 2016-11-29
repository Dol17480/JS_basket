var shoppingBasket = {
  contents: [],
  add: function(item){
        this.contents.push(item);
        this.value += item.price;
      },
      empty: function(){
        this.contents = [];
        this.value = 0;
      },
      value: function(){
        var total = 0;
        for (item of this.contents){
         total += item.price;
        }
        return total;
      }
    };

module.exports = shoppingBasket;