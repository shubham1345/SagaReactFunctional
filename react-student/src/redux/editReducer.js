import { EDIT_EMPLOYEE, SET_EDIT_EMPLOYEE } from "./constant";

export const setEditData = (data = {}, action) => {
    switch (action.type) {
      case SET_EDIT_EMPLOYEE:
        console.log("edit reducer ", action.data);
        return action.data;
  
      default:
        return data;
    }
  }

  export const getbyIDData = (id = 0, action) => {
    switch (action.type) {
      case EDIT_EMPLOYEE:
        console.log("edit reducer ", action.id);
        return action.id;
  
      default:
        return data;
    }
  }