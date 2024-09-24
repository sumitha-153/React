import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter, Routes, Route,Navigate,Outlet } from "react-router-dom";
import {  Greetings,Fetchdata,} from './Greeting'
// import { Number, Table, UserList,ChildElement,BooleanProps,Reference,Context} from './Props'
import FirstPage from './Routing/FirstPage'
import Login from './Login/login';

function Notfound() {
    
    return (
        <>
        <h1 style={{color:'red', textAlign:'center', fontSize:'45px'}}>404 <br/> Page not found</h1>
        </>
    );
}

const Protected= ({isAuthenticated})=>{

    return ( isAuthenticated ? <h1>You are Logged in....</h1> : <h1>Redirecting to Login page...</h1>)
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <BrowserRouter>
     <Routes>
        
        <Route  path='/' element={<App/>}></Route>
        <Route path="data" element={<Fetchdata/>}></Route>
        <Route path="Greet" element={<Greetings/>}></Route>
        <Route path="first" element={<FirstPage/>}></Route>
        <Route path="authentication" element={<Protected isAuthenticated={false}/>}></Route>
        <Route path="login" element={<Login/>}></Route>
        <Route path='*' element={<Notfound />}></Route>
     </Routes>
    </BrowserRouter>
);

