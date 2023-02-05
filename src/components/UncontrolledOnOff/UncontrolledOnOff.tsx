import {useState} from "react";

type OnOffType = {
    onChange:(on: boolean) => void
}
export function UncontrolledOnOff(props: OnOffType ) {

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

    const onClicked = () => {
        setOn(true)
        props.onChange(true)
    }

    const offClicked = () => {
        setOn(true)
        props.onChange(true)
    }

    return (

        <div>
            <div style={onStyle}  onClick={onClicked}>On</div>
            <div style={offStyle} onClick={offClicked}>Off</div>
            <div style={IndicatorStyle}></div>
        </div>
    )
}

