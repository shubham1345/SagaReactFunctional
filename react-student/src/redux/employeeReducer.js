import { SET_EMPLOYEE_LIST } from "./constant"



export const employeeData = (data = [], action) => {
  switch (action.type) {
    case SET_EMPLOYEE_LIST:
      //console.log("PRODUCT_LIST condition ", action);
      return [...action.data];
    
    default:
      return data;
  }
}