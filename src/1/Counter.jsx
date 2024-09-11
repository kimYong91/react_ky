import React from "react";

function Counter() {
    const [count, setCount] = React.useState(0);
    const onClick = () => {
        setCount(count + 1);
    }
    return(
        <div>
            <h1>카운트 : {count}</h1>
            <button onClick={onClick}>버튼</button>
        </div>
    );
}

export default Counter;