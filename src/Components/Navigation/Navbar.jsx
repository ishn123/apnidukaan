import React, { useRef } from 'react'
import menu from "../../assets/menu.png";
import cross from "../../assets/x-button.png"
import "./navbar.css";
import { useNavigate } from 'react-router-dom';
import ButtonGroup from "@material-ui/core/ButtonGroup";
import Badge from "@material-ui/core/Badge";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import Button from "@material-ui/core/Button";


const Navbar = ({itemCount}) => {
    const navigate = useNavigate();
    const Menu = useRef();
    const showMenu = () => {
        const ele = Menu.current;
        ele.style.display = "flex";
    }
    const closeMenu = () => {
        const ele = Menu.current;
        ele.style.display = "none";
    }

    return (
        <div className="nav-wrapper">
            <div className="nav-bar">
                <div className="logo-text-container" onClick={()=>navigate("/")}>
                    <div className="logo"></div>
                    <div className="logo-text-title">
                        ApniDukaan
                    </div>
                </div>
                <div className="nav-items">
                    <div className="item-nav" onClick={()=>navigate("/disinfectants")}>Disinfectants</div>
                    <div className="item-nav">Food Items</div>
                    <div className="item-nav">Cosmetics</div>
                    <div className="item-nav">About</div>
                </div>
                <Badge color="secondary" badgeContent={itemCount}>
                    <ShoppingCartIcon />
                </Badge>
                <div className="menu-icon" onClick={() => showMenu()}>
                    <div className="menu-icon-img">
                        <img src={menu} width="24px" height="24px" alt="menu icon" />
                    </div>
                </div>
                <div className="menu-container-wrapper" ref={Menu}>
                    <div className="menu-container" >
                        <div className="cross-icon menu-container-item" onClick={() => closeMenu()}>
                            <img src={cross} alt='cross' height="24px" width="24px"></img>
                        </div>
                        <div className="menu-container-item" onClick={()=>{navigate("/disinfectants"); closeMenu(); }}>Disinfectants</div>
                        <div className="menu-container-item">Cosmetics</div>
                        <div className="menu-container-item">Food Items</div>
                        <div className="menu-container-item">About</div>
                    </div>
                </div>

            </div>
        </div>


    )
}

export default Navbar