

import { Link } from 'react-router-dom';
import Cookies from 'js-cookie';

// import Logo from "../assets/sample_img1.jpg";

import "../Style/Components.css"

const Navbar=()=>{

    const LogId = Cookies.get('LogId');
    const LogName = Cookies.get('LogName');


    var NavBut="Login"

    if(LogId){
        NavBut=LogName
    }else{
        NavBut="Login"
    }
    return(
        <>
            <div className="NAVBAR">
                <div className="Nav-L">
                    {/* <img src={Logo} alt="Logo"/> */}
                    <p>CB-Connect</p>
                </div>
                <div className="Nav-C">
                    <Link to={"/Home"}>Home</Link>
                    <Link to={"/About"}>About</Link>
                    <Link to={"/Score"}>Score</Link>
                    <Link to={"/Contact"}>Contact</Link>
                    
                </div>
                <div className="Nav-R">
                    <Link to={"/Login"}>{NavBut}</Link>
                </div>
            </div>
        </>
    )
}

export default Navbar;