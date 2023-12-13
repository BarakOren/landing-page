import React from "react";
import bg from "../assets/FIXED.jpg"
import "./top.css"

const Top = () => {

    return (
        <section className="top">
        <div className="bg" style={{backgroundImage: `url(${bg})`}} />
        <div className="text-container">
        <h1>Art Action</h1>
        <h2>ארט אקשן</h2>
        <p>מיתוג חדשני ומושך עין באמצעות גרפיטי</p>
        </div>
   
        </section>
    )

}

export default Top