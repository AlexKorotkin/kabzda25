import './App.css'
import {Accordion} from "./components/Accordion.tsx";
import {Rating, RatingValueType} from "./components/Rating.tsx";
import OneOff from "./components/OneOff.tsx";
import {UncontrolledAccordion} from "./components/UncontrolledAccordion.tsx";
import {UncontrolledRating} from "./components/UncontrolledRating.tsx";
import {useState} from "react";
import UncontrolledOneOff from "./components/UncontrolledOneOff.tsx";

function App() {
    const [ratingValue, setRatingValue] = useState<RatingValueType>(0);
    const [accordionCollapsed, setAccordionCollapsed] = useState<boolean>(false);
    const [on, setOn] = useState(false);
  return (
      <>
          <h3>This is App components</h3>
          <Rating ratingValue={ratingValue} setRatingValue={setRatingValue} />
          <UncontrolledRating/>
          <UncontrolledAccordion titleValue={"Menu"}/>
          <Accordion titleValue={"Users"} collapsed={accordionCollapsed} setAccordionCollapsed={setAccordionCollapsed}/>
          <OneOff on ={on} setOn ={setOn} />
          <UncontrolledOneOff/>
      </>
  )
}


export default App
