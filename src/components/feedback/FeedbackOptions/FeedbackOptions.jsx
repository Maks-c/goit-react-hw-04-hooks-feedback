import React from 'react';
import PropTypes from "prop-types";
//====================================
import {OptionsButton,Div} from "./FeedbackOptionsStyle";

const FeedbackOptions = ({options, onLeaveFeedback}) => {
    return (
        <Div>
            {Object.keys(options).map((option)=>(
                <OptionsButton key={option} type='button' onClick={onLeaveFeedback} name={option}>{option}</OptionsButton>
            ))}
        </Div>
    );
};

FeedbackOptions.propTypes = {
    options: PropTypes.object.isRequired,
    onLeaveFeedback: PropTypes.func.isRequired
}

export default FeedbackOptions;