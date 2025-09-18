import React, { Component } from "react";
import css from "../Feedback/style.module.css"


class Notification extends Component {
    render() {
        const { good, neutral, bad, total, positivePercentage, message } = this.props;
        
        return (
        total() === 0 ? <h3>{message}</h3> : 
        <div className={css.statSet}>
            <p><b>Good:</b> {good}</p>
            <p><b>Neutral:</b> {neutral}</p>
            <p><b>Bad:</b> {bad}</p>
            <p><b>Total:</b> {total()}</p>
            <p><b>Positive feedback: </b>{positivePercentage()}%</p>
            </div>
        )
    };
};


export default Notification;