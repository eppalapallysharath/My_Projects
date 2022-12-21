import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {loadButtons, loadClear, loadBackspace, loadAns, } from "../redux/calculatorRedux/calculator.actions"
import { CALCULATOR_KEY } from '../redux/calculatorRedux/calculator.reducer';
import "./calculator.css"





export const CalculatorApp = () => {

    const dispatch = useDispatch();

    // view store
    const viewCalculator = useSelector((state)=>{
        return state[CALCULATOR_KEY]
    })

  return (
    <>
    <section>
        <div className='calculator-grid'>
            {/* <pre>
                {JSON.stringify(viewCalculator)}
            </pre> */}
            {/* <div>
                <h3>Calculator App</h3>
            </div> */}

                
            <div className='output'>
                {/* Screen */}
                <input type="text"
                placeholder='0'
                style={{textAlign:"right"}} 
                value = {(viewCalculator.ans).length ===0 ? viewCalculator.number: viewCalculator.ans}
                />
            </div>
                {/* keypad */} 
            {/* <div className='calcButtons'> */}
                <button className='span-two' style={{ backgroundColor:"red"}} onClick={()=>dispatch(loadClear())}>AC</button>
                <button className='span-two' style={{ backgroundColor:"orange"}} onClick={()=>dispatch(loadBackspace())}>DEL</button>
                <button onClick={()=> dispatch(loadButtons("/"))}>/</button>
                <button onClick={()=> dispatch(loadButtons("+"))}>+</button>
                <button onClick={()=> dispatch(loadButtons("*"))}>*</button>
                <button onClick={()=> dispatch(loadButtons("-"))}>-</button>
                <button onClick={()=> dispatch(loadButtons(1))}>1</button>
                <button onClick={()=> dispatch(loadButtons(2))}>2</button>
                <button onClick={()=> dispatch(loadButtons(3))}>3</button>
                <button onClick={()=> dispatch(loadButtons(4))}>4</button>
                <button onClick={()=> dispatch(loadButtons(5))}>5</button>
                <button onClick={()=> dispatch(loadButtons(6))}>6</button>
                <button onClick={()=> dispatch(loadButtons(7))}>7</button>
                <button onClick={()=> dispatch(loadButtons(8))}>8</button>
                <button onClick={()=> dispatch(loadButtons(9))}>9</button>
                <button onClick={()=> dispatch(loadButtons(0))}>0</button>
                <button onClick={()=> dispatch(loadButtons("."))}>.</button>
                <button  className='' style={{ backgroundColor:"green"}}
                 onClick={()=> dispatch(loadAns())}
                 >=</button>
            {/* </div> */}
        </div>
    </section>
    </>
  )
}
