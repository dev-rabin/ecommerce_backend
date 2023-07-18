import {Schema,model} from "mongoose";
const uuid = require ("uuid");
const bcrypt = require("bcrypt");

const UserSchema = new Schema({
    id: {type : String, unique: true},
    fullNmae : {type : String, default:"" },
    email : {type: String , required : true},
    password : {type: String , required : true},
    phoneNumber : {type: String , default:""},
    address : { type: String, default:""},
    city: {type:String, default:""},
    state: {type: String, default:""},
    profileProgress :{type : String ,default :0}, // 0 => Account created , 1 => Address 
    createdOn :{ type: Date},
    updatedOn : {type: Date} 

})

UserSchema.pre("save", function(next)  {
    this.id = uuid.v1(),
    this.createdOn = new Date(),
    this.updatedOn = new Date(),

    // HAsh the Psssword 
     salt =  bcrypt.genSaltSync(10),
     hash = bcrypt.hashSync(this.password,salt),
    this.password = hash,

    next();
});

UserSchema.pre(['update', 'findOneAndUpdate','updateOne']),function (next) {
    const update = this.getUpdate();
    delete update._id;
    delete update.id;

    this.updatedOn = new Date();

    next();
};

const userModel = model('User',UserSchema);

module.exports = userModel;