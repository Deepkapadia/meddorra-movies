import React,{useState,useEffect} from 'react'
import './Nav.css'
import logo from '../../logo.png'

function Nav() {

    const [show,handleShow] = useState(false);

    useEffect(() => {
       window.addEventListener("scroll", () => {
           if(window.scrollY > 100) {
            handleShow(true);
           }else handleShow(false);
       });
       return () => {
           window.removeEventListener("scroll");
       }
    }, [])

    return (
        <div className={`nav ${show && "nav__black"}`}>
            <img className="nav__logo"
            src={logo}
            alt="LogoNet"/>

        <img className="nav__avatar"
            src="https://mir-s3-cdn-cf.behance.net/project_modules/disp/1bdc9a33850498.56ba69ac2ba5b.png"
            alt="LogoNet"/>
        </div>
    )
}

export default Nav
