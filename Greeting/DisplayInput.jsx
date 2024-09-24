import { useState } from "react";


function DisplayInput() {
    
    const [input,setInput]=useState('')
    return(
        <>
        <fieldset style={{width:'200px'}}>
            <legend>Displaying input</legend>
            <input 
            name="input"
            value={input}
            type="text"
            placeholder="Type Something...." onChange={(e)=>setInput(e.target.value)}></input>
            <p>Typed Text:{input}</p>

        </fieldset>

        </>
    )
}

export default DisplayInput