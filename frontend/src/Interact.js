import "./Style/Interact.css"
import SendIcon from '@mui/icons-material/Send';

function Interact(){
    return(
        <>
            <section>
                <div className="Interact-Container">
                    <div className="Interact-L">
                        <button>
                            <p><b>ZX 404</b></p>
                            <p>Developer, CSBS</p>
                        </button>
                        <button>
                            <p><b>Luna</b></p>
                            <p>AI, CSBS</p>
                        </button>
                    </div>
                    <div className="Interact-R">
                        <div className="msginfo">
                            <p>ZX 404</p>
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