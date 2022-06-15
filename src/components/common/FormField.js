import React from "react";

const FormField = ({ column, icon, type, fieldclass, placeholder }) => {
  return (
    <div className={`${column}`}>
        <div className="fieldContainer">
            <i className={`${icon}`}></i>
            <input
                type={`${type}`}
                className={`${fieldclass}`}
                placeholder={`${placeholder}`}
                value=""
            />
        </div>
    </div>
  );
};

export default FormField;