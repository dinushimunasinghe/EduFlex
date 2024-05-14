// import React from 'react'
import React, { useEffect, useState } from "react";
import axios from "axios";
import StudentsProfileLayouts from '../../../../Layouts/ProfileLayouts/StudentsProfileLayouts'
import NavBar from '../../../../Components/Bar/NavBar/NavBar'
import NavLinks from '../../../../Components/Bar/NavBar/NavLinks'
import login from '../../../../assets/images/bg.jpg'

function Videos() {
    const [Videos, setVideos] = useState([]);

    useEffect(() => {
        getVideos();
    }, []);

    const getVideos = async () => {
        try {
            const response = await axios.get("http://localhost:5000/Vilasroute/view");
            setVideos(response.data);
        } catch (error) {
            console.error(error);
        }
    };
  return (
    <div style={{ backgroundImage: `url(${login})` , backgroundRepeat: 'no-repeat' , backgroundSize: 'cover'}}>
        <NavBar>
            <a class="btn btn-primary text-start" href='/Course'>
                Back to Courses
            </a>
        </NavBar>
        
            <div className='container mb-9'>
            <p>
            <button class="btn btn-primary me-2 mt-2 px-5 py-4" type="button" data-bs-toggle="collapse" data-bs-target="#collapseWidthExample" aria-expanded="false" aria-controls="collapseWidthExample">
                HTML
            </button>
            <button class="btn btn-primary me-2 mt-2 px-5 py-4" type="button" data-bs-toggle="collapse" data-bs-target="#collapseWidthExample1" aria-expanded="false" aria-controls="collapseWidthExample1">
                Css
            </button>
            <button class="btn btn-primary me-2 mt-2 px-5 py-4" type="button" data-bs-toggle="collapse" data-bs-target="#collapseWidthExample2" aria-expanded="false" aria-controls="collapseWidthExample2">
                JS
            </button>
            <button class="btn btn-primary me-2 mt-2 px-5 py-4" type="button" data-bs-toggle="collapse" data-bs-target="#collapseWidthExample3" aria-expanded="false" aria-controls="collapseWidthExample3">
                PHP
            </button>
            <button class="btn btn-primary me-2 mt-2 px-5 py-4" type="button" data-bs-toggle="collapse" data-bs-target="#collapseWidthExample4" aria-expanded="false" aria-controls="collapseWidthExample4">
                Python
            </button>
            <button class="btn btn-primary me-2 mt-2 px-5 py-4" type="button" data-bs-toggle="collapse" data-bs-target="#collapseWidthExample5" aria-expanded="false" aria-controls="collapseWidthExample5">
                ICT
            </button>
            <button class="btn btn-primary me-2 mt-2 px-5 py-4" type="button" data-bs-toggle="collapse" data-bs-target="#collapseWidthExample6" aria-expanded="false" aria-controls="collapseWidthExample6">
                C
            </button>
            <button class="btn btn-primary me-2 mt-2 px-5 py-4" type="button" data-bs-toggle="collapse" data-bs-target="#collapseWidthExample7" aria-expanded="false" aria-controls="collapseWidthExample7">
                C#
            </button>
            <button class="btn btn-primary me-2 mt-2 px-5 py-4" type="button" data-bs-toggle="collapse" data-bs-target="#collapseWidthExample8" aria-expanded="false" aria-controls="collapseWidthExample8">
                Java
            </button>
            <button class="btn btn-primary me-2 mt-2 px-5 py-4" type="button" data-bs-toggle="collapse" data-bs-target="#collapseWidthExample9" aria-expanded="false" aria-controls="collapseWidthExample9">
                Desktop Application Development
            </button>
            </p>

            <div>
            <div class="collapse collapse-horizontal m-2" id="collapseWidthExample">

            {Videos.map((Videos) => (
                    <tr
                    key={Videos._id}
                    >
                        <td className="text-light" >{Videos.UploadVideo}</td>
                        <td className="text-light" >{Videos.UploadThubnail}</td>
                        <td className="text-light" >{Videos.VideoTittle}</td>
                        <td className="text-light" >{Videos.CoursesType}</td>
                    </tr>
                    ))}

                    
                <div class="card card-body" >
                    <div class="row container">
                        <div class="col-6 col-md-4">
                            <div class="card">
                                <img src="..." class="card-img-top" alt="...">{Videos.UploadThubnail}</img>
                                <video> {Videos.UploadVideo} </video>
                                <div class="card-body">
                                    <h5 class="card-title">{Videos.VideoTittle}</h5>
                                </div>
                            </div>
                        </div>        
                    </div>
                </div>

            </div>
            </div>

            <div>
            <div class="collapse collapse-horizontal m-2" id="collapseWidthExample1">

                <div class="card card-body" >
                    <div class="row container">
                        <div class="col-6 col-md-4">
                            <div class="card">
                                <img src="..." class="card-img-top" alt="..."/>
                                <div class="card-body">
                                    <h5 class="card-title">Card title</h5>
                                </div>
                            </div>
                        </div>        
                    </div>
                </div>

            </div>
            </div>

            <div>
            <div class="collapse collapse-horizontal m-2" id="collapseWidthExample2">

                <div class="card card-body" >
                    <div class="row container">
                        <div class="col-6 col-md-4">
                            <div class="card">
                                <img src="..." class="card-img-top" alt="..."/>
                                <div class="card-body">
                                    <h5 class="card-title">Card title</h5>
                                </div>
                            </div>
                        </div>        
                    </div>
                </div>

            </div>
            </div>

            <div>
            <div class="collapse collapse-horizontal m-2" id="collapseWidthExample3">

                <div class="card card-body" >
                    <div class="row container">
                        <div class="col-6 col-md-4">
                            <div class="card">
                                <img src="..." class="card-img-top" alt="..."/>
                                <div class="card-body">
                                    <h5 class="card-title">Card title</h5>
                                </div>
                            </div>
                        </div>        
                    </div>
                </div>

            </div>
            </div>

            <div>
            <div class="collapse collapse-horizontal m-2" id="collapseWidthExample4">

                <div class="card card-body" >
                    <div class="row container">
                        <div class="col-6 col-md-4">
                            <div class="card">
                                <img src="..." class="card-img-top" alt="..."/>
                                <div class="card-body">
                                    <h5 class="card-title">Card title</h5>
                                </div>
                            </div>
                        </div>        
                    </div>
                </div>

            </div>
            </div>

            <div>
            <div class="collapse collapse-horizontal m-2" id="collapseWidthExample5">

                <div class="card card-body" >
                    <div class="row container">
                        <div class="col-6 col-md-4">
                            <div class="card">
                                <img src="..." class="card-img-top" alt="..."/>
                                <div class="card-body">
                                    <h5 class="card-title">Card title</h5>
                                </div>
                            </div>
                        </div>        
                    </div>
                </div>

            </div>
            </div>

            <div>
            <div class="collapse collapse-horizontal m-2" id="collapseWidthExample6">

                <div class="card card-body" >
                    <div class="row container">
                        <div class="col-6 col-md-3">
                            <div class="card">
                                <img src="..." class="card-img-top" alt="..."/>
                                <div class="card-body">
                                    <h5 class="card-title">Card title</h5>
                                </div>
                            </div>
                        </div>        
                    </div>
                </div>

            </div>
            </div>

            <div>
            <div class="collapse collapse-horizontal m-2" id="collapseWidthExample7">

                <div class="card card-body" >
                    <div class="row container">
                        <div class="col-6 col-md-3">
                            <div class="card">
                                <img src="..." class="card-img-top" alt="..."/>
                                <div class="card-body">
                                    <h5 class="card-title">Card title</h5>
                                </div>
                            </div>
                        </div>        
                    </div>
                </div>

            </div>
            </div>

            <div>
            <div class="collapse collapse-horizontal m-2" id="collapseWidthExample8">

                <div class="card card-body" >
                    <div class="row container">
                        <div class="col-6 col-md-3">
                            <div class="card">
                                <img src="..." class="card-img-top" alt="..."/>
                                <div class="card-body">
                                    <h5 class="card-title">Card title</h5>
                                </div>
                            </div>
                        </div>        
                    </div>
                </div>

            </div>
            </div>

            <div>
            <div class="collapse collapse-horizontal m-2" id="collapseWidthExample9">

                <div class="card card-body" >
                    <div class="row container">
                        <div class="col-6 col-md-4">
                            <div class="card">
                                <img src="..." class="card-img-top" alt="..."/>
                                <div class="card-body">
                                    <h5 class="card-title">Card title</h5>
                                </div>
                            </div>
                        </div>        
                    </div>
                </div>

            </div>
            </div>

            <br />
            </div>
            
        
    </div>
  )
}

export default Videos