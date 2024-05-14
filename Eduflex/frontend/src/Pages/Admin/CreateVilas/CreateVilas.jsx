import React, { useState } from "react";
import axios from "axios";
import querystring from "querystring";
import AdminProfileLayouts from "../../../Layouts/ProfileLayouts/AdminProfileLayouts";

function CreateVilas() {
  const [PreacherName, setPreacherName] = useState("");
  const [PreacherEmail, setPreacherEmail] = useState("");
  const [VialsSubject, setVialsSubject] = useState("");
  const [Date, setDate] = useState("");
  const [Link, setLink] = useState("");


  const handlePreacherNameChange = (e) => {
    setPreacherName(e.target.value);
  };
  const handlePreacherEmailChange = (e) => {
    setPreacherEmail(e.target.value);
  };
  const handleVialsSubjectChange = (e) => {
    setVialsSubject(e.target.value);
  };
  const handleDateChange = (e) => {
    setDate(e.target.value);
  };
  const handleLinkChange = (e) => {
    setLink(e.target.value);
  };

  
  // const handleSubmit = async (e) => { // Added 'e' as a parameter
  //   e.preventDefault();

  //   const formData = ({
  //         PreacherName: PreacherName,
  //         PreacherEmail: PreacherEmail,
  //         VialsSubject: VialsSubject,
  //         Date: Date,
  //         Link: Link,
  //       });

  //       console.log(formData)



  //   try {
  //     await axios.post(
  //       "http://localhost:5000/Vilasroute/Vilas",
  //       formData,
        
  //     );
  //     alert("Create Successfully");
  //     window.location.href = "./CreateVilas";
  //   } catch (err) {
  //     alert("Error", err);
  //   }

  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent default form submission behavior
  
    const formData = {
      PreacherName,
      PreacherEmail,
      VialsSubject,
      Date,
      Link
    };
  
    try {
      await axios.post(
        "http://localhost:5000/Vilasroute/Vilas",
        formData
      );
      
      alert("Created Successfully");
      // Assuming you want to stay on the same page after submission
      // If not, adjust the redirection logic accordingly
      // window.location.href = "./CreateVilas";
    } catch (err) {
      console.error("Error:", err);
      alert("Error creating Vilas");
    }
  
  }
  return (
    <div>
      <AdminProfileLayouts>
        <div class="text-center text-lg-start bg-body-tertiary text-muted p-2">
          <section class="justify-content-center p-5 border-bottom container">
            <h4>Upload Course Videos</h4>

            <form class="row g-2 mt-3">
              <div class="input-group mb-3 col-5">
                <label for="inputAddress2" class="form-label">
                  1 Preacher Name :{" "}
                </label>
                <input
                  type="text"
                  aria-label="PreacherName"
                  class="form-control ms-2"
                  name="PreacherName"
                  id="PreacherName"
                  onChange={handlePreacherNameChange}
                />
              </div>

              <div class="input-group mb-3">
                <label for="inputAddress2" class="form-label">
                  2 Preacher Email :{" "}
                </label>
                <input
                  type="text"
                  aria-label="PreacherEmail"
                  class="form-control ms-2"
                  name="PreacherEmail"
                  id="PreacherEmail"
                  onChange={handlePreacherEmailChange}
                />
              </div>

              <div class="input-group mb-3">
                <label for="inputAddress2" class="form-label">
                  3 Vials Subject :{" "}
                </label>
                <input
                  type="text"
                  aria-label="VialsSubject"
                  class="form-control ms-4"
                  name="VialsSubject"
                  id="VialsSubject"
                  onChange={handleVialsSubjectChange}
                />
              </div>

              <div class="input-group mb-3">
                <label for="inputAddress2" class="form-label">
                  4 Select Vials Date :{" "}
                </label>
                <input
                  type="text"
                  aria-label="Date"
                  class="form-control ms-4"
                  name="Date"
                  id="Date"
                  onChange={handleDateChange}
                />
              </div>

              <div class="input-group mb-3">
                <label for="inputAddress2" class="form-label">
                  5 Link :{" "}
                </label>
                <input
                  type="text"
                  aria-label="Link"
                  class="form-control ms-5"
                  name="Link"
                  id="Link"
                  onChange={handleLinkChange}
                />
              </div>

              <div class="col-12">
                <button type="submit" class="btn btn-primary" onClick={handleSubmit}>
                  Create Vilas
                </button>
              </div>
            </form>
          </section>
        </div>
      </AdminProfileLayouts>
    </div>
  );
}

export default CreateVilas;
