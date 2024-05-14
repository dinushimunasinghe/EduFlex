import React, { useState } from "react";
import StudentDashboard from "../../../Authentication/Dashboard/StudentDashboard";
import bg3 from "../../../assets/images/b3.jpg";
import StudentsProfileLayouts from "../../../Layouts/ProfileLayouts/StudentsProfileLayouts";

function Calculator() {
  const [courses, setCourses] = useState([
    { name: "", grade: "", credits: "" },
    { name: "", grade: "", credits: "" },
    { name: "", grade: "", credits: "" },
  ]);

  const handleCourseChange = (index, field, value) => {
    const updatedCourses = [...courses];
    updatedCourses[index][field] = value;
    setCourses(updatedCourses);
  };

  const calculateGPA = () => {
    let totalCredits = 0;
    let totalGradePoints = 0;

    courses.forEach((course) => {
      const credit = parseFloat(course.credits);
      const grade = parseFloat(course.grade);

      if (!isNaN(credit) && !isNaN(grade)) {
        totalCredits += credit;
        totalGradePoints += credit * grade;
      }
    });

    const gpa = totalGradePoints / totalCredits;
    return isNaN(gpa) ? 0 : gpa.toFixed(2);
  };

  const handleCalculate = () => {
    const gpa = calculateGPA();
    alert(`Your GPA is: ${gpa}`);
  };

  const handleClearAll = () => {
    setCourses([
      { name: "", grade: "", credits: "" },
      { name: "", grade: "", credits: "" },
      { name: "", grade: "", credits: "" },
    ]);
  };

  return (
    <div>
      <StudentsProfileLayouts>
        <div className="text-center text-lg-start bg-transparent text-muted">
          <section className="justify-content-center p-4 border-bottom container mb-6">
            <br />
            <br />

            <form className="d-flex justify-content-center bg-transparent">
              <div
                className="card col-12 col-md-10 mt-4 bg-primary"
                style={{
                  backgroundImage: `url(${bg3})`,
                  backgroundRepeat: "no-repeat",
                  backgroundSize: "cover",
                }}
              >
                <div className="card-body">
                  <h4 className="text-light">GPA Calculator</h4>
                  <br />
                  <h6 className="text-light">
                    Compute your cumulative, high school, and college GPA,
                    <br /> review your grades, and comprehend how the GPA scale
                    works.
                  </h6>
                  <br />
                  {courses.map((course, index) => (
                    <div className="row mb-4" key={index}>
                      <div className="col">
                        <input
                          placeholder="Subject"
                          type="text"
                          className="form-control"
                          value={course.name}
                          onChange={(e) =>
                            handleCourseChange(index, "name", e.target.value)
                          }
                        />
                      </div>
                      <div className="col">
                        <input
                          placeholder="Credits"
                          type="text"
                          className="form-control"
                          value={course.credits}
                          onChange={(e) =>
                            handleCourseChange(index, "credits", e.target.value)
                          }
                        />
                      </div>
                      <div className="col">
                        <input
                          placeholder="Grade"
                          type="text"
                          className="form-control"
                          value={course.grade}
                          onChange={(e) =>
                            handleCourseChange(index, "grade", e.target.value)
                          }
                        />
                      </div>
                    </div>
                  ))}
                  <div className="d-grid gap-2 col-5">
                    <button
                      type="button"
                      className="btn btn-success mt-2"
                      onClick={handleCalculate}
                    >
                      Calculate GPA
                    </button>
                    <button
                      type="button"
                      className="btn btn-secondary mt-2"
                      onClick={handleClearAll}
                    >
                      Clear All
                    </button>
                  </div>
                </div>
              </div>
            </form>
          </section>
        </div>
        <br />
        <br />
      </StudentsProfileLayouts>
    </div>
  );
}

export default Calculator;
