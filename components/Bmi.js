import React, { useState } from "react";
import Layout from "../containers/Layout";
import { memberBmi } from "../api";
export default function Bmi() {
        const [inputs, setInputs] = useState({})
        const { name, weight, height } = inputs;
        const [result, setResult] = useState()
        const handleChange = (e) => {
                e.preventDefault()
                const { value, name } = e.target;
                setInputs({ ...inputs, [name]: value })
        }
        const handleClick = (e) => {
                e.preventDefault()
                memberBmi({ name, weight, height })
                        .then(res => setResult(res.data))
                        .catch(err => console.log(`에러발생 : ${err}`))
        }
      
        /* const a = () => { 
                 let name = document.getElementById('name').value
                 console.log(name)
                 let height = document.getElementById('height').value
                 console.log(height)
                 let weight = document.getElementById('weight').value
                 console.log(weight)
                 setUsername(name)
                 setHeight(height)
                 setweight(weight)
                 setResult('이름 : '+ (name)+ ' 키 : ' + Number(height)+ ' 몸무게 : '+Number(weight))
         }
     return (<Layout><h1>Bmi</h1>
     <div>   
         <label><b>Username</b></label><br/>
             <input id = 'name' type=''/><br/>
             <label><b>height</b></label><br />        
             <input id = 'height'type=''/><br />
             <label><b>weight</b></label>
             <input id = 'weight' type=''/><br />
             <button onClick={()=>a()}>확인</button><br />
             
                     <div>{ result}</div>
             
     
             </div>
             </Layout>)
 }*/
 return<Layout>
        <form>
            <h1>BMI</h1>
            <div>
                <label><b>UserName</b></label>
                <input type = "text" name="name" onChange={handleChange}/><br/>
                <label><b>length</b></label>
                <input type = "text" name="length" onChange={handleChange}/><br/>
                <label><b>weight</b></label>
                <input type = "text" name="weight" onChange={handleChange}/><br/>
                <button onClick={handleClick}>BMI CHECK</button>
            </div>
         </form>
         </Layout>

}
