import { useState } from 'react'
import "./index.css";
import { ChangeUserName } from './assets/ChangeUserName'
import { FriendsArray } from './assets/FriendsArray'
import { StyleUsingTailwind } from './StyleUsingTailwind';

// react icons from react-icons library
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { ChangeObjects, ChangeValuesInObjects } from './assets/ChangeObjects';

// Inline styling, not the best way to style

// Inline styling 
// function App() {
//   return (
//     <>
//     <h1 style={{color: "white", backgroundColor: "black"}}>Hello World</h1>
//     </>
//   )
// }

// Inline styling using variables
// function App(){
//   const differentStyles = {color: "green", backgroundColor: "black"}
//   return (
//     <>
//     <h1 style={differentStyles}>Inline Styling</h1>
//     </>
//   )
// }



 function App () {
  return (
    <>
    <h1>Separate style using css file.</h1>
    <StyleUsingTailwind />
    <FaGithub className='text-5xl m-2' />
    <FaLinkedin className='text-3xl m-4' />

  <h1>Change State in react</h1>
  <ChangeUserName />
  
  <h1>Change arrays in React</h1>
  <FriendsArray />
  <br />
  <br />

  <h1>Change Objects in React</h1>
  <ChangeObjects /> 
  <ChangeValuesInObjects />
    </>
  )
}


export default App
