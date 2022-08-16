import { CREATE_EMPLOYEE } from "./constant";

export const createData = (data = {}, action) => {
    switch (action.type) {
      case CREATE_EMPLOYEE:
        console.log("edit reducer ", action.data);
        return action.data;
  
      default:
        return data;
    }
  }