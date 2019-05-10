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
query userQuery {
  requests {
    users {
      name
      id
    }
    friends {
       name
    }
  }

}

`


const userQuery2 = `
  requests {
    users {
      name
      id
    }
    friends {
       name
    }
  }
`

// this is one way  to call  query 
// const users = dinoql(data)`
// requests {
//   users {
//     name
//     id
//   }
//   friends {
//      name
//   }
// }
// `


// you can alse use graphql-tag graphql query utilities 

const users = dinoql(data)(userQuery)
console.log(users)
