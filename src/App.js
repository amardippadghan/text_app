import "./App.css";
import Forms from "./components/Forms";

import Navbar from "./components/Navbar";
import About from "./components/About";
import { useState } from "react";
import Alert from "./components/Alert";
import{
  
}

from function App() {
  const [mode, setmode] = useState("light");
  const [alert, setAlert] = useState(null);

  const showAlert = (massage, type) => {
    setAlert({
      massage: massage,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 2000);
  };

  const togglemode = () => {
    if (mode === "light") {
      setmode("dark");
      document.body.style.backgroundColor = "#0e122d";
      showAlert("the dark mode has been enabled ", "success");
      document.title = "text-util-darkmode";
    } else {
      setmode("light");
      document.body.style.backgroundColor = "white";
      showAlert("light mode has been enabled ", "success");
      document.title = "text-util-lightmode";
    }
  };

  return (
    <>
      <Navbar
        title="text-util"
        aboutText="about"
        mode={mode}
        togglemode={togglemode}
      />
      <Alert alert={alert} />

      <div className="container my-3">
        <Forms
          showAlert={showAlert}
          Heading="Enter the text to analyze"
          mode={mode}
        />
      </div>
    </>
  );
}

export default App;
