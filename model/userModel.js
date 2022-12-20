const { v4: uuidv4 } = require('uuid');

const users = [
    {
        id: uuidv4(),
        username: "ibrahim",
        email: "ibrahim@gmail.com"
    },
    {
        id: uuidv4(),
        username: "asif",
        email: "asif@gmail.com"
    }
]


module.exports = users;