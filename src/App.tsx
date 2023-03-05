import React, {useState} from 'react';
import './App.css';
import {RatingValueType} from "./components/Rating/Rating";
import {UncontrolledOnOff} from "./components/UncontrolledOnOff/UncontrolledOnOff";
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
            <UncontrolledOnOff />
            <OnOff on={on} setOn={setOn}/>

        </div>
    );
}

type PageTitlePropsType = {
    title: string
}

const PageTitle = React.memo(PageTitleMemo)


function PageTitleMemo(props: PageTitlePropsType) {
    return (
        <>

            <h1>{props.title}</h1>
        </>



    )
}


export default App;
