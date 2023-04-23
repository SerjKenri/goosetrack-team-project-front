import styled from "styled-components";
import { useState } from 'react';

const RadioButton = ({ value, onChange, checked, priority}) => {
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
                <PriorityChecked priority={priority}/>
            </PriorityButton>
            <PriorityName>{priority}</PriorityName>
        </PriorityItem>
    )
}

export const Priority = () => {
    const [priority, setPriority] = useState({ low: true, medium: false, high:false });
    
    const handleChange = (event) => {
        const { name } = event.target
        if (name === 'low') {
            setPriority({ low: true, medium: false, high:false })
        }
        if (name === 'medium') {
            setPriority({ low: false, medium: true, high:false })
        }
        if (name === 'high') {
            setPriority({ low: false, medium: false, high:true })
        }
    }
  
    return (
        <PriorityWrap>
            <RadioButton
                name="low"
                id="low"
                value="low"
                priority="Low"
                color="blue"
                onChange={handleChange}
                checked={priority.low}
            />
            <RadioButton
                name="medium"
                id="medium"
                value="medium"
                priority="Medium"
                color="orange"
                onChange={handleChange}
                checked={priority.medium}
            />
            <RadioButton
                name="high"
                id="high"
                value="high"
                priority="High"
                color="red"
                onChange={handleChange}
                checked={priority.high}
            />
        </PriorityWrap>
    )
}

const PriorityWrap = styled.div`
    display: flex;
    flex-direction: row;
    gap: 16px;
`;

const PriorityItem = styled.label`
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 6px;
    cursor: pointer;
`;

const PriorityButton = styled.span(({theme, priority}) => ({
    width: "10px",
    height: "10px",
    borderRadius: "50%",
    backgroundColor:
        priority === "Low"
        ? theme.color.taskLowColor
        : priority === "Medium"
        ? theme.color.taskMedColor
        : theme.color.taskHighColor
        
}));

const PriorityInput = styled.input`
    width:10px;
    height:10px;
    opacity:0;
    z-index:-1;
    position:absolute;

    &:checked + ${PriorityButton} {
        position: relative;
        width: 10px;
        height: 10px;
        border-radius: 50%;
        opacity: 0.5;
        border: 1px solid white;
    }
`;

const PriorityChecked = styled.span(({ theme, priority}) => ({
    position: "absolute",
    top: "-3px",
    left: "-3px",
    width: "14px",
    height: "14px",
    borderRadius: "50%",
    opacity: "0.5",
    border: "2px solid",
    borderColor:
            priority === 'Low'
            ? theme.color.taskLowColor
            : priority === 'orange'
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
