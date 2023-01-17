type OnOffType = {
    selected: boolean
}
export function OnOff(props: OnOffType ) {
    return (
        <>
            <span><button>On</button></span>
            <span><button>Off</button></span>
            <span><svg height="100" width="100">
                <circle cx="50" cy="50" r="40" stroke="black" stroke-width="3" fill="red"/>
            </svg></span>

        </>
    )
}