import React from "react";

type AccordionPropsType = {
    titleValue: string
    /**
     * YOYOYOYO
     */
    collapsed: boolean
    setAccordionCollapsed: (value: boolean) => void
}
export function Accordion(props: AccordionPropsType) {
        return (
            <div>
                <AccordionTitle title = {props.titleValue} setAccordionCollapsed={props.setAccordionCollapsed} collapsed ={props.collapsed}/>
                {props.collapsed && <AccordionBody/>}
            </div>
        )
    }


type AccordionTitlePropsType = {
    title: string
    collapsed: boolean
    setAccordionCollapsed: (value: boolean) => void
}
function AccordionTitle (props: AccordionTitlePropsType) {
    console.log("AccordionTitle rendering");
    return (
        <h3 onClick={() => props.setAccordionCollapsed(!props.collapsed)}>{props.title}</h3>
    )
}

function AccordionBody () {
    console.log("AccordionBody rendering");
    return (
        <ul>
            <li>1</li>
            <li>2</li>
            <li>3</li>
        </ul>
    )
}
