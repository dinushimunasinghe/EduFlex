import React, { useEffect, useState } from "react";

function SlidesList(props) {
    const [SlidesList, setSlidesList] = useState([]);

  useEffect(() => {
    getSlidesList();
  }, []);

  const getSlidesList = async () => {
    try {
      const response = await axios.get("http://localhost:5000/newsroute/view");
      setSlidesList(response.data);
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <div>
        <div class="list-group m-2">
            <a href="#" class="list-group-item list-group-item-action" aria-current="true">
                <div class="d-flex w-100 justify-content-between">
                <h5 class="mb-1">{props.SlidesName}</h5>
                    <table class="table">
                        <thead>
                            <tr>
                            <th scope="col">Lecture slides</th>
                            <th scope="col">Downloard</th>
                            <th scope="col">Date</th>
                            </tr>
                        </thead>
                        <tbody>
                        {SlidesList.map((SlidesList) => (
                        <tr
                        key={SlidesList._id}
                        >
                            <td>{SlidesList.LectureSlides}</td>
                            <td><button class="btn"><i class="fa fa-download"></i> Download</button></td>
                            <td>{SlidesList.Date}</td>
                        </tr>
                        ))}
                        </tbody>
                    </table>
                </div>
            </a>
        </div>
    </div>
  )
}

export default SlidesList