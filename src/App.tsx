import './App.css'
import {Accordion, ItemsType} from "./components/Accordion/Accordion";
import {Rating, RatingValueType} from "./components/Rating/Rating";
import OneOff from "./components/OneOff/OneOff";
import {UncontrolledAccordion} from "./components/UncontrolledAccordion/UncontrolledAccordion";
import {UncontrolledRating} from "./components/UncontrolledRating/UncontrolledRating";
import {useState} from "react";
import UncontrolledOneOff from "./components/UncontrolledOneOff/UncontrolledOneOff";
import UncontrolledInput from "./components/UncontrolledInput/UncontrolledInput";
import ControlledInput from "./components/ControlledInput/ControlledInput";
import ControlledCheckBox from "./components/ControlledCheckBox/ControlledCheckBox";
import ControlledSelect from "./components/ControlledSelect/ControlledSelect";
import Select, {citiesType} from "./components/Select/Select";
import ExampleReactMemo from "./components/ExampleReactMemo/ExampleReactMemo";
import ExampleUseMemo from "./components/ExampleUseMemo/ExampleUseMemo";
import HelpsToReactMemo from "./components/HelpsToReactMemo/HelpsToReactMemo";
import LikeUseCallback from "./components/LikeUseCallback/LikeUseCallback";

function App() {

    const [ratingValue, setRatingValue] = useState<RatingValueType>(0);
    const [accordionCollapsed, setAccordionCollapsed] = useState<boolean>(true);
    const [on, setOn] = useState(false);
    const [inputValue, setInputValue] = useState("");
    const [checked, setChecked] = useState(false);
    const [selected, setSelected] = useState<string|undefined>(undefined);
    const [selectValue, setSelectValue] = useState("6");

    const items: ItemsType[] = [
        {title: "Andrey", id:1},
        {title: "Vadim", id:2},
        {title: "Denis", id:3},
        {title: "Kirill", id:4}
    ];
    const cities: citiesType[] = [
        {title: "Brest", value:"1"},
        {title: "Mogilev", value:"6"},
        {title: "Minsk", value:"7"},
        {title: "Gomel", value:"3"}
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
          <Select value = {selectValue} setSelectValue={setSelectValue} items={cities} />
          <ExampleReactMemo/>
          <ExampleUseMemo/>
          <HelpsToReactMemo/>
          <LikeUseCallback/>
      </>
  )
}


export default App
