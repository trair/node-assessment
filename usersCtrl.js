const userData = require("./userData.json");

module.exports = {
  getAllUsers(req, res) {
    const { age, email, favorites } = req.query;
    let usersArr = userData;
    if (age) {
      usersArr = userData.filter(person => {
        return person.age < age;
      });
    }
    if (email) {
      usersArr = userData.filter(person => {
        return person.email === email
      })
    };
    if (favorites) {
      usersArr = userData.filter(person => {
        return person.favorites.includes(favorites)
      })
    }
    res.status(200).send(usersArr);
  },
  getUserByID(req, res) {
    const {userID} = req.params
    let user = userData.filter(person => person.id === Number(userID))
    if (user.length > 0) return res.status(200).send(user[0])
    return res.sendStatus(404)
  },
  getAdmins(req, res) {
    const admins = userData.filter(person => {
      return person.type.toLowerCase() === 'admin'
    })
    res.status(200).send(admins)
  },
  getNonAdmins(req, res) {
    const nonAdmins = userData.filter(person => {
      return person.type.toLowerCase() !== 'admin'
    })
    res.status(200).send(nonAdmins)
  },
  getUserByType(req, res) {
    const {userType} = req.params
    const users = userData.filter(person => {
      return person.type.toLowerCase() === userType.toLowerCase()
    })
    res.status(200).send(users)
  },
  updateUser(req, res) {
    const {userID} = req.params
    const index = userData.findIndex(person => {
      return person.id === userID
    })
    userData[index] === req.body
    res.status(200).send(userData)
  },
  newUser(req, res) {
    const lastID = userData[userData.length - 1].id
    const userObj = req.body
    userObj.id = lastID + 1
    userData.push(userObj)
    res.status(200).send(userData)
  },
  deleteUser(req, res) {
    const {userID} = req.params
    const index = userData.findIndex(person => {
      return person.id === Number(userID)
    })
    userData.splice(index, 1)
    console.log(userData, userID)
    res.status(200).send(userData)
  }
};
