import { User } from '../dtos' 

export const files = (req: string, user: User) => {
  const db = {
    users: [
        {name: "felipe", password: "felipe123"},
        {name: "matheus", password: "matheus123"},
        {name: "otavio", password: "otavio123"},
        {name: "rafael", password: "rafael123"}
    ]
  }

  if(req === "GET-USER") {
    return (() => {
      const userFromDb = db.users.filter((elem) => elem.name === user.name)[0]
      
      if(!userFromDb) throw "User not found"
      
      return userFromDb
    })
  }
  else if(req === "AUTH-USER") {
    return (() => {
      const userFromDb = db.users.filter((elem) => elem.name === user.name)[0]
      if(!userFromDb) throw "User not found"
      if(userFromDb.password !== user.password) throw "Wrong password"

      return userFromDb
    })
  }
  else if(req === "ADD-USER") {
    return (() => {
      const userFromDb = db.users.filter((elem) => elem.name === user.name)[0]
      if(userFromDb) throw "Username already in use"
      
      db.users.push(user)
      return user
    })
  }

  throw "not allowed method"
}