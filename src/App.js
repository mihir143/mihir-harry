import React, { useState } from "react";
import "./App.css";
// import About from "./components/About";
import NavBar from "./components/NavBar";
import TextForms from "./components/TextForms";
import Alert from "./components/Alert";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  const [mode, setMode] = useState("light");
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  };

  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#07037f";
      showAlert("Dark mode has been enabled", "success");
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Light mode has been enabled", "success");
    }
  };

  return (
    <>
      {/* <Router> */}
      {/* <NavBar
          mode={mode}
          toggleMode={toggleMode}
          title="given Text Utils"
          aboutText="given About Text Utils1"
          Hometxt="given Hometxt1"
        /> */}
      <NavBar
        title="given Text Utils"
        mode={mode}
        toggleMode={toggleMode}
        Hometxt="given Hometxt1"
      />
      <Alert alert={alert} />
      <div className="container my-3">
        {/* <Routes>
            <Route exact path="/About" element={<About />}>
              {/* <About/> */}
        {/* </Route> */}
        {/* <Route
              exact
              path="/"
              element={ */}
        <TextForms
          showAlert={showAlert}
          mode={mode}
          heading="Enter The Text to analyze"
        />
        {/* }
            > */}
        {/* <TextForms
                showAlert={showAlert}
                mode={mode}
                heading="Enter The Text to analyze"
              /> */}
        {/* </Route> */}
        {/* <Route exact path="/">
              <Home />
            </Route> */}
        {/* </Routes> */}
      </div>
      {/* </Router> */}

      {/* <NavBar /> */}
    </>
  );
}

export default App;
