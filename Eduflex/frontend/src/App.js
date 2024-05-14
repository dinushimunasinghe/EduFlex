import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import 'bootstrap';
import React,{useState,useCallback,useContext,useEffect} from 'react'
import { BrowserRouter,Route,Routes} from 'react-router-dom';
import { AuthContext } from './Authentication/Checkcontext/AuthContext';

import Login from './Authentication/Login/Login';
import Register from './Authentication/Register/Register';
import AdminDashboard from './Authentication/Dashboard/AdminDashboard';
import StudentDashboard from './Authentication/Dashboard/StudentDashboard';
import AboutUs from './Pages/Student/AboutUs/AboutUs';
import Calculator from './Pages/Student/Calculator/Calculator';
import Course from './Pages/Student/Courses/Course';
import DocumentsList from './Pages/Student/Documents/Documents-List/DocumentsList';
import DocumentsUpload from './Pages/Student/Documents/Documents-Upload/DocumentsUpload';
import Notes from './Pages/Student/Documents/Notes/Notes';
import PastPapers from './Pages/Student/Documents/PastPapers/PastPapers';
import Vials from './Pages/Student/Vials/Vials';
import Library from './Pages/Student/Library/Library';
import UploadDocuments from './Pages/Admin/UploadDocuments/UploadDocuments';
import StudentsList from './Pages/Admin/StudentsList/StudentsList';
import VialsList from './Pages/Admin/VialsList/VialsList';

import Home from './Pages/Home/Home';
import Books from './Pages/Student/Documents/Books/Books';
import ReachPapers from './Pages/Student/Documents/ReachPapers/ReachPapers';
import UploadCoursesVideos from './Pages/Admin/UploadCoursesVideos/UploadCoursesVideos';
import Videos from './Pages/Student/Courses/Videos/Videos';
import CreateVilas from './Pages/Admin/CreateVilas/CreateVilas';

function App() {
  const [userid,setuserid] = useState(false)
  const [token,settoken] = useState(false)
  const [role,setrole] = useState(false)

  const [isLoggedIn,setIsLoggedIn] = useState(false)

  const login = useCallback((uid,token,role) => {
    setIsLoggedIn(true)
    setuserid(uid)
    settoken(token)
    setrole(role)
  },[])

  const logout = useCallback(() => {
    setIsLoggedIn(false)
    setuserid(null)
    settoken(null)
    setrole(null)
  },[])

  useEffect(() => {
    const storedData = JSON.parse(localStorage.getItem("userData"));
    if (
      storedData &&
      storedData.token 
    ) {
      login(
        storedData.userId,
        storedData.token,
        storedData.role
      );
    }
  }, [login]);

  return (
    <div className="App">
      
    <AuthContext.Provider value={{isLoggedIn: !!token,token:token,userId:userid,role:role, login: login,logout : logout}}>
      <BrowserRouter>
        <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/Home' element={<Home/>}></Route>
        <Route path='/ReachPapers' element={<ReachPapers/>}></Route>
          <Route path='/login' element={<Login/>}></Route>
          <Route path='/Register' element={<Register/>}></Route>
            {role === 'admin' && <Route path="/AdminDashboard" element={<AdminDashboard />} />}
            {role === 'user' && <Route path="/StudentDashboard" element={<StudentDashboard />} />}
            <Route path="/AboutUs" element={<AboutUs />} />
            <Route path="/Calculator" element={<Calculator />} />
            <Route path="/Course" element={<Course />} />
            <Route path="/DocumentsList" element={<DocumentsList />} />
            <Route path="/DocumentsUpload" element={<DocumentsUpload />} />
            <Route path="/Notes" element={<Notes />} />
            <Route path="/PastPapers" element={<PastPapers />} />
            <Route path="/Books" element={<Books />} />
            <Route path="/Library" element={<Library />} />
            <Route path="/Vials" element={<Vials />} />
            <Route path="/Videos" element={<Videos />} />
            <Route path="/UploadDocuments" element={<UploadDocuments />}/>
            <Route path="/StudentsList" element={<StudentsList />} />
            <Route path="/VialsList" element={<VialsList />} />
            <Route path="/UploadCoursesVideos" element={<UploadCoursesVideos />} />
            <Route path="/CreateVilas" element={<CreateVilas />} />
          
        </Routes>
      </BrowserRouter>
      </AuthContext.Provider>
    </div>
  );
}

export default App;
