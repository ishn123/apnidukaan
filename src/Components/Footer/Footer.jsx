import React from 'react'
import help from "../../assets/help.png"
import "./footer.css";
const Footer = () => {
  return (
    <div className="footer-wrapper">
        <div className="about-comp-wrapper">
            <div className="left-about">
                <div className="resource">
                    <p>Resources</p>
                    <div className="res">
                        <p>Subscriptions</p>
                        <p>Help    </p>
                        <img src={help} width={10} height={10}></img>
                    </div>
                </div>
                <div className="company">
                    <p>Company</p>
                    <div className="res">
                        <p>About</p>
                        <p>Contact Us</p>
                    </div>
                </div>
            </div>
            <div className="right-about">
                <h2>&copy;ApniDukaan</h2>
            </div>
        </div>

        <p style={{textAlign:"center"}}>Made with ❤️ by WebBeaver.co.in</p>
    </div>
  )
}

export default Footer