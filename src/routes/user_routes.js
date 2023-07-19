import { createAccount } from "../controllers/user_controllers.js";
const UserRoutes = require('express').Router(); 

UserRoutes.post("/createAccount", createAccount),

 module.exports=UserRoutes;