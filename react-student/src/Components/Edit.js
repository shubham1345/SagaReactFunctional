import React, {useState,useEffect } from 'react'
import {Link,Navigate} from 'react-router-dom'
//import { setEditEmployee } from '../redux/editAction';
import { useDispatch ,useSelector} from 'react-redux';
import { createEmployee } from '../redux/createAction';
import { getByID } from '../redux/editAction';
export default function Edit() {
  const dispatch = useDispatch();
  let studentdata = useSelector((state) => state.seteditdata);
    
    useEffect(()=>{
      let id = parseInt(window.location.href.substring(27));
      dispatch(getByID(id));
      //console.log(studentdata);
      
    },[])
    
    const [ name,setName] = useState("");
    const [ age,setAge] = useState(0);
    const [ rollNo,setRollNo] = useState(0);
    const [ description,setDescription] = useState("");
    const [path, setPath] = useState("");


    const handleSave = () =>{
        let data ={
            "studentId": studentdata.studentId,
            "name": name,
            "age":  parseInt(age),
            "rollNo": parseInt(rollNo),
            "description": description
        };
        setPath("/");
        dispatch(createEmployee(data));
      }

    const handelName = (e) => {
        setName(e.target.value);    
      }
      const handelAge = (e) => {
        setAge(e.target.value);
      }
      const handelRollNo = (e) => {
        setRollNo(e.target.value);
      }
      const handelDescription = (e) => {
        setDescription(e.target.value);
      }



    if (path !== "") {

        return <Navigate to={path} />;
  
    }
    else{
  return (
    <div className="container">
        <h1>Edit Page</h1>
        {/* <Input name={this.state.name} age={this.state.age} rollNo={this.state.rollNo} description={this.state.description} /> */}
        <div className="row">
          <div className="col-mb-3">
            <label className="form-label">Student Name</label>
            <input type="text" className="form-control" onChange={e => handelName(e)}  value={studentdata.name} id="studentName" placeholder="Full Name" />
          </div>
          <div className="col-mb-3">
            <label className="form-label">Age</label>
            <input type="number" value={studentdata.age} onChange={e => handelAge(e)} className="form-control" id="age" />
          </div>
        </div>
        <div className="row">
          <div className="col-mb-3">
            <label className="form-label">Roll.No</label>
            <input type="number" value={studentdata.rollNo} onChange={e => handelRollNo(e)} className="form-control" id="rollNo" />
          </div>
          <div className="col-mb-3">
            <label className="form-label">Description</label>
            <input type="text" value={studentdata.description} onChange={e => handelDescription(e)} className="form-control" id="description" placeholder="enter sometext" />
          </div>
        </div>
        <button className="btn-primary mt-2" onClick={handleSave}>Edit</button>
        <button className="btn-Danger"><Link to="/GetAll">Cancel</Link></button>
      </div>
  )
    }
}