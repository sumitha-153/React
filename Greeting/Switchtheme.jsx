import { useState } from "react";

function Switchtheme() {
    const [theme,setTheme]=useState('Light')
    function HandleClick() {
        if(theme === 'Light'){
            setTheme("Dark")
        }else if(theme==='Dark'){
            setTheme("Light")
        }
    }
 
    
    return(
    <>
    <fieldset style={{width:'200px'}}>
        <legend>Switching theme</legend>
        <button onClick={HandleClick}>Switch theme</button> 
        <p>Current Theme: {theme}</p>
    </fieldset>

    
    </>
    );
}

export default Switchtheme