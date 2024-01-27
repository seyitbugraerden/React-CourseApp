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
            onClick={() => handleClick("onbirea")}
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
            onClick={() => handleClick("onbirsaya")}
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
            onClick={() => handleClick("onbirsayb")}
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
            onClick={() => handleClick("onikiea")}
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
          <div
            className="col-lg-3 col-md-6 col-sm-12"
            onClick={() => handleClick("onikisaya")}
          >
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
          <div
            className="col-lg-3 col-md-6 col-sm-12"
            onClick={() => handleClick("onikisayb")}
          >
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
          <div
            className="col-lg-3 col-md-6 col-sm-12"
            onClick={() => handleClick("msaya")}
          >
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
          <div
            className="col-lg-3 col-md-6 col-sm-12"
            onClick={() => handleClick("msayb")}
          >
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
          <div
            className="col-lg-3 col-md-6 col-sm-12"
            onClick={() => handleClick("meaa")}
          >
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
          <div
            className="col-lg-3 col-md-6 col-sm-12"
            onClick={() => handleClick("meaa")}
          >
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
