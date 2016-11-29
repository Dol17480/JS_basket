var discount = function() {
 for (item of this.contents){
   total += item.price;
 }
 if (total >= 20) {
  a = total / 10;
  savings = total - a;
}
return savings;
}

module.exports = discount;