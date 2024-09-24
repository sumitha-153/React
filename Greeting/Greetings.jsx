

function Greetings(props) {
    const {name}=props
    const style=
        {  border: '0.5px groove black',
            width: 'max-content',
            height: 'auto',
            padding: '10px',
            color:'Orange',
    }
    
    return(
        <>
        <fieldset style={{width:'200px'}}>
            <legend > Props Implementation</legend>
            <div id="greet" style={{style}}>Welcome to {name}!!!</div>
            </fieldset></>

    );
}

export default Greetings