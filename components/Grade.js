import React from "react";
import Layout from "../containers/Layout";
export default function Grade() { 
    return (<Layout><h1>성적표</h1>
        <form>
            <div></div>
            <div>
                <label><b>이름</b></label><br />
                <label><b>국어점수</b></label><br />
                <input></input><br/>
                <label><b>영어점수</b></label><br />
                <input></input><br/>
                <label><b>수학점수</b></label><br />
                <input></input><br/>
                <label><b>총합</b></label><br />
                <input></input><br/>
                <label><b>평균</b></label><br />
                <input></input><br/>
            </div>
            <div>
            <botton>Cancel</botton><br/>
            </div>
        </form>
    </Layout>)
}
;