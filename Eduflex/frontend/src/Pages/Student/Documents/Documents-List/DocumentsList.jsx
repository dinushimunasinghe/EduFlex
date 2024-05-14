// import React, { useEffect, useState } from "react";
// import StudentDashboard from '../../../../Authentication/Dashboard/StudentDashboard'
// import StudentsProfileLayouts from "../../../../Layouts/ProfileLayouts/StudentsProfileLayouts";

// function DocumentsList() {
//   const [DocumentsList, setDocumentsList] = useState([]);

//   useEffect(() => {
//     getDocumentsList();
//   }, []);

//   const getDocumentsList = async () => {
//     try {
//       const response = await axios.get("http://localhost:5000/newsroute/view");
//       setDocumentsList(response.data);
//     } catch (error) {
//       console.error(error);
//     }
//   };
//   return (
//     <div>
//         <StudentsProfileLayouts>

//         <nav class="navbar">
//           <div class="container-fluid">
//           <h4 className='m-4 text-light'>List Of Documents</h4>
//             <span class="navbar-text text-light">
//               Downlord your needed documents
//             </span>
//             <form class="d-flex" role="search">
//               <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
//               <button class="btn btn-success" type="submit">Search</button>
//             </form>
//           </div>
//         </nav>

//           <table class="table mt-4 text-light">
//             <thead>
//               <tr>
//                 <th className="text-light" scope="col">Students Id</th>
//                 <th className="text-light" scope="col">Document</th>
//                 <th className="text-light" scope="col">Downloard</th>
//                 <th className="text-light" scope="col">Date</th>
//               </tr>
//             </thead>
//             <tbody>
//               {DocumentsList.map((DocumentsList) => (
//                 <tr
//                 key={DocumentsList._id}
//                 >
//                 <td className="text-light">{DocumentsList.StudentsId}</td>
//                 <td className="text-light">{DocumentsList.Document}</td>
//                 <td className="text-light"><button class="btn"><i class="fa fa-download"></i> Download</button></td>
//                 <td className="text-light">{DocumentsList.Date}</td>
//               </tr>
//               ))}
//             </tbody>
//           </table>
//           </StudentsProfileLayouts>
//     </div>
//   )
// }

// export default DocumentsList

import React, { useEffect, useState } from "react";
import axios from "axios";
import StudentDashboard from '../../../../Authentication/Dashboard/StudentDashboard'
import StudentsProfileLayouts from "../../../../Layouts/ProfileLayouts/StudentsProfileLayouts";

function DocumentsList() {
  const [documentsList, setDocumentsList] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    getDocumentsList();
  }, []);

  const getDocumentsList = async () => {
    try {
      const response = await axios.get("http://localhost:5000/Documents/view");
      console.log(response.data)
      setDocumentsList(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  const handleSearch = (e) => {
    setSearchQuery(e.target.value);
  };

  const filteredDocuments = documentsList.filter((document) =>
    document.Document.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div>
        <StudentsProfileLayouts>

        <nav class="navbar">
          <div class="container-fluid">
          <h4 className='m-4 text-light'>List Of Documents</h4>
            <span class="navbar-text text-light">
              Downlord your needed documents
            </span>
            <form class="d-flex" role="search">
              <input
                class="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
                onChange={handleSearch}
                value={searchQuery}
              />
              <button class="btn btn-success" type="submit">Search</button>
            </form>
          </div>
        </nav>

          <table class="table mt-4 text-light">
            <thead>
              <tr>
                <th className="text-light" scope="col">Document</th>
                <th className="text-light" scope="col">Downloard</th>
              </tr>
            </thead>
            <tbody>
              {filteredDocuments.map((document) => (
                <tr key={document._id}>
                  
                  <td className="text-light">{document.Document}</td>
                  <td className="text-light">
                    <button class="btn">
                      <i class="fa fa-download"></i> Download
                    </button>
                  </td>
                  {/* <td className="text-light">{document.Date}</td> */}
                </tr>
              ))}
            </tbody>
          </table>
          </StudentsProfileLayouts>
    </div>
  );
}

export default DocumentsList;
