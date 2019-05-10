window=global||window
const dinoql  = require("dinoql")
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
const users = dinoql(data)`
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
console.log(users)
