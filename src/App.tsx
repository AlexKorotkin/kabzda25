import './App.css'
import {Accordion} from "./components/Accordion.tsx";
import {Rating} from "./components/Rating.tsx";
import OneOff from "./components/OneOff.tsx";
import {useState} from "react";

function App() {

  return (
      <>
      <h3>This is App components</h3>
        <Rating value={3} />
        <Rating value={5} />
        <Accordion titleValue= {"Menu"} collapsed = {true}  />
        <Accordion titleValue= {"Users"} collapsed = {false} />
          <OneOff/>
      </>
  )
}


export default App
