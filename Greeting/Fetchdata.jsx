import { useEffect, useState } from "react";
import './Allfile.css'

function Fetchdata() {
    const [data,setData]=useState([]) 
  

    useEffect(()=>{
    const Data= async () => { 
        try {
            const response= await fetch('https://jsonplaceholder.typicode.com/users')
            
            if(!response.ok){
                throw new Error("Cannot fetch the Data");
            }else
            {
                const responsedata= await response.json()
                setData(responsedata)
                console.log(responsedata);
                
           }
            
        } catch (error) {
            console.log(error);         
        }   
                
    }
        Data()
    },[])

    if(data.length>=0){
        
        return(
            <>
            <div   style={{display:'flex', gap:'30px',flexWrap:'wrap'}}>
              {data.map((element) => {
               
                   let keyarray=Object.keys(element)
                   let valuearray=Object.values(element)
   
                   return(
                       <div className='container' > <strong>User Details</strong>
                       {
                           keyarray.map((item,index)=>{
                           return (index!==4 && index!==7)  ?
                               (<div key={index}>{item}: {valuearray[index]}</div>):
                               (<div></div>)
                           })
                       }
                     </div>  
                    );
               
                  })}
                 </div>
           </>
        );
       
      
    }    
}

export default Fetchdata


    // return(
    //     <>
    //     {data.length > 0 ? (<div>
    //         {data.map((item, index) => {
    //             return (<div key={index}>
    //                 {item.name}
    //             </div>)
    //         })}
    //     </div>) : (<div>No Results.</div>)}
    //      </>
         

    // );
 
    