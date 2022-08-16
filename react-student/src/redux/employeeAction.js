import { EMPLOYEE_LIST,DELETE_EMPLOYEE } from "./constant"

export const employeeList = () => {
  
    return {
        type: EMPLOYEE_LIST
        
    }
}
export const deleteEmployee =(data)=>{
    return {
        type: DELETE_EMPLOYEE,
        data
    }
}



