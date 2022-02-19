import React, {useState } from "react";
import Layout from "../containers/Layout";
export default function Calc() {
    const [num1, setNum1] = useState(0)
    const [num2, setNum2] = useState(0)
    const [result, setResult] = useState(0)
    const sum = () => {
        let num1 = document.getElementById('num1').value
        console.log(num1)
        let num2 = document.getElementById('num1').value
        console.log(num2)
        setNum1(num1)
        setNum2(num2)
        setResult(Number(num1) + Number(num2))
        console.log(result)
    }
    return (<Layout><h1>계산기</h1>
            <div>
            
            <label><b>num1</b></label><br />
            <input id = "num1" type =""/><br />
            <label htmlFor=""><b>opcode</b></label><br />
            <select name="" id="">
                <option value="">+</option>
                <option value="">-</option>
                <option value="">*</option>
                <option value="">/</option>
                <option value="">%</option>
            </select>
            <br/>
            <label htmlFor=""><b>num2</b></label><br />
            <input id="num2" type="" /><br />
            <botton onClick={() => {sum() }}>더하기실행</botton>
            <div>결과: {num1} + {num2} = {result }</div>

    
    </div></Layout>)

}