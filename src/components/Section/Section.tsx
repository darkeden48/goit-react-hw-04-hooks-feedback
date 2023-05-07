import React, { ReactNode } from "react";
import PropTypes from "prop-types";

interface SectProps{
  title: string; 
  children: ReactNode;
}

const Section = ({ title, children }:SectProps) => {
  return (
    <div>
      <h2>{title}</h2>
      {children}
    </div>
  );
};
Section.propTypes = {
  title: PropTypes.string,
  children: PropTypes.object,
};
export default Section;
