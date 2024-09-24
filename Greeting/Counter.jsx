import { useState } from "react"

function Counter() {
    let [count,setCount]=useState(0)

    function HandleClick() {
        count=count+1;
        setCount(count) 
    }
    return(
        <>
        <fieldset style={{width:'200px'}}>
            <legend>Counter</legend>
            <button onClick={HandleClick}>Increment</button>
            <p>Counter: {count}</p>
        </fieldset>

        </>
    )
    
}
export default Counter