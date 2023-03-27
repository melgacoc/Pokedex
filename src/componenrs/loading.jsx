import React from "react";
import pikachu from '../images/pikachu.png';

const isLoading = () => {
    return (
        <div>
            <h1>
            Wait while we find something cool!
            </h1>
            <img src={ pikachu } alt="" />
        </div>
    )
}

export default isLoading;