import React from "react";
import Fou from "../img/loading.gif";
import "./Loading.css"

const LoadingScreen = (props) => {
  return (
    <>
    <div className="woorupape" />
      <div className="fouGif">
        <img src={Fou} alt=""/>
      </div>
      <div className="numerito">
      {setTimeout(() => {
        props.setLoading(false);
      }, 2000)}
      </div>
    </>
  );
};

export default LoadingScreen;
