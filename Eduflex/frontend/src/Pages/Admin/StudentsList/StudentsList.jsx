import React, { useEffect, useState } from "react";
import axios from 'axios';

import AdminDashboard from '../../../Authentication/Dashboard/AdminDashboard'
import AdminProfileLayouts from "../../../Layouts/ProfileLayouts/AdminProfileLayouts";

function StudentsList() {
  const [StudentsList, setStudentsList] = useState([]);

  useEffect(() => {
    getStudentsList();
  }, []);

  const getStudentsList = async () => {
    try {
      const response = await axios.get("http://localhost:5000/auth/students");
      setStudentsList(response.data);
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <div>
        <AdminProfileLayouts>
        <nav class="navbar mb-5">
          <div class="container-fluid"><h4 className='m-4'>List Of Students</h4>
            <span class="navbar-text">
              
            </span>
            <form class="d-flex" role="search">
              <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
              <button class="btn btn-success" type="submit">Search</button>
            </form>
          </div>
        </nav>

          <table class="table mb-5">
            <thead>
              <tr>
                <th className="text-light" scope="col">Students Name</th>
                <th className="text-light" scope="col">Students Email</th>
              </tr>
            </thead>
            <tbody>
            {StudentsList.map((StudentsList) => (
                <tr
                key={StudentsList._id}
                >
                <td className="text-light">{StudentsList.full_name}</td>
                <td className="text-light">{StudentsList.email}</td>
              </tr>
              ))}
            </tbody>
          </table>
        </AdminProfileLayouts>
    </div>
  )
}

export default StudentsList