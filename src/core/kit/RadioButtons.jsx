import styled from 'styled-components';
import { useState } from 'react';
import propTypes from 'prop-types';

export const RadioButton = ({ value, onChange, checked, priority }) => {
    return (
        <PriorityItem>
            <PriorityInput
                type="radio"
                name={value}
                id={value}
                value={value}
                onChange={onChange}
                checked={checked}
            />
            <PriorityButton priority={priority}>
                <PriorityChecked priority={priority} />
            </PriorityButton>
            <PriorityName>{priority}</PriorityName>
        </PriorityItem>
    );
};

RadioButton.propTypes = {
    priority: propTypes.oneOf(['low', 'medium', 'high']).isRequired,
    value: propTypes.string.isRequired,
    checked: propTypes.bool.isRequired,
    onChange: propTypes.func.isRequired,
};

export const Priority = () => {
    const [priority, setPriority] = useState({ low: true });

    const handleChange = event => {
        const { name } = event.target;
        if (name === 'low') {
            setPriority({ low: true, medium: false, high: false });
        }
        if (name === 'medium') {
            setPriority({ low: false, medium: true, high: false });
        }
        if (name === 'high') {
            setPriority({ low: false, medium: false, high: true });
        }
    };

    return (
        <PriorityWrap>
            <RadioButton
                name="low"
                id="low"
                value="low"
                priority="Low"
                onChange={handleChange}
                checked={priority.low}
            />
            <RadioButton
                name="medium"
                id="medium"
                value="medium"
                priority="Medium"
                onChange={handleChange}
                checked={priority.medium}
            />
            <RadioButton
                name="high"
                id="high"
                value="high"
                priority="High"
                onChange={handleChange}
                checked={priority.high}
            />
        </PriorityWrap>
    );
};

const PriorityWrap = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 16px;
`;

const PriorityItem = styled.label`
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 6px;
    cursor: pointer;
`;

const PriorityButton = styled.span(({ theme, priority }) => ({
    position: 'relative',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '10px',
    height: '10px',
    borderRadius: '50%',
    opacity: '50%',
    // border: '1px solid white',
    backgroundColor:
        priority === 'low'
            ? theme.color.taskLowColor
            : priority === 'medium'
            ? theme.color.taskMedColor
            : theme.color.taskHighColor,
}));

const PriorityInput = styled.input`
    width: 0;
    height: 0;
    opacity: 0;
    z-index: -1;
    position: absolute;

    &:checked + ${PriorityButton} {
        position: relative;
        width: 10px;
        height: 10px;
        border-radius: 50%;
        opacity: 1;
    }
`;

const PriorityChecked = styled.span(({ theme, priority }) => ({
    position: 'absolute',
    // top: '-2px',
    // left: '-2px',
    width: '14px',
    height: '14px',
    borderRadius: '50%',
    opacity: '0.5',
    border: '1px solid',

    borderColor:
        priority === 'low'
            ? theme.color.taskLowColor
            : priority === 'medium'
            ? theme.color.taskMedColor
            : theme.color.taskHighColor,
}));

const PriorityName = styled.p`
    font-family: 'Inter';
    font-style: normal;
    font-weight: 600;
    font-size: 12px;
    line-height: 1.17;
`;
