const userController = require("./controller/userController");

module.exports = [
    {
        endpoint: '/user',
        method: 'GET',
        handler: userController.listUsers,
    },

];