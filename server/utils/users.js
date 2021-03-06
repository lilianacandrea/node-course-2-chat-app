
[{
  id: '/#12poiajdspfoif',
  name: 'Andrew',
  room: 'The Office Fans'
}]


class Users {
  constructor () {
    this.users = [];
  }

  addUser (id, name, room) {
    var user = {id, name, room};
    this.users.push(user);
    return user;
  }

  removeUser (id) {
    var user = this.getUser(id);

    if (user) {
      this.users = this.users.filter((user) => user.id !== id);
    }

    return user;
  }

  getUser (id) {
    return this.users.filter((user) => user.id === id)[0]
  }

  getUserList (room) {
    var users = this.users.filter((user) => user.room === room);
    var namesArray = users.map((user) => user.name);
    return namesArray;
  }
    isNameTaken(name,room){
      var user = this.users.filter(user => (name === user.name && room === user.room))[0];
      return user?true:false;
    }
}


module.exports = {Users};
