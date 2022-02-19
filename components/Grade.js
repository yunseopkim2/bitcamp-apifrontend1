import React, {useState} from "react";
import Layout from "../containers/Layout";
export default function Grade() { 
    const[username, setUsername] = useState("")
    const[kor, setKor] = useState(0)
    const [eng, setEng] = useState(0)
    const [math, setMath] = useState(0)
    const [result, setResult] = useState(0)
    const [total, setTotal] = useState(0)
    
    const execute = () => {
        let username = document.getElementById('username').value
        console.log(username)
        let kor = document.getElementById('kor').value
        console.log(kor)
        let eng = document.getElementById('eng').value
        console.log(eng)
        let math = document.getElementById('math').value
        console.log(math)
        setUsername(username)
        setKor(kor)
        setEng(eng)
        setMath(math)
        setResult('이름 : ' + (username) + '국어 : ' + Number(kor) + '영어 : ' + Number(eng) + '수학 : ' + Number(math))
        setTotal('총점 : ' +(Number(kor)+Number(eng)+Number(math)) + ' 평균 : '+(Number(kor)+Number(eng)+Number(math))/3)
    }
        return (<Layout><h1>성적표</h1>
            <div>
            
            <label><b>Username</b></label><br />
            <input id = 'username' type=''/><br/>
                <label><b>Kor</b></label><br />
                <input id = 'kor' type=''/><br/>
                <label><b>Eng</b></label><br />
                <input id = 'eng' type=''/><br/>
                <label><b>Math</b></label><br />
                <input id = 'math' type=''/><br/>
                <label><b>Total</b></label><br />
                <label><b>Averge</b></label><br />
                <button onClick={() => execute()}>실행</button><br />
                <div>{result}</div>
                <div>{total }</div>
            
            
            </div>
    </Layout>)
}
;