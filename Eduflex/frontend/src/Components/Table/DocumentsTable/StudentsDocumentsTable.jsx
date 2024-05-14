import React from 'react'
import React, { useEffect, useState } from "react";

function StudentsDocumentsTable() {
  const [documents, setdocuments] = useState([]);

  useEffect(() => {
    getdocuments();
  }, []);

  const getdocuments = async () => {
    try {
      const response = await axios.get("http://localhost:5000/newsroute/view");
      setdocuments(response.data);
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <div>
      <nav class="navbar bg-body-tertiary">
        <div class="container-fluid">
          <span class="navbar-text">
            Downlord your needed documents
          </span>
          <form class="d-flex" role="search">
            <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
            <button class="btn btn-success" type="submit">Search</button>
          </form>
        </div>
      </nav>
      
        <table class="table">
            <thead>
                <tr>
                <th scope="col">Students Id</th>
                <th scope="col">Document</th>
                <th scope="col">Downloard</th>
                <th scope="col">Date</th>
                </tr>
            </thead>
            <tbody>
            {documents.map((documents) => (
                <tr
                key={documents._id}
                >
                <td>{documents.StudentsId}</td>
                <td>{documents.Document}</td>
                <td><button class="btn"><i class="fa fa-download"></i> Download</button></td>
                <td>{documents.Date}</td>
                </tr>
            ))}
            </tbody>
        </table>
    </div>
  )
}

export default StudentsDocumentsTable