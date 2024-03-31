import React from "react";

export default function PortfolioCard({portfolio = null}) {

    return (
        <div className={"card-portfolio"}>
            <div className={"-header"}>
                <img src={`${window.location.origin}/content/img/avatar.jpg`} alt={""} />
            </div>
            <div className={"-content"} hidden></div>
        </div>
    )
}