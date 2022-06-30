import React, {useState} from "react";
import FormField from '../../../common/FormField';

function FormSummary() {
  return (
    <div className="blockDivergent">
      <div className="row">
        <div className="col-12">
          <label>Please add Oanda<br/>API Key to place orders</label>
        </div>
        <FormField
          column={"col-md-6"}
          icon={"fas fa-key"}
          type="text"
          fieldclass={"form-control"}
          placeholder={"API Key"}
        />
        <FormField
          column={"col-md-6"}
          icon={"fas fa-key"}
          type="text"
          fieldclass={"form-control"}
          placeholder={"Secret Key"}
        />
        <div className="col-md-12">
          <button className="submit" type="submit">
            Connect
          </button>
        </div>
      </div>
    </div>
  );
}

export default FormSummary;
