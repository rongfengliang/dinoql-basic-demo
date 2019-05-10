window=global||window
const dinoql  = require("dinoql")
const gql =  require("graphql-tag")
const data = {
    requests: {
      products: [],
      
      users: [{
        name: 'Victor Igor',
        id: "100",
        age: 40
      }, {
        name: 'Kant Jonas',
        id: "200",
        age: 35
      }],
      
      friends: [{
        name: 'Kátia',
        id: "300",
        age: 10
      }]
    }
  }

const userQuery = gql`
query rong {
  requests {
    users {
      id
    }
    friends {
       name
    }
  }

}

`

const idQuery = gql `
query userids {
  requests {
    users {
      id
    }
  }
}
`
const users = dinoql(data)(userQuery)
console.log(users)

const userids = dinoql(data)(idQuery)
console.log(userids)