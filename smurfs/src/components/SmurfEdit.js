import React, { useState } from "react";
import { connect } from "react-redux";

import { putSmurfs } from "../actions"

const SmurfEdit = props => {
    const [editSmurf, editSetSmurf] = useState({
        name: '',
        age: '',
        height: '',
    });

    const inputHandler = e => {
        e.preventDefault()
        editSetSmurf({ ...editSmurf, [e.target.name]: e.target.value })
    }

    const submitHandler = e => {
        e.preventDefault();
        props.putSmurfs(editSmurf);
        editSetSmurf({ name: '', age: '', height: '', })
    }

    return (
        <div>
            <form id="smurfEdit">
                <label htmlFor="name">Name</label>
                <input
                    type="text"
                    name="name"
                    label="name"
                    placeholder="Smurf Name"
                    value={props.name}
                    onChange={inputHandler}
                    className="input"
                />
                <label htmlFor="age">Age</label>
                <input
                    type="text"
                    name="age"
                    label="age"
                    placeholder="Smurf Age"
                    value={props.age}
                    onChange={inputHandler}
                    className="input"
                />
                <label htmlFor="height">Height</label>
                <input
                    type="text"
                    name="height"
                    label="height"
                    placeholder="Smurf Height"
                    value={props.height}
                    onChange={inputHandler}
                    className="input"
                />
                <button onClick={submitHandler} className="btn">Edit A Smurf</button>
            </form>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        smurfs: state.smurfs,
        errors: state.errors
    }
}

export default connect(
    mapStateToProps,
    { putSmurfs }
)(SmurfEdit);