import React, { useEffect, useState } from "react";

function AdminDocumentsTable() {
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
        <table class="table">
            <thead>
                <tr>
                <th scope="col">Students Id</th>
                <th scope="col">Document</th>
                <th scope="col">Downloard</th>
                <th scope="col">Date</th>
                <th scope="col">Approve</th>
                <th scope="col">Delete</th>
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
                <td><button type="button" class="btn btn-primary btn-sm">Approve</button></td>
                <td><button type="button" class="btn btn-danger btn-sm">Delete</button></td>
                </tr>
              ))}
            </tbody>
        </table>
    </div>
  )
}

export default AdminDocumentsTable