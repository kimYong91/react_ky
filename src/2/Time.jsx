import React from "react";

function Time() {
    const [minutes, setMinutes] = React.useState();
    const onChange = (event) => {
        setMinutes(event.target.value)
    }
    return(
        <div>
            <input value={minutes} onChange={onChange} placeholder="Minutes" type="number" />
            <h1>minutes : {minutes}</h1>
        </div>
    );
}

export default Time;