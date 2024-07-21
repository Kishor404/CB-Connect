import "../Style/Score.css";
import * as React from 'react';
import { useEffect, useState } from "react";
import Cookies from 'js-cookie';

function Marks(){

    let LogReg=Cookies.get("LogReg");
    console.log(LogReg)

    const [Performance,setPerformance]=useState([{Reg:"00",Score:[]}])
    
    useEffect(()=>{
        const fetchPerformance=async ()=>{
            try{
                const response=await fetch("/Performance")
                const json=await response.json()
                if(response.ok){
                    setPerformance(json)
                }
            }catch(err){
                console.Performance(err)
            }
            
        }
        fetchPerformance();
    },[])

    const [Scores,setScores]=useState([["?","?",[["?","0"],["?","0"]]]])

    useEffect(()=>{
        let Pin=[];
        for(let i=0;i<Performance.length;i++){
            if(Performance[i].RegNo===String(LogReg)){
                Pin=Performance[i].Score
            }
        }
        
        for(let j=0;j<Pin.length;j++){
            Pin[j][2]=Pin[j][2].split("|")
            for(let k=0;k<Pin[j][2].length;k++){
                Pin[j][2][k]=Pin[j][2][k].split("$")
            }
        }
        if (Pin.length>0){
            setScores(Pin)
        }
        

    },[Performance,LogReg])

    

    // var Scores=[["1st Semester","IAT1",[["Tamil",90],["English",50]]],["2nd Semester","IAT1",[["Tamil",80],["English",80]]],["2nd Semester","Final",[["Artifical interlligence",80],["Mathematics",80]]]]
    return(
        <>
                <div className="Mark-IO">
                    <p className="Mark-Tit">Academic Performance of {Cookies.get("LogName")}</p>
                    <div className="Mark-Container">
                    {Scores && Scores.map((score)=>(
                        <div className="Mark-Card">
                            <div className="Mark-Top">
                                <p>{score[0]}</p>
                                <p>{score[1]}</p>
                            </div>
                            <div className="Mark-Bottom">
                                <table>
                                    <thead>
                                        <tr>
                                            <th>Subject</th>
                                            <th>Mark</th>
                                            <th>Status</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {score[2] && score[2].map((info) => (
                                        <tr>
                                            <td>{info[0]}</td>
                                            <td>{Number(info[1])}</td>
                                            <td>{Number(info[1])>=60?"Pass":"Fail"}</td>
                                        </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    ))}
                    </div>
                </div>
                    
        </>
    )
}

export default Marks