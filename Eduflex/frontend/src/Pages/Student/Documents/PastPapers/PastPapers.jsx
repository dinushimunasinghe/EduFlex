// import React, { useEffect, useState } from "react";
// import axios from 'axios';
// import StudentDashboard from '../../../../Authentication/Dashboard/StudentDashboard'
// import StudentsProfileLayouts from "../../../../Layouts/ProfileLayouts/StudentsProfileLayouts";

// function PastPapers() {
//   const [PastPapers, setPastPapers] = useState([]);

//   useEffect(() => {
//     getPastPapers();
//   }, []);

//   const getPastPapers = async () => {
//     try {
//       const response = await axios.get("http://localhost:5000/view/pastpapers");
//       setPastPapers(response.data);
//     } catch (error) {
//       console.error(error);
//     }
//   };
//   return (
//     <div>
//       <StudentsProfileLayouts>
      
//         <nav class="navbar">
//           <div class="container-fluid text-light">
//           <h4 className='m-4'>List Of Past Papers</h4>
//             <span class="navbar-text text-light">
//               Downlord your needed documents
//             </span>
//             <form class="d-flex" role="search">
//               <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
//               <button class="btn btn-success" type="submit">Search</button>
//             </form>
//           </div>
//         </nav>

//           <table class="table mt-4">
//             <thead>
//               <tr>
//                 <th className="text-light" scope="col">Students Id</th>
//                 <th className="text-light" scope="col">Document</th>
//                 <th className="text-light" scope="col">Downloard</th>
//                 <th className="text-light" scope="col">Date</th>
//               </tr>
//             </thead>
//             <tbody>
//             {PastPapers.map((PastPapers) => (
//                 <tr
//                 key={PastPapers._id}
//                 >
//                 <td className="text-light">{PastPapers.StudentsId}</td>
//                 <td className="text-light">{PastPapers.Document}</td>
//                 <td className="text-light"><button class="btn"><i class="fa fa-download"></i> Download</button></td>
//                 <td className="text-light">{PastPapers.Date}</td>
//               </tr>
//             ))}
//             </tbody>
//           </table>
//           </StudentsProfileLayouts>
//     </div>
//   )
// }

// export default PastPapers


import React, { useEffect, useState } from "react";
import axios from 'axios';
import StudentDashboard from '../../../../Authentication/Dashboard/StudentDashboard';
import StudentsProfileLayouts from "../../../../Layouts/ProfileLayouts/StudentsProfileLayouts";

function PastPapers() {
  const [pastPapers, setPastPapers] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    getPastPapers();
  }, []);

  const getPastPapers = async () => {
    try {
      const response = await axios.get("http://localhost:5000/documents/view/pastpapers");
      setPastPapers(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  const handleSearch = (e) => {
    setSearchQuery(e.target.value);
  };

  const filteredPapers = pastPapers.filter(paper =>
    (paper.StudentsId && paper.StudentsId.toLowerCase().includes(searchQuery.toLowerCase())) ||
    (paper.Document && paper.Document.toLowerCase().includes(searchQuery.toLowerCase()))
  );

  return (
    <div>
      <StudentsProfileLayouts>
        <nav className="navbar">
          <div className="container-fluid text-light">
            <h4 className='m-4'>List Of Past Papers</h4>
            <span className="navbar-text text-light">
              Download your needed documents
            </span>
            <form className="d-flex" role="search">
              <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" onChange={handleSearch} value={searchQuery} />
              <button className="btn btn-success" type="submit">Search</button>
            </form>
          </div>
        </nav>

        <table className="table mt-4">
          <thead>
            <tr>
              <th className="text-light" scope="col">Students Id</th>
              <th className="text-light" scope="col">Document</th>
              <th className="text-light" scope="col">Download</th>
              <th className="text-light" scope="col">Date</th>
            </tr>
          </thead>
          <tbody>
            {filteredPapers.map((pastPaper) => (
              <tr key={pastPaper._id}>
                <td className="text-light">{pastPaper.StudentsId}</td>
                <td className="text-light">{pastPaper.Document}</td>
                <td className="text-light"><button className="btn"><i className="fa fa-download"></i> Download</button></td>
                <td className="text-light">{pastPaper.Date}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </StudentsProfileLayouts>
    </div>
  )
}

export default PastPapers;
