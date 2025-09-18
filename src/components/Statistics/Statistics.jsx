import Notification from "components/Notification/Notification";
import React, { Component } from "react";


class Statistics extends Component {

    render() {
        const props = this.props;
        
        return (
            <Notification message="There is no feedback" {...props} />
        );
    };

};

export default Statistics;