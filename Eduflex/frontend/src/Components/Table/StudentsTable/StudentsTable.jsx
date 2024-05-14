import React from 'react'
import React, { useEffect, useState } from "react";

function StudentsTable() {
    const [students, setstudents] = useState([]);

  useEffect(() => {
    getstudents();
  }, []);

  const getstudents = async () => {
    try {
      const response = await axios.get("http://localhost:5000/newsroute/view");
      setstudents(response.data);
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <div>
        <table class="table">
            <thead>
                <tr>
                <th scope="col">#</th>
                <th scope="col">First Name</th>
                <th scope="col">Students Id</th>
                <th scope="col">Batch</th>
                <th scope="col">Activate</th>
                <th scope="col">Deactivate</th>
                </tr>
            </thead>
            <tbody>
            {students.map((students) => (
                <tr
                key={students._id}
                >
                <th scope="row">1</th>
                <td>key={students.FirstName}</td>
                <td>key={students.StudentsId}</td>
                <td>key={students.Batch}</td>
                
                <td>
                    <button type="button" class="btn btn-success btn-sm">Activate</button>
                </td>

                <td>
                    <button type="button" class="btn btn-danger btn-sm">Deactivate</button>
                </td>
                </tr>
                ))}
            </tbody>
        </table>
    </div>
  )
}

export default StudentsTable