type OnOffType = {
    on: boolean
    setOn: (value: boolean) => void
}

export function OnOff(props: OnOffType) {

    const onStyle = {
        width: "30px",
        height: "30px",
        border: "1px solid black",
        display: "inline-block",
        padding: "2px",
        backgroundColor: props.on ? "green" : "white"
    };
    const offStyle = {
        width: "30px",
        height: "30px",
        border: "1px solid black",
        padding: "2px",
        marginLeft: "5px",
        display: "inline-block",
        backgroundColor: props.on ? "white" : "red"
    };
    const IndicatorStyle = {
        width: "10px",
        height: "10px",
        borderRadius: "5px",
        border: "1px solid black",
        marginLeft: "5px",
        display: "inline-block",
        backgroundColor: props.on ? "green" : "red"
    };

    return (
        <>

            <div>
                <div style={onStyle} onClick={() => {
                    props.setOn(!props.on)
                }}>On
                </div>
                <div style={offStyle} onClick={() => {
                    props.setOn(!props.on)
                }}>Off
                </div>
                <div style={IndicatorStyle}></div>
            </div>
        </>

    )
}

