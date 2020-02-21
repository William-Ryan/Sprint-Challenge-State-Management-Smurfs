import React, { useEffect } from "react";
import SmurfCard from "./SmurfCard"
import { connect } from "react-redux";

import { fetchSmurfs } from "../actions";

const SmurfList = props => {

    useEffect(() => {
        props.fetchSmurfs()
    }, [])

    return (
        <div>
            <h1 className="title">Smurf Village App</h1>
            <div className = "card-container">
                {props.smurfs.map(smurf => (
                    <SmurfCard smurf={smurf}/>
                ))}
            </div>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        smurfs: state.smurfs,
        isFetching: state.isFetching,
        errors: state.errors
    }
}

export default connect(
    mapStateToProps, 
    { fetchSmurfs }
)(SmurfList);