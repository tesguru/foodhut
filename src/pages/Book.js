import React from 'react'

const Book = () => {
  return (
    <div class="container-fluid has-bg-overlay text-center text-light has-height-lg middle-items" id="book-table">
        <div className="">
            <h2 className="section-title mb-5">BOOK A TABLE</h2>
            <div className="row mb-5">
                <div className="col-sm-6 col-md-3 col-xs-12 my-2">
                    <input type="email" id="booktable" class="form-control form-control-lg custom-form-control" placeHolder="EMAIL" />
                </div>
                <div className="col-sm-6 col-md-3 col-xs-12 my-2">
                    <input type="number" id="booktable" class="form-control form-control-lg custom-form-control" placeholder="NUMBER OF GUESTS" max="20" min="0" />
                </div>
                <div className="col-sm-6 col-md-3 col-xs-12 my-2">
                    <input type="time" id="booktable" class="form-control form-control-lg custom-form-control" placeHolder="EMAIL" />
                </div>
                <div className="col-sm-6 col-md-3 col-xs-12 my-2">
                    <input type="date" id="booktable" class="form-control form-control-lg custom-form-control" placeHolder="12/12/12" />
                </div>
            </div>
            <a href="#" class="btn btn-lg btn-primary" id="rounded-btn">FIND TABLE</a>
        </div>
    </div>
  )
}

export default Book
