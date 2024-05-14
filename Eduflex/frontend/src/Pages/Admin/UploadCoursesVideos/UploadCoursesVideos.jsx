import React, { useState } from "react";
import axios from "axios";
import querystring from "querystring";
import AdminProfileLayouts from "../../../Layouts/ProfileLayouts/AdminProfileLayouts";

function UploadCoursesVideos() {
  const [UploadVideo, setUploadVideo] = useState("");
  const [UploadThubnail, setUploadThubnail] = useState("");
  const [VideoTittle, setVideoTittle] = useState("");
  const [CoursesType, setCoursesType] = useState("");

  async function save(event) {
    event.preventDefault();

    const formData = querystring.stringify({
      UploadVideo: UploadVideo,
      UploadThubnail: UploadThubnail,
      VideoTittle: VideoTittle,
      CoursesType: CoursesType,
    });
    try {
      await axios.post(
        "http://localhost:5000/Coursesroute/insert",
        formData,
        {
          headers: {
            "Content-Type": "application/x-www-form-urlencoded",
          },
        }
      );
      alert("Upload Successfully");
      window.location.href = "./UploadLectures";
    } catch (err) {
      alert("Error", err);
    }
  }
  return (
    <div>
      <AdminProfileLayouts>
        <div class="text-center text-lg-start bg-body-tertiary text-muted p-2">
          <section class="justify-content-center p-5 border-bottom container">
            <h4>Upload Course Videos</h4>

            <form class="row g-2 mt-3">

            <label for="inputAddress2" class="form-label">
                  1 Upload Video :{" "}
                </label>
              <div class="input-group mb-3"> 
                <input
                  type="file"
                  class="form-control ms-2"
                  name="UploadVideo"
                  id="UploadVideo"
                  onChange={(event) => {
                    setUploadVideo(event.target.value);
                  }}
                />
                <label class="input-group-text" for="inputGroupFile02">
                  Upload
                </label>
              </div>

              <label for="inputAddress2" class="form-label">
                  2 Upload Thubnail :{" "}
                </label>
              <div class="input-group mb-3">
                
                <input
                  type="file"
                  class="form-control ms-2"
                  name="UploadThubnail"
                  id="UploadThubnail"
                  onChange={(event) => {
                    setUploadThubnail(event.target.value);
                  }}
                />
                <label class="input-group-text" for="inputGroupFile02">
                  Upload
                </label>
              </div>

              <label for="inputAddress2" class="form-label">
                3 Video Tittle :{" "}
              </label>
              <div class="form-floating mb-3">
                <textarea
                  class="form-control ms-2"
                  placeholder="Leave a comment here"
                  name="VideoTittle"
                  id="VideoTittle"
                  onChange={(event) => {
                    setVideoTittle(event.target.value);
                  }}
                ></textarea>
              </div>

              <label for="inputAddress2" class="form-label">
                4 Select Courses :{" "}
              </label>
              <select
                class="form-select form-select-sm mb-3 ms-3"
                aria-label=".form-select-sm example"
                required
                name="CoursesType"
                id="CoursesType"
                onChange={(event) => {
                  setCoursesType(event.target.value);
                }}
              >
                <option selected>Open this select Courses</option>
                <option value="1">HTML Courses</option>
                <option value="2">JS Courses</option>
                <option value="3">C Courses</option>
                <option value="4">C# Courses</option>
                <option value="5">JAVA Courses</option>
                <option value="6">Python Courses</option>
                <option value="7">Css Courses</option>
                <option value="8">PHP Courses</option>
                <option value="9">ICT Courses</option>
                <option value="10">Desktop Application Courses</option>
              </select>

              <div class="col-12">
                <button type="submit" class="btn btn-primary" onClick={save}>
                  Upload Video
                </button>
              </div>
            </form>
          </section>
        </div>
      </AdminProfileLayouts>
    </div>
  );
}

export default UploadCoursesVideos;
