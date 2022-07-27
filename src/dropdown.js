import React, { Component } from "react";
import Select from "react-select";



const options = [
  { label: "Pubert Office 1", value: 35 },
  { label: "Pubert Office 2", value: 54 },
  { label: "Pubert Office 3", value: 43 },
  { label: "Pubert Office 4", value: 61 },
  { label: "Pubert Office 5", value: 96 },
  { label: "Pubert Office 6", value: 46 },
  { label: "Pubert Office 7", value: 58 },
];

const OfficeDropDown = () => {


    return (
          <div className="container">
        <div className="row">
         
          <div className="drop">
            <Select options={options}/>
          </div>
         
        </div>
      </div>
    );

}

export default OfficeDropDown