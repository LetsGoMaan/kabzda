import React from 'react';
import './App.css';
import Accordion from "./components/Accordion";
import {Rating} from "./components/Rating";
import {OnOff} from "./components/OnOff/OnOff";

function App() {
    return (
        <div>
            <PageTitle title ={"This is APP component"}/>
            <PageTitle title ={"My Friend"}/>
            Article 1
            <Rating value = {3}/>
            <Accordion titleValue={"Menu"}  collapsed={true}/>
            <Accordion titleValue={"Users"} collapsed={false}/>
            Article 2
            <Rating value = {0}/>
            <Rating value = {1}/>
            <Rating value = {2}/>
            <Rating value = {3}/>
            <Rating value = {4}/>
            <Rating value = {5}/>
            <OnOff selected = {true}/>
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
