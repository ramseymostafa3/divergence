import React from "react";

const FormField = ({ column, icon, type, fieldclass, placeholder }) => {
  return (
    <div className={`${column}`}>
        <div className="fieldContainer input-container">
            <i className={`${icon}`}></i>
            <input
                type={`${type}`}
                className={`${fieldclass}`}
                placeholder={`${placeholder}`}
            />
        </div>
    </div>
  );
};

export default FormField;