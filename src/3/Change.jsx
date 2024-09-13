import React, { useState } from 'react';

function Change() {

  const [amount, setAmount] = useState("");
  const [change, setChange] = useState(true);

  const onChange = (event) => {
    setAmount(event.target.value);
  }

  const onClick = () => {
    setChange((current) => !current);
    setAmount("");
  }

  return (
    <div>
      <div>
        <input id='m' value={change ? amount : Math.round(amount * 60)} type="number" onChange={onChange} disabled={!change}/>
        <label htmlFor="m">분</label>
      </div>
      <div>
        <input id='h' value={!change ? amount : Math.round(amount / 60)} type="number" onChange={onChange} disabled={change}/>
        <label htmlFor="h">시간</label>
      </div>

      <button value={change} onClick={onClick}>버튼</button>
    </div>
  );
}

export default Change;