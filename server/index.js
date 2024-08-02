const express = require('express')
const cors = require('cors')
const {graphqlHTTP} = require('express-graphql')
const schema = require('./schema')
const users = [{id: 1,username: "Artem",age: 18}] //иммитация бд

const app = express()
const port = 5000

app.use(cors())

const createUser = (input) => {
  const id = Date.now()
  return {
    id,
    ...input
  }
}
const root = {
  getAllUsers: () => {
    return users
  },
  getUser: ({id}) => {
    return users.find(user => user.id == id)
  },
  createUser: ({input}) => {
    user = createUser(input)
    users.push(user)
    return user
  }
}

app.use('/graphql',graphqlHTTP({
  graphiql: true,
  schema,
  rootValue: root
}))

app.listen(port,() => {
  console.log("Server started on 5000")
})