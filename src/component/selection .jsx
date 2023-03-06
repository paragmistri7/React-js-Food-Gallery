import { Menu } from "./Menu ";
import React, { useState } from "react";

const Selection = ({ finditem }) => {


  const select = [
    ...new Set(
      Menu.map((val) => {
        return val.category;
      })
    ),"all"
  ];

  console.log(select);

  return (
    <div className="container">
      <div className="row d-flex justify-align-content-between   m-3">
        {select.map((val , index) => {
          return (
            <div key={index} className="col-2">
              <button  type="button"
                          className="btn btn-outline-success float-end" onClick={() => finditem(val)}> {val} </button>
            </div>
          );
        })}

        {/* <div className="col-2">
                <button onClick={() => finditem("breakfast")}>breakfast</button>
              </div>
              <div className="col-2">
                <button onClick={() => finditem("lunch")}>lunch</button>
              </div>
              <div className="col-2">
                <button onClick={() => finditem("dinner")}>dinner</button>
              </div>
              <div className="col-2">
                <button onClick={() => finditem("evening")}>evening</button>
              </div>
              <div className="col-2">
                <button onClick={() => finditem("all")}>all</button>
                </div> */}
      </div>
    </div>
  );
};

export default Selection;
