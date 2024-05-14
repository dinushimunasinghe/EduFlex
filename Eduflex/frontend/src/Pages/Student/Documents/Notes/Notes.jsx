// import React, { useEffect, useState } from "react";
// import axios from 'axios';
// import StudentDashboard from '../../../../Authentication/Dashboard/StudentDashboard'
// import StudentsProfileLayouts from "../../../../Layouts/ProfileLayouts/StudentsProfileLayouts";

// function Notes() {
//   const [Notes, setNotes] = useState([]);

//   useEffect(() => {
//     getNotes();
//   }, []);

//   const getNotes = async () => {
//     try {
//       const response = await axios.get("http://localhost:5000/view/notes");
//       setNotes(response.data);
//     } catch (error) {
//       console.error(error);
//     }
//   };
//   return (
//     <div>
//         <StudentsProfileLayouts>
//           <nav class="navbar">
//               <div class="container-fluid">
//               <h4 className='m-4 text-light'>List Of Notes</h4>
//                   <span class="navbar-text text-light"> Downlord your needed documents </span>
//                   <form class="d-flex" role="search">
//                       <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
//                       <button class="btn btn-success" type="submit">Search</button>
//                   </form>
//               </div>
//           </nav>

//           <table class="table m-4">
//             <thead>
//               <tr>
//                 <th  className="text-light" scope="col">Students Id</th>
//                 <th  className="text-light" scope="col">Document</th>
//                 <th  className="text-light" scope="col">Downloard</th>
//                 <th  className="text-light" scope="col">Date</th>
//               </tr>
//             </thead>
//             <tbody>
//             {Notes.map((Notes) => (
//                 <tr
//                 key={Notes._id}
//                 >
//                 <td className="text-light" >{Notes.StudentsId}</td>
//                 <td className="text-light" >{Notes.Document}</td>
//                 <td className="text-light" ><button class="btn"><i class="fa fa-download"></i> Download</button></td>
//                 <td className="text-light" >{Notes.Date}</td>
//               </tr>
//             ))}
//             </tbody>
//           </table>
//           </StudentsProfileLayouts>
//     </div>
//   )
// }

// export default Notes


import React, { useEffect, useState } from "react";
import axios from 'axios';
import StudentDashboard from '../../../../Authentication/Dashboard/StudentDashboard';
import StudentsProfileLayouts from "../../../../Layouts/ProfileLayouts/StudentsProfileLayouts";

function Notes() {
  const [notes, setNotes] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    getNotes();
  }, []);

  const getNotes = async () => {
    try {
      const response = await axios.get("http://localhost:5000/documents/view/notes");
      setNotes(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  const handleSearch = (e) => {
    setSearchQuery(e.target.value);
  };

  const filteredNotes = notes.filter(note =>
    (note.StudentsId && note.StudentsId.toLowerCase().includes(searchQuery.toLowerCase())) ||
    (note.Document && note.Document.toLowerCase().includes(searchQuery.toLowerCase()))
  );

  return (
    <div>
        <StudentsProfileLayouts>
          <nav className="navbar">
              <div className="container-fluid">
              <h4 className='m-4 text-light'>List Of Notes</h4>
                  <span className="navbar-text text-light"> Download your needed documents </span>
                  <form className="d-flex" role="search">
                      <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" onChange={handleSearch} value={searchQuery} />
                      <button className="btn btn-success" type="submit">Search</button>
                  </form>
              </div>
          </nav>

          <table className="table m-4">
            <thead>
              <tr>
                <th className="text-light" scope="col">Students Id</th>
                <th className="text-light" scope="col">Document</th>
                <th className="text-light" scope="col">Download</th>
                <th className="text-light" scope="col">Date</th>
              </tr>
            </thead>
            <tbody>
            {filteredNotes.map((note) => (
                <tr key={note._id}>
                <td className="text-light">{note.StudentsId}</td>
                <td className="text-light">{note.Document}</td>
                <td className="text-light"><button className="btn"><i className="fa fa-download"></i> Download</button></td>
                <td className="text-light">{note.Date}</td>
              </tr>
            ))}
            </tbody>
          </table>
          </StudentsProfileLayouts>
    </div>
  )
}

export default Notes;
