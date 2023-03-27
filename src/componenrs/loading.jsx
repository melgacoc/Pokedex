import React from "react";
import pikachu from '../images/pikachu.png';
import '../style/loading.css';

const isLoading = () => {
    return (
        <div className="loadingContainer">
            <h1 className="loadingText">
            Wait while we find something cool!
            </h1>
            <img className="loadingImage"
            src={ pikachu } alt="" />
        </div>
    )
}

export default isLoading;