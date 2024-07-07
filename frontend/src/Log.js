import "./Style/Log.css"
import * as React from 'react';
import { useEffect, useState } from "react"
import Cookies from 'js-cookie';


import LoginImg from "./assets/Login.png"
import LogoutImg from "./assets/Logout.jpg"


import Button from '@mui/material/Button';

function Log(){

    var Lid=Cookies.get("LogId");

    if (!Lid) {
        const loginContainer = document.querySelector(".Login-Container");
        if (loginContainer) {
            loginContainer.style.display = "flex";
            document.querySelector(".Logout-Container").style.display = "none";
        }
    }
    
      


    const [Log,setLog]=useState()
    
    useEffect(()=>{
        const fetchLog=async ()=>{
            try{
                const response=await fetch("/Log")
                const json=await response.json()
                if(response.ok){
                    setLog(json)
                }
            }catch(err){
                console.log(err)
            }
            
        }
        fetchLog();
    },[])

    console.log(Log)

    function Login(){
        var Reg=document.querySelector("#Reg").value
        var Pass=document.querySelector("#DOB").value
        console.log(Reg,Pass)
        var log=false;
        for(let i=0; i<Log.length;i++){
            if(Log[i].RegNo===Reg && Log[i].DOB===Pass){
                console.log("Welcome")
                log=true
                Cookies.set('LogId', Log[i]._id, { expires: 7 });
                Cookies.set('LogName', Log[i].Name, { expires: 7 });
                Cookies.set('LogReg', Log[i].RegNo, { expires: 7 });
            }
        }
        if(!log){
            alert("Incorrect Password")
        }
        window.location.reload();
    }

    function Logout(){
        Cookies.remove('LogId');
        Cookies.remove('LogName');
        Cookies.remove('LogReg');
        window.location.reload();
    }
    
    return(
        <>
            <section>
                <div className="Log-Container">
                    <div className="Login-Container" style={{"display":"none"}}>
                        <div className="Login-Img">
                            <img src={LoginImg} alt="Login"></img>
                        </div>
                        <div className="Login">
                            <p>Login</p>
                            <input placeholder="Register Number" id="Reg"/>
                            <input placeholder="DD-MM-YYYY" id="DOB"/>
                            <Button variant="contained" onClick={Login}>Login</Button>
                        </div>
                    </div>
                    <div className="Logout-Container">
                        <div className="Logout-Img">
                            <img src={LogoutImg} alt="Logout"></img>
                        </div>
                        <div className="Logout">
                            <p className="loname">{Cookies.get("LogName")}</p>
                            <p className="loreg">{Cookies.get("LogReg")}</p>
                        </div>
                        <Button variant="contained" color="error" onClick={Logout}>Logout</Button>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Log