import React from "react";
import { Tile } from "../tile/Tile";

export const TileList = ({tiles}) => {

  return (
    <div>
      {tiles.map((tile, index)=>(
         <Tile tile={tile} key={index} description={...rest}/>
      )  
      )}
      
    </div>
  );
};