class Users {
  constructor () {
    this.users = [];
  }

  addUser (id, name, room) {
    var user = {
      id,
      name,
      room
    };
    this.users.push(user);
    return user;
  }

  removeUser (id) {
    var user = this.getUser(id);
    if (user) {
      this.users = this.users.filter((user) => user.id != id);
    }
    return user;
  };

  getUser (id) {
    return this.users.filter((user) => user.id === id)[0];
  }

  getUserList (room) {
    var users = this.users.filter((user) => user.room === room);
    var userNames = users.map((user) => user.name);
    return userNames;
  }

  isUniqueUserName (name) {
    var user = this.users.filter((user) => user.name = name)[0];
    if (user){
      return false;
    }
    return true;
  };
}

module.exports = {
  Users,
}