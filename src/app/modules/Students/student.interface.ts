import { Types } from "mongoose";

type TBloodGroup ='A+' | 'A-' | 'B+' | 'B-' | 'AB+' | 'AB-' | 'O+' | 'O-'
type TGender = 'male'|'female'|'other'

interface TName {
    firstName: string;
    middleName?: string;
    lastName?: string;          //The convention is semicolon for interface not comma like object
}

interface TGuardian {
    fatherName: string;
    fatherOccupation: string;
    fatherContactNo: string;
    motherName: string;
    motherOccupation: string;
    motherContactNo: string;
}

interface TLocalGuardian {
    name: string;
    occupation: string;
    contactNo: string;
    address: string;
}


interface TStudent {
    id:string;
    user: Types.ObjectId;
    name:TName;
    gender: TGender;
    dateOfBirth?: Date;
    email:string;
    contactNo:string;
    emergencyContactNo:string;
    bloodGroup:TBloodGroup;
    presentAddress:string;
    permanentAddress:string;
    guardian:TGuardian;
    localGuardian:TLocalGuardian;
    profileImg?:string;
    admissionSemester:Types.ObjectId;
    academicDepartment:Types.ObjectId;
}