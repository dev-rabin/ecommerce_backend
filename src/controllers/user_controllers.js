import UserModel from "../models/user_model.js";

const UserContollers = {
    createAccount: async function (req,res){
        try {

            const userData = req.body;
            const newUser  = new UserModel(userData);
            await newUser.save();

             return res.json({success:true,data: newUser,message:"Account Created Succesfully!"})

        } catch(ex) {
            return res.json ({success: false, message : ex})
            }
    }
};

export default UserContollers;