import React, { Component } from "react";
import css from "../Feedback/style.module.css"
import Button from "components/Button/Button";


class FeedbackOptions extends Component {
    render() {
        const { options, onLeaveFeedback } = this.props;
        return (
            <div className={css.buttonSet}>
                {options.map((option, idx) => (
                    <Button key={idx} name={option} onLeaveFeedback={onLeaveFeedback} />
                ))}
            </div>
        )
    }
};


export default FeedbackOptions;