// import React, { useEffect, useState } from "react";
// import StudentDashboard from '../../../Authentication/Dashboard/StudentDashboard'
// import StudentsProfileLayouts from "../../../Layouts/ProfileLayouts/StudentsProfileLayouts";

// function Vials() {
//     const [vials, setvials] = useState([]);

//   useEffect(() => {
//     getvials();
//   }, []);

//   const getvials = async () => {
//     try {
//       const response = await axios.get("http://localhost:5000/newsroute/view");
//       setvials(response.data);
//     } catch (error) {
//       console.error(error);
//     }
//   };
//   return (
//     <div>
//         <StudentsProfileLayouts>
//             <nav class="navbar">
//                 <div class="container-fluid">
//                 <h4 className='m-4 text-light'>List Of Notes</h4>
//                     <span class="navbar-text text-light"> Downlord your needed documents </span>
//                     <form class="d-flex" role="search">
//                         <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
//                         <button class="btn btn-success" type="submit">Search</button>
//                     </form>
//                 </div>
//             </nav>

//             <table class="table mt-4">
//                 <thead>
//                     <tr>
//                         <th  className="text-light" scope="col">Preacher Name</th>
//                         <th  className="text-light" scope="col">Preacher Batch</th>
//                         <th  className="text-light" scope="col">Preacher Email</th>
//                         <th  className="text-light" scope="col">Date</th>
//                         <th className="text-light" scope="col">Vials Subject</th>
//                         <th className="text-light" scope="col">Location</th>
//                     </tr>
//                 </thead>
//                 <tbody>
//                 {vials.map((vials) => (
//                     <tr
//                     key={vials._id}
//                     >
//                         <td className="text-light" >{vials.PreacherName}</td>
//                         <td className="text-light" >{vials.PreacherBatch}</td>
//                         <td className="text-light" >{vials.PreacherEmail}</td>
//                         <td className="text-light" >{vials.Date}</td>
//                         <td className="text-light" >{vials.VialsSubject}</td>
//                         <td className="text-light" >{vials.Location}</td>
//                     </tr>
//                     ))}
//                 </tbody>
//             </table>
//             </StudentsProfileLayouts>
//     </div>
//   )
// }

// export default Vials

import React, { useEffect, useState } from "react";
import axios from "axios";
import StudentDashboard from '../../../Authentication/Dashboard/StudentDashboard'
import StudentsProfileLayouts from "../../../Layouts/ProfileLayouts/StudentsProfileLayouts";

function Vials() {
    const [vials, setVials] = useState([]);
    const [searchQuery, setSearchQuery] = useState("");

    useEffect(() => {
        getVials();
    }, []);

    const getVials = async () => {
        try {
            const response = await axios.get("http://localhost:5000/Vilasroute/view");
            setVials(response.data);
        } catch (error) {
            console.error(error);
        }
    };

    // const handleSearchChange = (event) => {
    //     setSearchQuery(event.target.value);
    // };

    // const filteredVials = vials.filter(vial => {
    //     // Filter based on vial attributes that you want to include in the search
    //     return (
    //         vial.PreacherName.toLowerCase().includes(searchQuery.toLowerCase()) ||
    //         vial.PreacherBatch.toLowerCase().includes(searchQuery.toLowerCase()) ||
    //         vial.PreacherEmail.toLowerCase().includes(searchQuery.toLowerCase()) ||
    //         vial.Date.toLowerCase().includes(searchQuery.toLowerCase()) ||
    //         vial.VialsSubject.toLowerCase().includes(searchQuery.toLowerCase()) ||
    //         vial.Location.toLowerCase().includes(searchQuery.toLowerCase())
    //     );
    // });

    return (
        <div>
            <StudentsProfileLayouts>
                <nav className="navbar">
                    <div className="container-fluid">
                        <h4 className='m-4 text-light'>List Of Notes</h4>
                        <span className="navbar-text text-light"> Download your needed documents </span>
                        {/* <form className="d-flex" role="search">
                            <input
                                className="form-control me-2"
                                type="search"
                                placeholder="Search"
                                aria-label="Search"
                                value={searchQuery}
                                onChange={handleSearchChange}
                            />
                            <button className="btn btn-success" type="submit">Search</button>
                        </form> */}
                    </div>
                </nav>

                <table class="table mb-5">
                <thead>
                    <tr>
                        <th className="text-light" scope="col">Preacher Name</th>
                        <th className="text-light" scope="col">Preacher Email</th>
                        <th className="text-light" scope="col">Date</th>
                        <th className="text-light" scope="col">Vials Subject</th>
                        <th className="text-light" scope="col">Link</th>
                    </tr>
                </thead>
                <tbody>
                {vials.map((vials) => (
                    <tr
                    key={vials._id}
                    >
                        <td className="text-light">{vials.PreacherName}</td>
                        <td className="text-light">{vials.PreacherEmail}</td>
                        <td className="text-light">{vials.Date}</td>
                        <td className="text-light">{vials.VialsSubject}</td>
                        <td className="text-light">{vials.Link}</td>
                    </tr>
                    ))}
                </tbody>
            </table>
            </StudentsProfileLayouts>
        </div>
    )
}

export default Vials;
