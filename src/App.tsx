import React, {useState} from 'react';
import './App.css';
import {Rating, RatingValueType} from "./components/Rating/Rating";
import {UncontrolledOnOff} from "./components/UncontrolledOnOff/UncontrolledOnOff";
import UncontrolledAccordion from "./components/UncontrolledAccordion/UncontrolledAccordion";
import {UncontrolledRating} from "./components/UncontrolledRating/UncontrolledRating";
import Accordion from "./components/Accordion/Accordion";
import {OnOff} from "./components/OnOff/OnOff";

function App() {

    const [ratingValue, setRatingValue] = useState<RatingValueType>(0)
    const [accordionCollapsed, setAccordionCollapsed] = useState<boolean>(true)
    const [on, setOn] = useState<boolean>(false)


    return (
        <div className={"app"}>
            <PageTitle title={"Kabzda kak prosto"}/>
            {/*<UncontrolledAccordion titleValue={"Menu"}/>*/}
            {/*<Accordion titleValue={"Users"} collapsed={accordionCollapsed} setAccordionCollapsed={setAccordionCollapsed}/>*/}
            {/*<Rating value={ratingValue} onClick={setRatingValue}/>*/}
            {/*<UncontrolledRating/>*/}
            <UncontrolledOnOff onChange={setOn}/> {on.toString()}
            {/*<OnOff on={on} setOn={setOn}/>*/}
        </div>
    );
}

type PageTitlePropsType = {
    title: string
}

function PageTitle(props: PageTitlePropsType) {
    return (
        <h1>{props.title}</h1>


    )
}


export default App;
