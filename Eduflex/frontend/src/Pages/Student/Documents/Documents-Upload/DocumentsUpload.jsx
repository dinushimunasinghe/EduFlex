import React, { useState } from "react";
import axios from "axios";
import querystring from "querystring";
import bg3 from "../../../../assets/images/b3.jpg";
import StudentDashboard from "../../../../Authentication/Dashboard/StudentDashboard";
import StudentsProfileLayouts from "../../../../Layouts/ProfileLayouts/StudentsProfileLayouts";

function DocumentsUpload() {
  const [document, setDocument] = useState(null);
  const [text, setText] = useState("");

  const handleDocumentChange = (e) => {
    setDocument(e.target.files[0]);
  };
  const handleTextChange = (e) => {
    setText(e.target.value);
  };
  const handleSubmit = async (e) => { // Added 'e' as a parameter
    e.preventDefault();


    const formData = new FormData();
    formData.append("document", document);
    formData.append("documentType", text);

    try {
      await axios.post(
        "http://localhost:5000/documents/insert",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      alert("Upload Successful");
      window.location.href = "./DocumentsUpload";
    } catch (err) {
      alert("Error: " + err.message);
    }
  };

  return (
    <div>
      <StudentsProfileLayouts>
        <div className="container mt-5 d-flex justify-content-center mb-8">
          <br />
          <div
            className="card col-md-10 mt-5 bg-primary"
            style={{
              backgroundImage: `url(${bg3})`,
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
            }}
          >
            <div className="card-body bg-transparent">
              <h4 className="text-start mb-4 text-light">
                Upload Your Notes, Assignments, and Past Papers
              </h4>
              <form className="row g-2 mt-4 mb-4 bg-transparent">
                <div className="col-12 mb-3 mt-3 text-start">
                  <label
                    htmlFor="inputGroupFile02"
                    className="form-label text-light mb-4"
                  >
                    Upload Document :
                  </label>
                  <div className="input-group">
                    <input type="file" onChange={handleDocumentChange} />
                    <label
                      className="input-group-text"
                      htmlFor="inputGroupFile02"
                    >
                      Upload
                    </label>
                  </div>
                </div>

                <div className="col-12 mb-3 mt-3 text-start">
                  <label
                    htmlFor="inputGroupFile02"
                    className="form-label text-light"
                  >
                    Document Type :
                  </label>
                  <select
                    className="form-select form-select-sm"
                    aria-label=".form-select-sm example"
                    required
                    name="DocumentType"
                    id="DocumentType"
                    onChange={handleTextChange}
                  >
                    <option value="">Select Document Type</option>
                    <option value="Books">Books</option>
                    <option value="Notes">Notes</option>
                    <option value="PastPapers">Past Papers</option>
                  </select>
                </div>

                <div className="col-12 mt-3 text-end">
                  <button
                    type="submit"
                    className="btn btn-success"
                    onClick={ handleSubmit}
                  >
                    Submit Document
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
      </StudentsProfileLayouts>
    </div>
  );
}

export default DocumentsUpload;
