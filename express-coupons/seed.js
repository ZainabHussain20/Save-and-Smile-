require("dotenv").config()
require("./db/index")

const User = require('./models/user')

const user = async () => {
  try {
    const adduser = await User.create([
      {
        name: "zainab",
        email: "zainab@gmail.com",
        password:"1234",
        type:"client"    
      },
    ])

  } catch (err) {
    console.error(err)
  }
}

user()