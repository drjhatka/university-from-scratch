import { Model } from "mongoose";
//create user interface
export interface TUser {
    id:string;      //server generated auto increment id
    email:string;
    password:string;
    needsPasswordChange:boolean;
    passwordChangedAt?:Date;        //optional 
    role:'superAdmin'|'student'|'admin'|'faculty'|'employee';
    status:'active'|'blocked'
    isDeleted:boolean;
}

//for creating statics and instance method on the model
    export interface UserModel extends Model<TUser>{
        // check if user exists by the server generated id (!not _id)
        //userExistsByCustomID(id:string):Promise<TUser>
    }