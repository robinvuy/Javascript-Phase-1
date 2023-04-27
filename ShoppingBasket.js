class ShoppingBasket {
  constructor(names, prices) {
    this.names = [];
    this.prices = [];
  }


  getTotalPrice() {
    console.log('Prices array:', this.prices);
    const total = (candy) => { return candy.getPrice() };
    if (this.prices.length > 1) {
      return this.prices.map(total);
    } else if (this.prices.length > 0) {
      return this.prices;
    } else {
      return 0;
    }
  }

  addItem(candy) {
    // const food = (candy) => { ShoppingBasket.concat(candy)};
    this.names.push(candy.getName());
    this.prices.push(candy.getPrice());
  }

}

module.exports = ShoppingBasket;