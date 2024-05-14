import React, { useEffect, useState } from "react";
import axios from 'axios';
import StudentDashboard from '../../../../Authentication/Dashboard/StudentDashboard'
import StudentsProfileLayouts from "../../../../Layouts/ProfileLayouts/StudentsProfileLayouts";

function ReachPapers() {
    const [Notes, setNotes] = useState([]);

  useEffect(() => {
    getNotes();
  }, []);

  const getNotes = async () => {
    try {
      const response = await axios.get("http://localhost:5000/newsroute/view");
      setNotes(response.data);
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <div>
        <StudentsProfileLayouts>
          <nav class="navbar">
              <div class="container-fluid">
              <h4 className='m-4 text-light'>List Of Notes</h4>
                  <span class="navbar-text text-light"> Downlord your needed documents </span>
                  <form class="d-flex" role="search">
                      <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
                      <button class="btn btn-success" type="submit">Search</button>
                  </form>
              </div>
          </nav>

          <table class="table m-4">
            <thead>
              <tr>
                <th className="text-light" scope="col">Students Id</th>
                <th className="text-light" scope="col">Document</th>
                <th className="text-light" scope="col">Downloard</th>
                <th className="text-light" scope="col">Date</th>
              </tr>
            </thead>
            <tbody>
            {Notes.map((Notes) => (
                <tr
                key={Notes._id}
                >
                <td className="text-light">{Notes.StudentsId}</td>
                <td className="text-light">{Notes.Document}</td>
                <td className="text-light"><button class="btn"><i class="fa fa-download"></i> Download</button></td>
                <td className="text-light">{Notes.Date}</td>
              </tr>
            ))}
            </tbody>
          </table>
          </StudentsProfileLayouts>
    </div>
  )
}

export default ReachPapers