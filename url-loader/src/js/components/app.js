import React, { useState } from "react";
import db from "../../db.json";
import Loader from "./loader";
import logo from "../../images/platzi.png";
import video from "../../video/que-es-core.mp4";

const App = () => {
  const [loaderList, setLoaderList] = useState([]);

  function handleShow() {
    setLoaderList(db.loaders);
  }

  function handleHide() {
    setLoaderList([]);
  }

  return (
    <React.Fragment>
      <p>
        Webpack is awesome to bundle different types of files into a JS file.
      </p>
      <video src={video} width={360} controls poster={logo}></video>
      <p>
        <img src={logo} alt="logo" width={40} />
      </p>
      <ul>
        {loaderList.map(item => (
          <Loader {...item} key={item.id} />
        ))}
      </ul>
      <button onClick={handleShow}>Show loaders</button>
      <button onClick={handleHide}>Hide loaders</button>
    </React.Fragment>
  );
};

export default App;
