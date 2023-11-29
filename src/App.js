
import './App.css';
import Navbar from './components/Navbar'
import Textform from './components/Textform';
import { useState } from 'react';
import Alert from './components/Alert';
import Footer from './components/Footer.js';


//Router

// import {  BrowserRouter as Router,  Route,Routes} from "react-router-dom";
// import About from './components/About';



function App() {
  
  //Theme
const [mode,setmode] =useState("light");
  
const toggletheme =()=>{
  if(mode==="light")
  {
    setmode("dark");
    document.body.style.backgroundColor='#192a43';
    document.body.style.color="white"
    document.getElementById("floatingTextarea").style.backgroundColor='#212529';
    document.getElementById("floatingTextarea").style.color='white';
    document.getElementById("floatingTextarea").style.border='4px white solid';

  }
  else
  {
    setmode("light");
    document.body.style.backgroundColor='white';
    document.body.style.color="black"
    document.getElementById("floatingTextarea").style.backgroundColor='white';
    document.getElementById("floatingTextarea").style.color='black';
    document.getElementById("floatingTextarea").style.border='4px black solid';

}  
}

  //Alert message
const [alertMsg,setalertMsg] = useState(null)

  const showMessage = (msg)=>{
        setalertMsg(msg)

        setTimeout(() => {
          setalertMsg(null);
        }, 1500);
  }

  return (
    <>
<Navbar n1="Home" mode={mode} toggletheme={toggletheme}/>
<Alert  alertMsg={alertMsg}/>
<div className="container my-3">
<Textform showMessage={showMessage}/>
</div>

<Footer className="Footer" style={{textalign: "center"}}></Footer>

{/* Routing part */}


{/* <Router>
<Navbar n1="Home" mode={mode} toggletheme={toggletheme}/>
<Alert  alertMsg={alertMsg}/>
<div className="container my-3">
<Routes>
            <Route exact path="/About" element={<About/>}>

            </Route>
          <Route exact path="/" element={<Textform showMessage={showMessage}/>
} >
          
          </Route>
</Routes>

</div>
</Router> */}

 
    

    </>
  );
}

export default App;
