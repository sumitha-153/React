
// import { useState } from 'react';
import { useState } from 'react';
import './App.css';
import {  Greetings, Propslist,Logsinput,Counter,DisplayInput,Switchtheme,Option,Fetchdata,} from './Greeting'
import { Number, Table, UserList,ChildElement,BooleanProps,Reference,Context} from './Props' 



function App() {
  const name="Kovan labs"
  const list=["Apple","Orange","Grapes","Lemon"]
  const [display,setDisplay]=useState('none')
  const user=["xyz","abc","klm"]
  const object=
    { Name:"Sumitha",
      Age:"20",
      Place:"Coimbatore",
      Occupation:"developer"
    }
  const values=Object.values(object)
  const key=Object.keys(object)

  const number=99.99
  let flag=false 

  function HandleToggle() {
    setDisplay('block')

  }
  function HandleDoubleClick() {
    setDisplay('none')
  }
  return (
    <>
    <fieldset style={{width:'950px'}}>

      <legend>Basics</legend>
      <div style={{display:'flex', flexDirection:'row', gap:'30px'}}>
      <h1>Hello, World!</h1>

      <Greetings name={name}/> <br/>  

      <p>List Implementation</p>

      <ul>{
         list.map((element,index)=><li key={index}><Propslist element={element}/></li>)
        }</ul>

        <div className='toggle' style={{display:display}}>This paragraph is to represent Toggle ON and OFF</div> <br/>
        

        <button style={{width:'auto',height:'50px',background:'blue',border:'0px',color:'white',borderRadius:'5px'}}  onClick={HandleToggle} onDoubleClick={HandleDoubleClick} onFocus={HandleDoubleClick}>Click here!!</button>
        </div>
    </fieldset>
    
    <br/>
      
        <fieldset style={{width:'800px'}}>
        <div style={{display:'flex', flexDirection:'row', gap:'30px',flexWrap:'wrap'}}>

        <Logsinput/> <br/>

        <Counter/><br/>

        <DisplayInput /><br/>

        <Switchtheme />

        <Option />

        </div>

        </fieldset>
        

        <br/>

        <ul>
          {
            user.map((element,index)=>(
              <li key={index}><UserList element={element}/></li>
            )
            )
          }
        </ul>

        <table style={{border:'0.5px groove black'}}>
          <tbody>
          {
            key.map((element,index)=>(
              <tr key={index}>
                <th style={{ border: '1px solid black', padding: '8px'}}><Table element={element}/></th>
                <td style={{ border: '1px solid black', padding: '8px'}}><Table values={values[index]}/></td>
              </tr>
            ))
          }
          </tbody>
        </table>

         <br/>

         <fieldset>
          <legend>Hooks</legend>
          <div style={{display:'flex', flexDirection:'row', gap:'30px',flexWrap:'wrap'}}>
            
        <Number number={number}/> <br></br>

        <ChildElement>
          <p>This is child element</p>
        </ChildElement>

        {flag ? (<BooleanProps msg={'online'}/>): (<BooleanProps  msg={'Offline'}/>) }

        <Reference/>

        <Context  name={'Kovan labs'} />

          </div>
         </fieldset>


        
    </>
    
  );
}

export default App;
