import React from "react";
import StudentDashboard from "../../../Authentication/Dashboard/StudentDashboard";
import LibraryList from "../../../Components/List/LibraryList/LibraryList";
import StudentsProfileLayouts from "../../../Layouts/ProfileLayouts/StudentsProfileLayouts";

function Library() {
  return (
    <div>
      <StudentsProfileLayouts>
        <LibraryList />
      </StudentsProfileLayouts>
    </div>
  );
}

export default Library;
