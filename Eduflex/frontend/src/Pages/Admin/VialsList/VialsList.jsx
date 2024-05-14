import React, { useEffect, useState } from "react";
import axios from 'axios';
import AdminDashboard from '../../../Authentication/Dashboard/AdminDashboard'
import AdminProfileLayouts from "../../../Layouts/ProfileLayouts/AdminProfileLayouts";

function VialsList() {
    const [vials, setvials] = useState([]);

  useEffect(() => {
    getvials();
  }, []);

  const getvials = async () => {
    try {
      const response = await axios.get("http://localhost:5000/Vilasroute/view");
      setvials(response.data);
    } catch (error) {
      console.error(error);
    }
  };
  
  return (
    <div>
        <AdminProfileLayouts>
            <nav class="navbar mb-5">
                <div class="container-fluid">
                <h4 className='m-4'>List Of Notes</h4>
                    <span class="navbar-text"></span>
                    <form class="d-flex" role="search">
                        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
                        <button class="btn btn-success" type="submit">Search</button>
                    </form>
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
        </AdminProfileLayouts>
    </div>
  )
}

export default VialsList