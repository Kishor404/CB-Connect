import "./Style/Score.css"

import Education from "./assets/Education.png"

import Marks from "./Components/Mark.js"

function Score(){

    return(
        <>
            <section>
                <div className="Score-Container">
                    
                    <Marks/>
                    <div className="Score-Ban">
                        <img src={Education} alt="Banner"></img>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Score