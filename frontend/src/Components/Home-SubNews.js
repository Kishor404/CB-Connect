import { useEffect, useState } from "react"
import { Link } from 'react-router-dom';

import "../Style/Home.css"

function HomeSubNews(){
    
    const [data,setdata]=useState()
    
    useEffect(()=>{
        const fetchData1=async ()=>{
            try{
                const response=await fetch("/News")
                const json=await response.json()
                if(response.ok){
                    setdata(json)
                }
            }catch(err){
                console.log(err)
            }
            
        }
        fetchData1();
    },[])

    console.log(data)

    return(
        <>
            <div className="HomeSubNews-Container">
                {data && data.map((info)=>(
                    <Link>
                    <div className="News">
                        <p>{info.Header}</p>
                        <p className="News-Date">{info.updatedAt.split("T")[0]}</p>
                    </div>
                    </Link>
                ))}
            </div>
        </>
    )
}

export default HomeSubNews