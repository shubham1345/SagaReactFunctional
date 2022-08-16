import { takeEvery, put } from 'redux-saga/effects'
import { EMPLOYEE_LIST, SET_EDIT_EMPLOYEE, EDIT_EMPLOYEE,SET_EMPLOYEE_LIST, DELETE_EMPLOYEE, CREATE_EMPLOYEE } from './constant';
import axios from 'axios'

function* getProducts() {
    let data = yield axios.get('https://localhost:44392/api/student/getall');
    data = yield data.data;
    yield put({type: SET_EMPLOYEE_LIST, data})
}
function* getEmployee(id){
let data = {};
 yield axios.get(`https://localhost:44392/api/student/edit/${id.data}`)
        .then((response) => {
          data = response.data[0];
           
        }, (error) => {
          console.log(error);
        });
        console.log(data);
        yield put ({type: SET_EDIT_EMPLOYEE,data})
}
function* deleteDatas(data) {
  let res =   yield axios.get(`https://localhost:44392/api/student/Delete/${data.data}`);
  if(res.data === true){
  let data = yield axios.get('https://localhost:44392/api/student/getall');
  data = yield data.data;
  console.log("action is called", data)
  yield put({type: SET_EMPLOYEE_LIST, data})
  }
}
function * createEmployee(data){

yield axios.post(`https://localhost:44392/api/student/Create`,{
            "studentId": 0,
            "name": data.data.name,
            "age":  data.data.age,
            "rollNo": data.data.rollNo,
            "description": data.data.description
        })  
}
function* employeeSaga() {
    yield takeEvery(EMPLOYEE_LIST, getProducts)
    yield takeEvery(EDIT_EMPLOYEE,getEmployee)
    yield takeEvery(DELETE_EMPLOYEE,deleteDatas)
    yield takeEvery(CREATE_EMPLOYEE,createEmployee)
}

export default employeeSaga;