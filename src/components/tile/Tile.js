import React from "react";

export const Tile = ({description}) => {

  return (
    <div className="tile-container">
      <p className="title-title">{description[0].value}</p>
      {
        Object.values(description).map(
          ({value, index}) => (
           <p key={index} className="title"> {value}</p> 
          )
        )
      }
    </div>
  );
};