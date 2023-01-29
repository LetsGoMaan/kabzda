import React from 'react';
import './App.css';
import Accordion from "./components/Accordion/Accordion";
import {Rating} from "./components/Rating/Rating";
import {OnOff} from "./components/OnOff/OnOff";
import UncontrolledAccordion from "./components/UncontrolledAccordion/UncontrolledAccordion";
import {UncontrolledRating} from "./components/UncontrolledRating/UncontrolledRating";

function App() {
    return (
        <div>
            <PageTitle title ={"This is APP component"}/>
            <PageTitle title ={"My Friend"}/>
            Article 1
            <UncontrolledAccordion titleValue={"Menu"}  />
            <UncontrolledAccordion titleValue={"Users"} />
            Article 2
            <Rating value = {0}/>
            <UncontrolledRating/>
            <OnOff/>

        </div>

    );
}
 type PageTitlePropsType = {
    title: string
 }
function PageTitle(props: PageTitlePropsType) {
    return (
        <h1>{ props.title}</h1>


    )
}


export default App;
