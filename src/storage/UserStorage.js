class UserStorage {
  getItem() {
    const userItem = localStorage.getItem('user');
    console.log(userItem);
    if (userItem) {
      return userItem
    }
    return "[]";
  }

  saveItem(user) {
    localStorage.setItem('user', user);
  }
}

export default UserStorage;
