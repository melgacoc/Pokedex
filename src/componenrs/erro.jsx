import React from "react";
import sadPikachu from '../images/sadPikachu.png';

const Error = () => {
    return (
        <div>
            <h1>
            Something went wrong!
            </h1>
            <img className="sadPikachu"
            src={ sadPikachu } alt="" />
        </div>
    )
}

export default Error;