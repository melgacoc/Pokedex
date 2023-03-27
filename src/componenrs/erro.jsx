import React from "react";
import sadPikachu from '../images/sadPikachu.png';
import '../style/error.css'

const Error = () => {
    return (
        <div className="errorContainer">
            <h1 className="errorText">
            Something went wrong!
            </h1>
            <img className="sadPikachu"
            src={ sadPikachu } alt="" />
        </div>
    )
}

export default Error;