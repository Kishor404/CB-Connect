import { Link } from "react-router-dom"
import "../Style/Home.css"

import Poster from "../assets/Poster-Sample.webp"

function HomePoster(){
    return(
        <>
            <div className="HomePoster-Container">
                <Link>
                    <img src={Poster} alt="Poster" className="Poster-Img"/>
                </Link>
                
            </div>
        </>
    )
}

export default HomePoster