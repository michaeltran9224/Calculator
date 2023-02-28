import './App.css';
import React, { useState } from 'react'
import {Row} from 'react-bootstrap'

const Button = (props) => {
  const { value, handleClick } = props

  return (
    <button onClick={() => handleClick(value)} className = "button-style">
      {value}
    </button>
  )
}


function App() {

  const [operation, setOperation] = useState('')
  const [firstValue, setFirstValue] = useState('0')
  const [secondValue, setSecondValue] = useState('0')
  const [result, setResult] = useState('')

  const addValue = (number) =>{
    if(result!==''){
      clearAll()
      setFirstValue(number)
      return
    }
    
    if(operation===''){
      addFirstValue(number)
    }
    else{
      addSecondValue(number)
    }
  }

  const addFirstValue = (number) =>{
    if(firstValue=== '0') {
      setFirstValue(number)
    }
    else{
      setFirstValue(firstValue+number)
    }
  }
  const addSecondValue = (number) => {
    if(secondValue === '0'){
      setSecondValue(number)
    }
    else{
      setSecondValue(secondValue+number)
    }
  }
  const clearAll = () => {
    setFirstValue('0')
    setSecondValue('0')
    setOperation('')
    setResult('')
  }

  const setOp = (op) => {
    if(result !== ''){
      setFirstValue(result)
      setSecondValue('0')
      setResult('')
    }

    if(result==='undefined'){
      clearAll()
    }
    setOperation(op)
  }

  const calculate = () => {
    switch (operation) {
      case '+':
        setResult(String(Number(firstValue)+Number(secondValue)))
        break;
      case '-':
        setResult(String(Number(firstValue)-Number(secondValue)))
        break;
      case '/':
        if(secondValue==='0'){
          setResult('Undefined')
        }
        else{
          setResult(String(Number(firstValue)/Number(secondValue)))
        }
        break;
      case '*':
        setResult(String(Number(firstValue)*Number(secondValue)))
        setFirstValue(String(Number(firstValue)*Number(secondValue)))
        break;
      default:
        console.log('wee')

    }
  }

  console.log("firstval: ", firstValue)
  console.log("secval: ", secondValue)
  console.log("operatval: ", operation)
  console.log("result: ", result)
  return (
    <div>
      <Row className='display-style'>
        {firstValue} {operation} {(operation !== '') ? secondValue : ''} {(result !== '') ? '= ' + result : ''}
      </Row>
      <Row>
         <Button value='7' handleClick={addValue} />
         <Button value='8' handleClick={addValue} />
          <Button value='9' handleClick={addValue} />
         <Button value='+' handleClick={setOp} />
      </Row>
      <Row>
         <Button value='4' handleClick={addValue} />
          <Button value='5' handleClick={addValue} />
          <Button value='6' handleClick={addValue} />
         <Button value='-' handleClick={setOp} />
      </Row>
      <Row>
         <Button value='1' handleClick={addValue} />
         <Button value='2' handleClick={addValue} />
         <Button value='3' handleClick={addValue} />
         <Button value='*' handleClick={setOp} />
      </Row>
      <Row>
          <Button value='.' handleClick={addValue} />
         <Button value='0' handleClick={addValue}/>
         <Button value = 'CE' handleClick={clearAll} />
          <Button value='/' handleClick={setOp} />
      </Row>
      <Row>
          <Button value = '=' handleClick={calculate} />
      </Row>
    </div>

  );
}

export default App;
