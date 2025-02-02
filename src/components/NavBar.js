import {Component} from "react";
import { MenuItems } from "./MenuItems";
import logo from "../assets/logo.png";
import "./NavbarStyles.css";
import { Link } from "react-router-dom";
class  NavBar extends Component{
    state = {clicked: false};
    handelClick = () => {
        this.setState({clicked: !this.state.clicked})
    }
    render(){
        return(
            <nav className="NavbarItems">
                <h1 className="navbar-logo">
                    LuxeLoom
                </h1>
                <div className="menu-icons" onClick={this.handelClick}>
                    <i className={this.state.clicked ? "fas fa-times" : "fas fa-bars"}></i>
                </div>
                <ul className={this.state.clicked ? "nav-menu active" : "nav-menu"}>
                    {MenuItems.map((item, index)=>{
                        return(
                            <li key={index}>
                                <Link className={item.cName}
                                to={item.url}> 
                                <i class={item.icon}></i>{item.title}
                                </Link>
                            </li>
                        )
                    })}
                    <button>Sign Up</button>
                </ul>
            </nav>
        )
    }
}
export default NavBar;