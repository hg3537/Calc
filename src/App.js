import { useState } from "react";
import Btn from "./Btns";


function App ()
{
  // "homepage": "https://hg3537.github.io/Calculator",
  const [ calc, setCalc ] = useState('');
  const [ result, setResult ] = useState('');
  const IntegerFormater = new Intl.NumberFormat('en-us', { maximumFractionDigits: 0 });
  const FormatOperand = (operand) =>
  {
    if (operand == null) return '';
    const [ integer, decimal ] = operand.split('.');
    if (decimal == null) return IntegerFormater.format(integer);
    return `${IntegerFormater.format(integer)}.${decimal}`;
  };
  const ops = [ '+', '-', '*', '/', '.' ];
  function upDateResult (value)
  {
    if (
      ops.includes(value) && calc === '' ||
      ops.includes(value) && ops.includes(calc.slice(-1))
    )
    {
      return;
    }
    setCalc(calc + value);
    if (!ops.includes(value)) {
      setResult(eval(calc + value).toString())
    }
  }
  function EqualOperation ()
  {
    if (calc === '' || ops.includes(calc.slice(-1)))
    {
      return;
    }
    setCalc( FormatOperand (eval(calc).toString()))


  }
  function DeleatAll ()
  {
    
   
    setCalc('')
  }
  function DeleatLast() {
    const value = calc.slice(0, -1)
    setCalc(value)
  }
  return (
    <div className="App ">
      <div className="container">
        <h1 className="my-3 text-light fw-bold">calc</h1>
        <div className="output">{ calc|| '0'}</div>
        <div className="container box py-3 my-3">
          <div className="d-flex">
            <Btn Nmb='1' handlerClick={ upDateResult } />
            <Btn Nmb='2' handlerClick={ upDateResult } />
            <Btn Nmb='3' handlerClick={ upDateResult } />
            <button className="btn btn-danger m-2 px-4 py-2 w-25" onClick={DeleatLast}>DEL</button>
          </div>
          <div className="d-flex">
            <Btn Nmb='4' handlerClick={ upDateResult } />
            <Btn Nmb='5' handlerClick={ upDateResult } />
            <Btn Nmb='6' handlerClick={ upDateResult } />
            <Btn Nmb='+' handlerClick={ upDateResult } />
          </div>
          <div className="d-flex">
            <Btn Nmb='7' handlerClick={ upDateResult } />
            <Btn Nmb='8' handlerClick={ upDateResult } />
            <Btn Nmb='9' handlerClick={ upDateResult } />
            <Btn Nmb='-' handlerClick={ upDateResult } />
          </div>
          <div className="d-flex">
            <Btn Nmb='0' handlerClick={ upDateResult } />
            {/* <Btn Nmb='/' handlerClick={ upDateResult } /> */}
            {/* <Btn Nmb='*' handlerClick={ upDateResult } /> */}
            <button className="btn btn-light m-2 px-4 py-2 w-25" value='*' onClick={ () => upDateResult('*') }>x</button>
            <button className="btn btn-light m-2 px-4 py-2 w-25" value='/' onClick={ () => upDateResult('/') }>÷</button>
            <Btn Nmb='.' handlerClick={ upDateResult } />
          </div>
          <div className="d-flex">
            <button className="btn btn-light m-2 px-4 py-2 w-50" onClick={DeleatAll}>AC</button>
            <button className="btn btn-light m-2 px-4 py-2 w-50" onClick={EqualOperation}>=</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
