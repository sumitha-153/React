import { useState } from "react";



function Logsinput(){
    const [input,setInput]=useState('')

    function HandleInput() {
        if(input!=='')
        console.log(input); 
        else 
        alert("Please enter an input")      
    }
   
    
    return(
        <>
        <fieldset style={{width:'200px'}}>
            <legend>Logs the input</legend>
            <input type="text"
            placeholder="Enter your input here!!"
            value={input}
            name="textinput"
            onChange={(e)=>setInput(e.target.value)}/>       
            <br/>  <br/> 
            <button onClick={HandleInput} style={{}} >Logs Input</button>


        </fieldset>
       
        </>

    );
}

export default Logsinput