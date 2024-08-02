const {buildSchema} = require('graphql')

const schema = buildSchema(`

  type User{
    id: ID,
    username: String,
    age: Int,
    posts: [Post]
  }

  input UserInput{
    id: ID,
    username: String!
    age: Int!
    posts: [PostInput]
  }

  type Post {
    id: ID,
    title: String
    content: String
  }

  input PostInput {
    id: ID
    title: String!
    content: String!
  }

  type Query{
    getAllUsers: [User]
    getUser(id:ID): User
  }

  type Mutation {
    createUser(input: UserInput): User
  }

  `)

module.exports = schema