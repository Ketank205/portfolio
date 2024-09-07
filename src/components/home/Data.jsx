import React from "react";

const Data = () => {
    return (
        <div className="home__data">
            <h1 className="home__title">Ketankumar Borse</h1>
            <h3 className="home__subtitle">Aspiring Web Developer</h3>
            <p className="home__description">🧑🏻‍💻 I'm student of Computer Engineering.
                💡I'm passionate about leveraging technology to solve real-world challenges.
                🔰 I'm beginner in the development of Web Applications.</p>
            <a href="#contact" className="button button--flex" style={{color:"--title-color"}}>Contact Me <i className="uil uil-message button__icon"></i></a>
        </div>
    );
}

export default Data;