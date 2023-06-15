import { React, useEffect, useState } from 'react';
import './App.css';
import { Route,Routes } from 'react-router-dom';
// import Navigation  from './config/navigation';
// import MatchDetail  from './config/matchDetail';
// import ODI from "./config/odi"
// import Home from "./config/home"
import Soccer from "./components/soccer"

function App() {
  

  return (
    <>
<h1 style={{textAlign:"center"}}>Soccer Api</h1>
    <Soccer/>
  {/* <Routes >
<Route path='/' element={<Home/>}>

</Route>

<Route path='/navigation' element={<Navigation/>}>

</Route>

<Route path='/matchDetail/:id' element={<MatchDetail/>}>

</Route>


<Route path='/odi' element={<ODI/>}>

</Route>
</Routes> */}
 
    </>
  );
}

export default App;
