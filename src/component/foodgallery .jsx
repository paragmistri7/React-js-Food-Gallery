import React, { useState } from "react";
import { Menu } from "./Menu ";
import "../App.css";
import Allitems from "./allitems ";
import Selection from "./selection ";

const Foodgallery = () => {
  const [item, setitem] = useState(Menu);

  const finditem = (find) => {
    console.log(find);
    const senditem = Menu.filter((val) => {
      return find === val.category;
    });
    setitem(senditem);

    if (find === "all") {
      setitem(Menu);
      return;
    }
  };

  return (
    <>
      <div className="container">
        <div className="row">
          <header className="text-center m-3">
            <h1 className="text-success">Food - gallery</h1>
          </header>

          <Selection finditem={finditem} setitem={setitem} />

          <Allitems item={item} />
        </div>
      </div>
    </>
  );
};

export default Foodgallery;
