import { NavLink } from "react-router-dom";
import "./index.css/Navebar.css";
// import logo from "./Assets/logo.png";
import video from "./Assets/video.mp4";
const Navbar = () => {
    return (
        <>


            <div className="row">





                <div className="col-12">
                    <div id="stiky" >
             
                        <ul>
                         
                            <li ><NavLink id="a" to={"/home"} > <b>Home</b>  </NavLink></li>
                            <li  ><NavLink id="b" to={"/blogs"} > <b> Blogs</b></NavLink></li>
                            <li ><NavLink id="c" to={"/contact"} > <b> Contact</b></NavLink></li> &ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;
                            <li><NavLink to={"/show"} ><button id="booking" >My Bookings</button></NavLink></li>
                            <li><button id="button" >Sign Up</button></li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Navbar;


