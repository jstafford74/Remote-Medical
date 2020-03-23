import React from "react";

const Style = {
    obj: {
        textAlign: "center"
    }
}
const CircleLogo = () => {
    return (
        <figure style={Style.obj}>
            <svg width="500" height="200">
                <circle cx="70" cy="100" r="20" stroke="gray" fill="#D15FEE" strokeWidth="1"></circle>
                <circle cx="155" cy="100" r="35" stroke="gray" fill="#9932CD" strokeWidth="1"></circle>
                <circle cx="275" cy="100" r="50" stroke="gray" fill="#7D26CD" strokeWidth="1"></circle>
                <circle cx="425" cy="100" r="65" stroke="gray" fill="#2E0854" strokeWidth="1"></circle>
            </svg>
        </figure>
    )
}
export default CircleLogo