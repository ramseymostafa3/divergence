import React from "react";

function FormArea() {
  return (
    <div className="blockDivergent">
      <div className="row">
        <div className="col-md-6">
          <div className="fieldContainer">
            <i className="fa fa-user"></i>
            <input
              type="text"
              className="form-control"
              placeholder="Grace Brown"
              value=""
            />
          </div>
        </div>
        <div className="col-md-6">
          <div className="fieldContainer">
            <i className="fas fa-calendar-alt"></i>
            <input
              type="date"
              className="form-control"
              placeholder="Start Date"
              value=""
            />
          </div>
        </div>
        <div className="col-md-6">
          <div className="fieldContainer">
            <i className="fas fa-history"></i>
            <input
              type="text"
              className="form-control"
              placeholder="Granularity"
              value=""
            />
          </div>
        </div>
        <div className="col-md-6">
          <div className="fieldContainer">
            <i className="fas fa-calendar-alt"></i>
            <input
              type="date"
              className="form-control"
              placeholder="End Date"
              value=""
            />
          </div>
        </div>
        <div className="col-md-12">
          <button className="submit" type="submit">
            Go
          </button>
        </div>
      </div>
    </div>
  );
}

export default FormArea;
