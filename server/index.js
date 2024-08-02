const express = require('express')
const cors = require('cors')
const {graphqlHTTP} = require('express-graphql')

const app = express()
const port = 5000

app.use(cors())

app.use('/graphql',graphqlHTTP({
  graphiql: true
}))

app.listen(port,() => {
  console.log("Server started on 5000")
})