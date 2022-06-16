import React, {useState} from "react";
import FormField from '../../../common/FormField';

function FormArea() {
  return (
    <div className="blockDivergent">
      <div className="row">
        <FormField
          column={"col-md-6"}
          icon={"fa fa-user"}
          type="text"
          fieldclass={"form-control"}
          placeholder={"Grace Brown"}
        />
        <FormField
          column={"col-md-6"}
          icon={"fas fa-calendar-alt"}
          type="date"
          fieldclass={"form-control"}
          placeholder={""}
        />
        <FormField
          column={"col-md-6"}
          icon={"fas fa-history"}
          type="text"
          fieldclass={"form-control"}
          placeholder={"Granularity"}
        />
        <FormField
          column={"col-md-6"}
          icon={"fas fa-calendar-alt"}
          type="date"
          fieldclass={"form-control"}
          placeholder={""}
        />
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
