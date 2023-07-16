import React from "react";

const Title = ({ title, style, className, attribute }) => {
  return (
    <div
      className={`title ${className}`}
      style={{ color: `${style ? style : "#373737"}` }}
      {...attribute}
    >
      {title}
    </div>
  );
};

export default Title;
