import React from 'react'
import Table from './Table';
import { Link } from "react-router-dom";


export default function GetAll() {
    
  return (
    <div>
        <div className="container">
          <div className="row">
            <div className="col-md-4">
              <h1 className="align-center">STUDENT's</h1>
            </div>
            <div className="col-md-4"></div>
            <div className="col-md-4">
            <button><Link to="/Create">Create</Link></button>
            </div>
          </div>
          <div>
            <Table/>
          </div>
        </div>
      </div>
  )
}

