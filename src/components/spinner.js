import React, { Component } from "react";
import Spinner from "../spinner.gif";

export default class SpinnerLoader extends Component {
    render() {
        return (
            <div>
                <img src={Spinner} alt="loading" />
            </div>
        )
    }
}