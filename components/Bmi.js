import React, { useState } from "react";
import Layout from "../containers/Layout";
export default function Bmi() {
        const [username, setUsername] = useState("")
        const [height, setHeight] = useState(0.0)
        const [weight, setweight] = useState(0.0)
        const[result, setResult] = useState()
        const a = () => { 
                let username = document.getElementById('username').value
                console.log(username)
                let height = document.getElementById('height').value
                console.log(height)
                let weight = document.getElementById('weight').value
                console.log(weight)
                setUsername(username)
                setHeight(height)
                setweight(weight)
                setResult('이름 : '+ (username)+ ' 키 : ' + Number(height)+ ' 몸무게 : '+Number(weight))
        }
    return (<Layout><h1>Bmi</h1>
    <div>   
        <label><b>Username</b></label><br/>
            <input id = 'username' type=''/><br/>
            <label><b>height</b></label><br />        
            <input id = 'height'type=''/><br />
            <label><b>weight</b></label>
            <input id = 'weight' type=''/><br />
            <button onClick={()=>a()}>확인</button><br />
            
                    <div>{ result}</div>
            
    
            </div>
            </Layout>)
}
