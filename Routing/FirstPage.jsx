import { Link } from "react-router-dom";


function FirstPage() {
    
    return(
        <>
        <div>
            <Link to="/data">Fetchdata</Link> <br></br>
            <Link to="/greet">Greet Message</Link>
        </div>

        </>
    );
}

export default FirstPage