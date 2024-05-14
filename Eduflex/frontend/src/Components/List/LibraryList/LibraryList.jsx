import React from "react";
import ListItems from "../ListItems/ListItems";
import Items from "../../Items/Items";

function LibraryList() {
  return (
    <div className="mt-5">
      <div class="row mt-4 m-5 mb-5 container">
        <h2 className="mb-5 mt-4 text-start text-light">
          Find a Notes, Assignments, and Past Papers
        </h2>

        <div class="col-8 col-sm-5 mx-5 mt-4"></div>
        <div class="row">
          <div class="col">
            <div class="card h-100 bg-primary">
              <img
                src="https://t4.ftcdn.net/jpg/00/90/86/81/360_F_90868187_CNzU7oaUJ0GG4voml6QBzX7EQJIaaLod.jpg"
                class="card-img-top"
                alt="..."
              />
              <div class="card-body">
                <a type="button" href="/Notes" class="btn btn-secondary">
                  Short Notes
                </a>
              </div>
            </div>
          </div>
          <div class="col">
            <div class="card h-100 bg-danger">
              <img
                src="https://t4.ftcdn.net/jpg/01/62/27/87/360_F_162278782_YMvxq5FkLZAQe3een05zGyv2UECZ0KIP.jpg"
                class="card-img-top"
                alt="..."
              />
              <div class="card-body">
                <a type="button" href="/Books" class="btn btn-secondary">
                  Books
                </a>
              </div>
            </div>
          </div>
          <div class="col">
            <div class="card h-100 bg-warning">
              <img
                src="https://img.freepik.com/free-vector/document-vector-colorful-design_341269-1262.jpg"
                class="card-img-top"
                alt="..."
              />
              <div class="card-body">
                <a type="button" href="/PastPapers" class="btn btn-secondary">
                  Past Papers
                </a>
              </div>
            </div>
          </div>

          <div class="col">
            <div class="card h-100 bg-success">
              <img
                src="https://static.vecteezy.com/system/resources/previews/015/912/825/non_2x/library-book-icon-isometric-style-vector.jpg"
                class="card-img-top"
                alt="..."
              />
              <div class="card-body">
                <a type="button" href="/ReachPapers" class="btn btn-secondary">
                  Research Papers
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <a
        class="btn text-white ms-3 mb-7"
        data-mdb-ripple-init
        href="#!"
        role="button"
      ></a>
    </div>
  );
}

export default LibraryList;
