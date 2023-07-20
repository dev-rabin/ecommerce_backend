const UserRoutes = require('express');
import UserContollers from './../controllers/user_controllers.js';

UserRoutes.post("/createAccount",UserContollers.createAccount);


export default UserRoutes;
