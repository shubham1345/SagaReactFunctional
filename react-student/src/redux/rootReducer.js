import {combineReducers} from 'redux'
import {employeeData} from './employeeReducer'
import {createData} from './createReducer'

export default combineReducers({
    employeeData,
    createData
})