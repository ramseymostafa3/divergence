import React from "react";

const VerticalProgress = ({ progress, style, barStyle }) => {
  return (
    <div className="progress vertical" style={style}>
      <div
        style={{
          ...barStyle,
          height: `${progress}%`
        }}
        className="progress-bar"
      >
        {/* <span className="sr-only">{`${progress}%`}</span> */}
      </div>
    </div>
  );
};

export default VerticalProgress;
