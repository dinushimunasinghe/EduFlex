import React, { useState } from "react";
import HomeBar from "../../Components/Bar/NavBar/HomeBar";
import SearchBar from "../../Components/Bar/NavBar/SearchBar";
import bg from "../../assets/images/b1.jpg";
import bg2 from "../../assets/images/b2.jpg";
import background from "../../assets/images/Background.jpeg";

import FooterBar from "../../Components/Bar/FooterBar/FooterBar";

import { MDBFooter } from "mdb-react-ui-kit";
import Courses from "./Courses/Courses";
import AboutUs from "../Student/AboutUs/AboutUs";

function Home() {
  const [openNavColor, setOpenNavColor] = useState(false);
  const [openNavColorSecond, setOpenNavColorSecond] = useState(false);
  const [openNavColorThird, setOpenNavColorThird] = useState(false);

  return (
    <div>
      
      <div
        class="img-fluid p-1 text-light"
        style={{
          backgroundImage: `url(${bg})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      ><HomeBar />
        <br />
        <div className="container mt-2 ">
          <div class="col-8 col-sm-5 mt-3">
            
            <h2 class="text-start fw-bold">Start To Successes </h2>
          </div>

          <div class="col-10 col-sm-8 mt-3">
            <h1 class="text-start fw-bold display-1">Discover Your </h1>
            <h1 class="text-start fw-bold display-2">Passion For Learning </h1>
          </div>

          
          <SearchBar />

          <div class="text-start fw-bold mt-5">
            <button type="button" class="btn btn-dark" data-mdb-ripple-init>
              Start Hear
            </button>
          </div>

          <div class="text-start fw-bold mt-3">
            <a
              className="btn text-white"
              data-mdb-ripple-init
              style={{ backgroundColor: "#333333" }}
              href="#!"
              role="button"
            >
              <i className="fab fa-github"></i>
            </a>

            <a
              class="btn text-white ms-3"
              data-mdb-ripple-init
              style={{ backgroundColor: "#3b5998" }}
              href="#!"
              role="button"
            >
              <i class="fab fa-facebook-f"></i>
            </a>

            <a
              class="btn text-white ms-3"
              data-mdb-ripple-init
              style={{ backgroundColor: "#55acee" }}
              href="#!"
              role="button"
            >
              <i class="fab fa-twitter"></i>
            </a>

            <a
              class="btn text-white ms-3"
              data-mdb-ripple-init
              style={{ backgroundColor: "#dd4b39" }}
              href="#!"
              role="button"
            >
              <i class="fab fa-google"></i>
            </a>
          </div>

          <div class="row row-cols-1 row-cols-md-3 g-4 ">
            <div class="col">
              <div class="card h-100 bg-transparent text-light">
                <div class="card-body">
                  <h1 class="card-title fw-bold">
                    10000 + <h2>Online users </h2>
                  </h1>
                </div>
              </div>
            </div>
            <div class="col">
              <div class="card h-100 bg-transparent text-light">
                <div class="card-body">
                  <h1 class="card-title fw-bold">
                   10000 + <h2>Assigments</h2> {" "}
                  </h1>
                </div>
              </div>
            </div>
            <div class="col">
              <div class="card h-100 bg-transparent text-light">
                <div class="card-body">
                  <h1 class="card-title fw-bold"> 1000 + <h2>Past Papers </h2>  </h1>
                </div>
              </div>
            </div>
          </div>

          <br />
          
        </div>
      </div>

      
      
      {/* <MDBFooter
        className="text-center text-white"
        style={{ backgroundColor: "#0a4275" }}
      >
        <div
          className="text-center text-white p-4"
          style={{ backgroundColor: "#0a4275" }}
        >
          <h2 className="mb-2">Our Services</h2>
        </div>
      </MDBFooter> */}
      <br />
      <br />

      <div class="row row-cols-1 row-cols-md-3 g-4 m-4">
        <div class="col">
          <div class="card h-100">
            <img
              src="https://www.cryptopolitan.com/wp-content/uploads/2024/02/DALL%C2%B7E-2024-02-19-09.13.56-Illustrate-a-conceptual-image-for-Sora-OpenAIs-fictional-new-text-to-video-tool.-The-image-should-depict-a-sleek-modern-interface-on-a-computer-s.webp"
              class="card-img-top"
              alt="..."
            />
            <div class="card-body">
              <h3 class="card-title fw-bold text-lg bg-body-tertiary text-muted">IT Related Free Programs</h3>
            </div>
          </div>
        </div>
        <div class="col">
          <div class="card h-100">
            <img
              src="https://media.designrush.com/articles/231707/conversions/information-technology-details.jpg"
              class="card-img-top"
              alt="..."
            />
            <div class="card-body">
              <h3 class="card-title fw-bold text-lg bg-body-tertiary text-muted">
                10000+ Assigments and Short Notes{" "}
              </h3>
            </div>
          </div>
        </div>
        <div class="col">
          <div class="card h-100">
            <img
              src="https://mycourses.co.za/wp-content/uploads/2023/09/Computer-Applications-Technology-CAT-Grade-12-September-2023-Question-Paper-and-Memo-pdf-1200x675.jpeg"
              class="card-img-top"
              alt="..."
            />
            <div class="card-body">
              <h3 class="card-title fw-bold text-lgbg-body-tertiary text-muted">1000+ Past Papers</h3>
            </div>
          </div>
        </div>
      </div>
      <br />

      <AboutUs />

      <FooterBar />
    </div>
  );
}

export default Home;
