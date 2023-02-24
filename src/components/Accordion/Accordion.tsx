import React from "react";

type ItemType = {
    title: string
    value: any
}


type AccordionPropsType = {
    titleValue: string
    /**
     * YOYOYOYO
     */
    collapsed: boolean
    setAccordionCollapsed: (value: boolean) => void
    items: ItemType[]
    onClick: (value: any) => void
}
export function Accordion(props: AccordionPropsType) {
        return (
            <div>
                <AccordionTitle title = {props.titleValue} setAccordionCollapsed={props.setAccordionCollapsed} collapsed ={props.collapsed}/>
                {props.collapsed && <AccordionBody items={props.items} onClick={props.onClick}/>}
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

type AccordionBOdyPropsType = {
    items: ItemType[]
    onClick: (value: any) => void
}


function AccordionBody (props: AccordionBOdyPropsType) {
    console.log("AccordionBody rendering");
    return (
        <ul>{props.items.map((i, index)=> <li onClick={()=>props.onClick(i.value)} key = {index}>{i.title}</li>)}
        </ul>
    )
}
