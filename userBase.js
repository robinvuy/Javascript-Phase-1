class UserBase {
  constructor(users) {
    this.users = users;
  }

  count() {
    return  this.users.length;
  }

  getNames() {
    const userNames = (user) => { return user.getName()};
    return this.users.map(userNames);

  }

  getIntroductions() {
    const introductions = (users) => { return users.getIntroduction()}
    console.log(this.users.map(introductions);
  }

}

module.exports = UserBase;