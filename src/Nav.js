import React, { useEffect, useState } from 'react';

const Nav = props => {
    const [show, handleShow] = useState(false);

    useEffect(() => {
        window.addEventListener("scroll", () => {
            if(window.scrollY > 100){
                handleShow(true);
            }
            else {
                handleShow(false);
            }
        });
        return () => {
            // TUTORIAL WAS ABLE TO PASS ONLY ONE PARAM INTO removeEventListener BUT THE FUNC
            // WANTS AN OBJECT TO ALSO BE PASSED IN INDEX[1]. THIS MAY CAUSE ISSUES.
            window.removeEventListener("scroll", {});
        }
    },[])

    return(
        <div className={`nav ${show && "nav_black"}`}>
            <img
                className="nav_logo" 
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/799px-Netflix_2015_logo.svg.png"
                alt="Netflix Logo"
            />
            <img
                className="nav_avatar" 
                src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"
                alt="Netflix Logo"
            />
        </div>
    );
}

export default Nav;