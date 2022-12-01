import { useState } from "react";
import "./App.css";
import About from "./components/About"
import Navbar from "./components/Navbar"
import TextForm from "./components/TextForm"
import Alert from "./components/Alert"
// Write about react router in your notebook 
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

function App() {
  // giving a state for alert message that is null
  const [Alertmsg, setAlertmsg] = useState(null)
  // Making a function in which returning the setalertmsg a object,whose values are being provided in different areas
  const showalertmsg = (message, type) => {
    setAlertmsg({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlertmsg(null);
    }, 1500);
  }
  // Made a state to set the navbar mode dark or light(As light and dark are used in bootstrap to set color)
  const [mode, setmode] = useState("light")
  // Made a function to change in dark or light mode when we click
  const togglemodes = () => {
    if (mode === 'light') {
      setmode("dark")
      document.body.style.background = "#212529"
      document.title = "TTM - Dark mode"
      // This is the function call with the object value of setAlertmsg
      showalertmsg("Dark mode has been enabled", "success")
    } else {
      setmode("light")
      document.body.style.background = "white"
      document.title = "TTM - Light mode"
      showalertmsg("Light mode has been enabled", "success")
    }
  }
  const redmode = () => {
    if (mode === 'light') {
      setmode("danger")
      document.body.style.background = "#AA4A44"
      // This is the function call with the object value of setAlertmsg
      showalertmsg("Red mode has been enabled", "success")
    } else {
      setmode("light")
      document.body.style.background = "white"
      showalertmsg("Red mode has been Disabled", "success")
    }
  }

  // Here we return only the component which is defined in other place
  return (
    <>
    <BrowserRouter>
      {/* Used mode and enable to set props and inside that one is state given above and one is logic(function) in which the state is being changed */}
      <Navbar title="TheTextMagic" mode={mode} Enable={togglemodes} redred={redmode} />
      <Alert Alertmsg={Alertmsg} />

        
          <Routes>
             <Route exact path="/" element={<TextForm heading="Please fill up the form" mode={mode} Show={showalertmsg}/>}></Route>
            <Route exact path="/about" element={<About mode={mode}/>}></Route>
          </Routes>
        
        {/* Same mode is used for text form to change the color of texts */}
      </BrowserRouter>
    </>
  );
}

export default App;


