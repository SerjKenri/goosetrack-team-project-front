import styled from 'styled-components';
import propTypes from 'prop-types';

const chipPriority = {
    low: 'low',
    medium: 'medium',
    high: 'high',
};

const Container = styled.div(({ theme, priority }) => ({
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '4px 12px',
    gap: '149px',
    borderRadius: '4px',
    backgroundColor:
        priority === chipPriority.low
            ? theme.color.taskLowColor
            : priority === chipPriority.medium
            ? theme.color.taskMedColor
            : theme.color.taskHighColor,
    color: '#f7f6f9',
    fontFamily: 'Inter',
    fontWeight: '600',
    fontSize: '10px',
    lineHeight: '12px',
    textAlign: 'center',
}));

const Chip = ({ priority }) => {
    return (
        <Container priority={priority}>
            {priority.charAt(0).toUpperCase() + priority.slice(1)}
        </Container>
    );
};

export { Chip, chipPriority };

Chip.propTypes = {
    priority: propTypes.oneOf(Object.values(chipPriority)).isRequired,
};
