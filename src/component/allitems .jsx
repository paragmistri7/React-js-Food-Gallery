import React from 'react';

const Allitems  = ({item}) => {
    return (
        <div className="container">
            <div className="row d-flex justify-content-center">
              {item.map((curelem) => {
                const { id, image, name, link, price, decription } =
                  curelem;
                return (
                  <div key={id} className="col-4 p-4 text-light ">
                    <div className="row">
                      <div className="col-4 bg-dark p-0">
                        <img src={image} alt="" className="foodimage" />
                      </div>
                      <div className="col-8 bg-black p-2">
                        <h4>{name}</h4>
                        <p>{decription}</p>
                        <p>price = {price}</p>
                        <button
                          type="button"
                          className="btn btn-outline-success btn-sm float-end"
                                >
                                    <a className=' text-light text-decoration-none' href="https://www.dominos.co.in/">
                                        Order Now...
                                        </a>
                        </button>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
                  </div>
                  
    );
};

export default Allitems ;