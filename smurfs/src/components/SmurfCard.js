import React from "react";

const SmurfCard = props => {
    return (
        <div>
            <div className="card">
                <h2>{props.smurf.name}</h2>
                <h3>{props.smurf.age}</h3>
                <h3>{props.smurf.height}</h3>
            </div>
        </div>
    )
}

export default SmurfCard;