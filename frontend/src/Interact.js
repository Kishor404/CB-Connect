import "./Style/Interact.css"
import SendIcon from '@mui/icons-material/Send';

import InteractImg from "./assets/Interact.png"

function Interact(){
    return(
        <>
            <section>
                <div className="Interact-Container">
                    <div className="Interact-L">
                        <img src={InteractImg} alt="Banner"></img>
                    </div>
                    <div className="Interact-R">
                        <div className="msginfo">
                            <p>CSBS</p>
                        </div>
                        <div className="msg">
                            <div className="msgin">
                                <p className="msg-co">Hello</p>
                            </div>
                            <div className="msgout">
                                <p className="msg-co">Hi</p>
                            </div>
                            
                        </div>
                        <div className="msgui">
                            <input placeholder="Enter"></input>
                            <button><SendIcon sx={{color:"#1D24CA"}}/></button>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Interact