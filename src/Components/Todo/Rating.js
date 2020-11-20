import React from "react";
import { Stars } from "react-star-ratings";


function Rating() {
    return (
        <Stars
            stars={2.403}
            outOf={5}
            full={"#d00"}
            empty={"#E1F1FF"}
            stroke={"#369"}
            style={{ width: "1rem", opacity: 0.8 }}
        />
    )
}


export default Rating