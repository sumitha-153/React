import { useState } from "react";

function Option(){
    const [option, setOption]=useState('')

    return(
        <>
        <fieldset style={{width:'200px'}}>
            <legend>Option</legend>
            <select name="input" id="opt" value={option} onChange={(e)=>setOption(e.target.value)}>
                <option value="">Select the option</option>
                <option value='Option1'>Option1</option>
                <option value='Option2'>Option2</option>
            </select>
            <p>Selected : {option}</p>
        </fieldset>
        </>


    );
}

export default Option