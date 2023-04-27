class ShoppingBasket {
  constructor(names, prices) {
    this.names = [];
    this.prices = [];
  }


  getTotalPrice() {
    console.log('Prices array:', this.prices);
    const total = this.prices.reduce((counter, value) => counter + value, 0);
    return total;
  }

  addItem() {
    this.names.push(candy.getName());
    this.prices.push(candy.getPrice());
  }
}

module.exports = ShoppingBasket;