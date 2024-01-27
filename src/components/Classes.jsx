import React from "react";
import { Panel } from "primereact/panel";
import "./Class.css";

function Classes({ onDataSelected }) {
  const handleClick = (selectedData) => {
    onDataSelected(selectedData);
  };
  return (
    <Panel header="Sınıf Seçiniz" className="pt-100 container">
      <div className="container">
        <div className="row justify-content-center">
          <div
            className="col-lg-3 col-md-6 col-sm-12"
            onClick={() => handleClick("11EA")}
          >
            <div className="card">
              <div className="overlay"></div>
              <div className="content">
                <h2>11 | EA</h2>
              </div>
              <div className="fav">
                <i className="far fa-heart"></i>
              </div>
            </div>
          </div>
          <div
            className="col-lg-3 col-md-6 col-sm-12"
            onClick={() => handleClick("11SAYA")}
          >
            <div className="card">
              <div className="overlay"></div>
              <div className="content">
                <h2>11 | SAY A</h2>
              </div>
              <div className="fav">
                <i className="far fa-heart"></i>
              </div>
            </div>
          </div>
          <div
            className="col-lg-3 col-md-6 col-sm-12"
            onClick={() => handleClick("11SAYB")}
          >
            <div className="card">
              <div className="overlay"></div>
              <div className="content">
                <h2>11 | SAY B</h2>
              </div>
              <div className="fav">
                <i className="far fa-heart"></i>
              </div>
            </div>
          </div>
        </div>
        <div className="row justify-content-center">
          <div
            className="col-lg-3 col-md-6 col-sm-12"
            onClick={() => handleClick("12EA")}
          >
            <div className="card">
              <div className="overlay"></div>
              <div className="content">
                <h2>12 | EA</h2>
              </div>
              <div className="fav">
                <i className="far fa-heart"></i>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 col-sm-12">
            <div className="card">
              <div className="overlay"></div>
              <div className="content">
                <h2>12 | SAY A</h2>
              </div>
              <div className="fav">
                <i className="far fa-heart"></i>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 col-sm-12">
            <div className="card">
              <div className="overlay"></div>
              <div className="content">
                <h2>12 | SAY B</h2>
              </div>
              <div className="fav">
                <i className="far fa-heart"></i>
              </div>
            </div>
          </div>
        </div>
        <div className="row justify-content-center">
          <div className="col-lg-3 col-md-6 col-sm-12">
            <div className="card">
              <div className="overlay"></div>
              <div className="content">
                <h2>M SAY | A</h2>
              </div>
              <div className="fav">
                <i className="far fa-heart"></i>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 col-sm-12">
            <div className="card">
              <div className="overlay"></div>
              <div className="content">
                <h2>M SAY | B</h2>
              </div>
              <div className="fav">
                <i className="far fa-heart"></i>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 col-sm-12">
            <div className="card">
              <div className="overlay"></div>
              <div className="content">
                <h2>M EA | A</h2>
              </div>
              <div className="fav">
                <i className="far fa-heart"></i>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 col-sm-12">
            <div className="card">
              <div className="overlay"></div>
              <div className="content">
                <h2>M EA | B</h2>
              </div>
              <div className="fav">
                <i className="far fa-heart"></i>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Panel>
  );
}

export default Classes;
