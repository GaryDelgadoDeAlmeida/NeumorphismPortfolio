import React from "react";

export default function Header(props) {

    return (
        <div className={"page"}>
            <div className={"page-header"}>
                {/* Desktop menu */}
                <div className={"header-menu"}>
                    <div className={"-avatar"}>
                        <div className={"-photo"}>
                            <img src={`${window.location.origin}/content/img/avatar.jpg`} alt={""} />
                        </div>
                        <span className={"-fullname"}>Garry ALMEIDA</span>
                        <span className={"-job"}>Fullstack Developer</span>
                    </div>
                    <div className={"-links"}>
                        <a href={"/"}>Home</a>
                        <a href={"/#about"}>About</a>
                        <a href={"/#services"}>Services</a>
                        <a href={"/#portfolio"}>Portfolio</a>
                        <a href={"/#contact"}>Contact</a>
                    </div>
                </div>
                
                {/* Mobile / Tablet menu */}
                <div className={"header-mobile-menu"}></div>
            </div>
            <div className={"page-content"}>
                <div className={"page-banner"}>
                    <div className={"mobile-menu"}>
                        <div className={"-links"}>
                            <a href={"/"}>Home</a>
                            <a href={"/#about"}>About</a>
                            <a href={"/#services"}>Services</a>
                            <a href={"/#portfolio"}>Portfolio</a>
                            <a href={"/#contact"}>Contact</a>
                        </div>
                    </div>
                </div>
                <div className={"page-wrapper"}>
                    {props.children}
                </div>
            </div>
        </div>
    )
}