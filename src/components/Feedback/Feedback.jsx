import React, { Component } from "react";
import css from "./style.module.css";
import Statistics from "components/Statistics/Statistics";
import FeedbackOptions from "components/FeedbackOptions/FeedbackOptions";
import Section from "components/Section/Section";



class Feedback extends Component {

    constructor(state) {
        super();
        this.state = { ...state.state };
    };

    countTotalFeedback = () => {
        const { good, neutral, bad } = this.state;
        return good + neutral + bad;
    };

    countPositiveFeedbackPercentage = () => {

        return Math.ceil(100 * this.state.good / this.countTotalFeedback());
    };

    handleClick = (evt) => {
        const { name } = evt.target;
        this.setState(prevState => ({[name]: prevState[name]+1}))
    };

    render() {
        const { good, neutral, bad } = this.state;
        const options = Object.keys(this.state);

        return (
            <div className={css.feedback}>
                <Section title="Please leave feedback">
                    <FeedbackOptions options={options} onLeaveFeedback={this.handleClick} />
                </Section>
                <Section title="Statistics">
                    <Statistics
                        good={good}
                        neutral={neutral}
                        bad={bad}
                        total={this.countTotalFeedback}
                        positivePercentage={this.countPositiveFeedbackPercentage}
                    />
                </Section>
            </div>
        );
    };

};


export default Feedback;