import React from "react";
import Layout from "../containers/Layout";
export default function Login() { 
    return (<Layout><div><h1>로그인폼</h1>
        <form>
            <div>
                <label><b>Username</b></label><br />
                <input></input><br/>
                <label><b>Password</b></label><br />
                <input></input><br />
                <button>Login</button><br/>
                <label><input></input>Remember me</label>
            </div>
            <div>
                <button>Cancel</button><br />
                <span>Forgot<a>Password?</a></span>
            </div>
        </form>
    </div>
    </Layout>)

}