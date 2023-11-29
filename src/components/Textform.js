import React from 'react'
import { useState } from 'react';

export default function Textform(props) {

    const [text, settext] =useState('');
 

    const Upper =()=>{
      //Calling the function in App.js using props
      if(text==="")
      {
        alert("Enter Valid text first")
        
      }
      else{
          {props.showMessage("Text has been Capitalized")}
        
        const str=text.toUpperCase();
        settext(str)
        }
    }

    const Lower =()=>{
      
      if(text==="")
      {
        alert("Enter Valid text first")    
      }
      else
      {
      {props.showMessage("Converted to Lower Case ")}
      let new_text=text.toLowerCase();
      settext(new_text)
      }
    }

    const clear=()=>{

      alert("Are you sure ,You want to Clear the Text")
      settext('')
    }



    const handleonchange=(event)=>{
        settext(event.target.value)
    }

    
  

   
    //Copy to ClipBoard

    const handleCopy=()=>{
      // alert("Text Copied")
      props.showMessage("Copied to Clipboard")
      let new_text=document.getElementById("floatingTextarea")
      new_text.select();
      navigator.clipboard.writeText(new_text.value)

    }


    //Remove Extra spaces

    const handleExtraSpaces=()=>{
      if(text===""){
        alert("Enter the text first")
      }
      else{
      props.showMessage("Extra Spaces has been removed")
      let ourNew_text=text.split(/[ ]+/);
      settext(ourNew_text.join(" "))
      }

    }
    let text_theme={
      height:"150px",
      outerHeight:"60px",
      border:"4px black solid",
    
    }

  return (
    <div>
      
      <div className="form-floating">

    {/* TextArea */}

  <textarea name="floatingTextarea" className="form-control" placeholder="Enter here" id="floatingTextarea"  value={text} onChange={handleonchange} style={text_theme}></textarea>
  <label htmlFor="floatingTextarea" >Add text here</label>
  <div className="container">
    <p>Words are {text===""? 0:text.split(" ").length} and {text.length} character</p>
  </div>



</div>
<div className="bt">
<button type="button" className="btn btn-outline-success" onClick={Upper} >CAPITALIZE</button>
<button type="button" className="btn btn-outline-success" onClick={Lower}>LowerCase</button>
<button type="button" className="btn btn-outline-danger" onClick={clear}>Clear</button>
<button type="button" className="btn btn-info" onClick={handleCopy}>Copy</button>
<button type="button" className="btn btn-outline-info my-3" onClick={handleExtraSpaces}>Remove EX-Spaces</button>
</div>


    </div>
  )
}
