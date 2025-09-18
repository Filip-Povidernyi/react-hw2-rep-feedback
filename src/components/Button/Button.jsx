import React, { Component } from "react";


class Button extends Component {
    render() {
        const { name, onLeaveFeedback } = this.props;
        const capitalizeName = name[0].toUpperCase() + name.slice(1);

        return (
            <button type="button" name={name} onClick={onLeaveFeedback}>{capitalizeName}</button>
        )
    };
};


export default Button;