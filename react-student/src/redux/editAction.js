import { SET_EDIT_EMPLOYEE } from "./constant";

export const setEdit =(data)=>{
    //console.log(data);
    return{
        type : SET_EDIT_EMPLOYEE,
        data
    }
}

export const getByID =(id)=>{
    //console.log(data);
    return{
        type : SET_EDIT_EMPLOYEE,
        id
    }
}