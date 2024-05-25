

import { Link } from 'react-router-dom';

// import Logo from "../assets/sample_img1.jpg";

import "../Style/Components.css"

const Navbar=()=>{

    var Login=false;

    var NavBut="Login"

    if(Login){
        NavBut="Name"
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
                    <Link to={"/"}>About</Link>
                    <Link to={"/Score"}>Score</Link>
                    <Link to={"/Interact"}>Interact</Link>
                    
                </div>
                <div className="Nav-R">
                    <Link to={"/"}>{NavBut}</Link>
                </div>
            </div>
        </>
    )
}

export default Navbar;