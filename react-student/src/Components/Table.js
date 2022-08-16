import React,{ useEffect ,useState} from 'react'
import { useDispatch,useSelector } from 'react-redux';
import {employeeList,deleteEmployee} from '../redux/employeeAction'
import { Navigate,Link } from 'react-router-dom';
//import { editEmployee} from '../redux/editAction'
//import {Link} from 'react-router-dom'

export default function Table() {
  const [path,setPath] = useState("");
  const dispatch = useDispatch();
  let data = useSelector((state) => state.employeeData);
  //console.log("data in table component" + data);

  useEffect(() => {
    dispatch(employeeList())
    //dispatch(deleteEmployee())
  }, []);
  const handelEdit=(Id)=>{
    setPath("/Edit/"+ Id);
  }
  if(path !== ""){
      
    return <Navigate to={path} /> 
  }
  else{
  return (
    <div>
      <table className="table table-dark">
        <thead>
          <tr>
            <th>ID</th>
            <th>Student Name</th>
            <th>Age</th>
            <th>Roll NO.</th>
            <th>Description</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {data.map((element, i) => {
            return (
              <tr className="table-active" key={i}>
                <td>{element.studentId}</td>
                <td>{element.name}</td>
                <td>{element.age}</td>
                <td>{element.rollNo}</td>
                <td>{element.description}</td>
                <td>
                  <button type="button" onClick={() => handelEdit(element.studentId) }>
                    <Link to="/Edit">Edit</Link>
                  </button>
                  <button
                    type="button"
                    onClick={() => dispatch(deleteEmployee(element.studentId))}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );}
}


