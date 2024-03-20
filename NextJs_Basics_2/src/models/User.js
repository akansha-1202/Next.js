import {Schema, model, models}  from mongoose;
const UserSchema = new Schema({
    email : {
        type:String,
        unique:[true, "Email already exists"],
        required : [true, "Email is required"]
    },
    name : {
        type : String,
        required : [true, "Name is required"]
    },
    image : { 
        type : String
    }
}, {
    timestamps : true,
})

let User = models?.Users || model("Users",UserSchema)
export default User