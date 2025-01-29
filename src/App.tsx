import './App.css'
import {Accordion} from "./components/Accordion.tsx";
import {Rating} from "./components/Rating.tsx";

function App() {

  return (
      <>
      <h1>This is App components</h1>
        <Rating />
        <Rating />
        <Accordion titleValue= {"Menu"} collapsed = {true}  />
        <Accordion titleValue= {"Users"} collapsed = {false} />
      </>
  )
}


export default App
