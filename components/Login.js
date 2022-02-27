import React, { useState }from "react";
import Layout from "../containers/Layout";
import { memberLogin } from "../api";
export default function Login() { 
    const [inputs, setInputs] = useState({})
    const { userId, userPw } = inputs;
    const [result, setResult] = useState('')
    const handleChange = (e) => {
        e.preventDefault()
        const { value, name } = e.target;
        setInputs({...inputs, [name]: value})
    }
    const handleClick = (e) => {
        e.preventDefault()
        memberLogin({ userId, userPw })
            .then(res => setResult(res.data))
        .catch(err => console.log(`에러발생 : ${err}`))
    }
    return (<Layout>
   <form>
   <h1>로그인</h1>
   
  
   <div>
   <label><b>UserId</b></label>
   <input type="text" name="userId" onChange={handleChange}  /><br />

   <label htmlFor=""><b>Password</b></label>
   <input type="text" name="password" onChange={handleChange}  /><br />

   <button onClick={handleClick}>Login</button><br />
   <label><input type="checkbox" />Remember me</label><br />
   </div>

   <div>
   <button>Cancel</button><br />
   <span>Forgot <a>password?</a></span>
   </div>
   <div>{result}</div>

   </form>
   </Layout>)
}