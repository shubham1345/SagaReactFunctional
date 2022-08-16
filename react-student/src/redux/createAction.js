import { CREATE_EMPLOYEE } from "./constant";

export const createEmployee =(data)=>{
    //console.log(data);
    return{
        type : CREATE_EMPLOYEE,
        data
    }
}