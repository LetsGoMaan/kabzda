import {useState} from "react";

type OnOffType = {
    // selected: boolean
}
export function OnOff(props: OnOffType ) {

    let [on, setOn] = useState(false)

    const onStyle = {
        width: "30px",
        height: "30px",
        border: "1px solid black",
        display: "inline-block",
        padding: "2px",
        backgroundColor: on ? "green" : "white"
    };
    const offStyle = {
        width: "30px",
        height: "30px",
        border: "1px solid black",
        padding: "2px",
        marginLeft: "5px",
        display: "inline-block",
        backgroundColor: on ? "white" : "red"
    };
    const IndicatorStyle = {
        width: "10px",
        height: "10px",
        borderRadius: "5px",
        border: "1px solid black",
        marginLeft: "5px",
        display: "inline-block",
        backgroundColor: on ? "green" : "red"
    };

    return (

        <div>
            <div style={onStyle} onClick={()=> {setOn(true)}}>On</div>
            <div style={offStyle} onClick={()=> {setOn(false)}}>Off</div>
            <div style={IndicatorStyle}></div>
        </div>
    )
}