import './App.css'
import {Accordion, ItemsType} from "./components/Accordion/Accordion.tsx";
import {Rating, RatingValueType} from "./components/Rating/Rating.tsx";
import OneOff from "./components/OneOff/OneOff.tsx";
import {UncontrolledAccordion} from "./components/UncontrolledAccordion/UncontrolledAccordion.tsx";
import {UncontrolledRating} from "./components/UncontrolledRating/UncontrolledRating.tsx";
import {useState} from "react";
import UncontrolledOneOff from "./components/UncontrolledOneOff/UncontrolledOneOff.tsx";
import UncontrolledInput from "./components/UncontrolledInput/UncontrolledInput.tsx";
import ControlledInput from "./components/ControlledInput/ControlledInput.tsx";
import ControlledCheckBox from "./components/ControlledCheckBox/ControlledCheckBox.tsx";
import ControlledSelect from "./components/ControlledSelect/ControlledSelect.tsx";
import Select from "./components/Select/Select.tsx";

function App() {

    const [ratingValue, setRatingValue] = useState<RatingValueType>(0);
    const [accordionCollapsed, setAccordionCollapsed] = useState<boolean>(false);
    const [on, setOn] = useState(false);
    const [inputValue, setInputValue] = useState("");
    const [checked, setChecked] = useState(false);
    const [selected, setSelected] = useState<string|undefined>(undefined);


    const items: ItemsType[] = [
        {title: "Andrey", id:1},
        {title: "Vadim", id:2},
        {title: "Denis", id:3},
        {title: "Kirill", id:4}
    ];

  return (
      <>
          <h3>This is App components</h3>
          <Rating ratingValue={ratingValue} setRatingValue={setRatingValue} />
          <UncontrolledRating/>
          <UncontrolledAccordion titleValue={"Menu"}/>
          <Accordion titleValue={"Users"}
                     collapsed={accordionCollapsed}
                     setAccordionCollapsed={setAccordionCollapsed}
                     items={items}
          />
          <OneOff on={on} setOn ={setOn} />
          <UncontrolledOneOff/>
          <UncontrolledInput/>
          <ControlledInput inputValue={inputValue} setInputValue={setInputValue}/>
          <ControlledCheckBox checked={checked} setChecked={setChecked}/>
          <ControlledSelect selected={selected} setSelected={setSelected}/>
          <Select items={items} onChange={} />
      </>
  )
}


export default App
