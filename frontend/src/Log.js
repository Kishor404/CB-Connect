import "./Style/Log.css"
import * as React from 'react';
import { useEffect, useState } from "react"
import Cookies from 'js-cookie';


import LoginImg from "./assets/Login.png"

import TextField from '@mui/material/TextField';
import InputLabel from '@mui/material/InputLabel';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import IconButton from '@mui/material/IconButton';
import InputAdornment from '@mui/material/InputAdornment';
import OutlinedInput from '@mui/material/OutlinedInput';
import FormControl from '@mui/material/FormControl';
import Button from '@mui/material/Button';
import { Link } from "react-router-dom";

function Log(){

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
        var Pass=document.querySelector("#outlined-adornment-password").value
        console.log(Reg,Pass)
        var log=false;
        for(let i=0; i<Log.length;i++){
            if(Log[i].StdReg===Reg && Log[i].DOB===Pass){
                console.log("Welcome")
                log=true
                Cookies.set('LogId', Log[i]._id, { expires: 7 });
                Cookies.set('LogName', Log[i].Name, { expires: 7 });
            }
        }
        if(!log){
            alert("Incorrect Password")
        }
    }
    
    const [showPassword, setShowPassword] = React.useState(false);

    const handleClickShowPassword = () => setShowPassword((show) => !show);
  
    const handleMouseDownPassword = (event) => {
      event.preventDefault();
    };

    return(
        <>
            <section>
                <div className="Log-Container">
                    <div className="Login-Container">
                        <div className="Login-Img">
                            <img src={LoginImg} alt="Login"></img>
                        </div>
                        <div className="Login">
                            <p>Login</p>
                            <TextField id="Reg" label="Register Number" variant="outlined" />
                            <FormControl sx={{ m: 1, width: '25ch' }} variant="outlined">
                            <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
                            <OutlinedInput
                                id="outlined-adornment-password"
                                type={showPassword ? 'text' : 'password'}
                                endAdornment={
                                <InputAdornment position="end">
                                    <IconButton
                                    aria-label="toggle password visibility"
                                    onClick={handleClickShowPassword}
                                    onMouseDown={handleMouseDownPassword}
                                    edge="end"
                                    >
                                    {showPassword ? <VisibilityOff /> : <Visibility />}
                                    </IconButton>
                                </InputAdornment>
                                }
                                label="Password"
                            />
                            </FormControl>
                            <Button variant="contained" onClick={Login}>Login</Button>
                        </div>
                    </div>
                    <p className="Sign">Don't Have Account ? <Link>Create Account</Link></p>
                </div>
            </section>
        </>
    )
}

export default Log