// import React, { useEffect, useState } from "react";
// import StudentDashboard from '../../../../Authentication/Dashboard/StudentDashboard'
// import StudentsProfileLayouts from "../../../../Layouts/ProfileLayouts/StudentsProfileLayouts";

// function Books() {
//     const [Books, setBooks] = useState([]);

//   useEffect(() => {
//     getBooks();
//   }, []);

//   const getBooks = async () => {
//     try {
//       const response = await axios.get("http://localhost:5000/newsroute/view");
//       setBooks(response.data);
//     } catch (error) {
//       console.error(error);
//     }
//   };
//   return (
//     <div>
//         <StudentsProfileLayouts>
//           <nav class="navbar">
//               <div class="container-fluid">
//               <h4 className='m-4 text-light'>List Of Books</h4>
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
//                 <th className="text-light" scope="col">Students Id</th>
//                 <th className="text-light" scope="col">Document</th>
//                 <th className="text-light" scope="col">Downloard</th>
//                 <th className="text-light" scope="col">Date</th>
//               </tr>
//             </thead>
//             <tbody>
//             {Books.map((Books) => (
//                 <tr
//                 key={Books._id}
//                 >
//                 <td className="text-light">{Books.StudentsId}</td>
//                 <td className="text-light">{Books.Document}</td>
//                 <td className="text-light"><button class="btn"><i class="fa fa-download"></i> Download</button></td>
//                 <td className="text-light">{Books.Date}</td>
//               </tr>
//             ))}
//             </tbody>
//           </table>
//           </StudentsProfileLayouts>
//     </div>
//   )
// }

// export default Books

import React, { useEffect, useState } from "react";
import axios from "axios";
import StudentsProfileLayouts from "../../../../Layouts/ProfileLayouts/StudentsProfileLayouts";

function Books() {
    const [books, setBooks] = useState([]);
    const [searchQuery, setSearchQuery] = useState("");

    useEffect(() => {
        getBooks();
    }, []);

    const getBooks = async () => {
        try {
            const response = await axios.get("http://localhost:5000/Documents/view/books");
            setBooks(response.data);
        } catch (error) {
            console.error(error);
        }
    };

    const handleSearch = (e) => {
        setSearchQuery(e.target.value);
    };

    const filteredBooks = books.filter((book) =>
        book.Document.toLowerCase().includes(searchQuery.toLowerCase())
    );

    return (
        <div>
            <StudentsProfileLayouts>
                <nav className="navbar">
                    <div className="container-fluid">
                        <h4 className='m-4 text-light'>List Of Books</h4>
                        <span className="navbar-text text-light"> Download your needed books </span>
                        <form className="d-flex" role="search">
                            <input
                                className="form-control me-2"
                                type="search"
                                placeholder="Search"
                                aria-label="Search"
                                onChange={handleSearch}
                                value={searchQuery}
                            />
                            <button className="btn btn-success" type="submit">Search</button>
                        </form>
                    </div>
                </nav>

                <table className="table m-4">
                    <thead>
                        <tr>
                            <th className="text-light" scope="col">Students Id</th>
                            <th className="text-light" scope="col">Book</th>
                            <th className="text-light" scope="col">Download</th>
                            <th className="text-light" scope="col">Date</th>
                        </tr>
                    </thead>
                    <tbody>
                        {filteredBooks.map((book) => (
                            <tr key={book._id}>
                                <td className="text-light">{book.StudentsId}</td>
                                <td className="text-light">{book.Document}</td>
                                <td className="text-light">
                                    <button className="btn">
                                        <i className="fa fa-download"></i> Download
                                    </button>
                                </td>
                                <td className="text-light">{book.Date}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </StudentsProfileLayouts>
        </div>
    )
}

export default Books;
