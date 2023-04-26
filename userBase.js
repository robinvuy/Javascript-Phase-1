class UserBase {
  constructor(name) {
    this.name = name;
  }

  count() {
    return this.name.length;
  }

}

module.exports = UserBase;