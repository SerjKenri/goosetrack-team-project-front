import { iconNames } from 'assets/icons/iconNames';
import { Chip } from 'core/kit/Chip';
import { Icon } from 'core/kit/Icon';
import { IconButton } from 'core/kit/IconButton';
import propTypes from 'prop-types';
import { useState } from 'react';
import styled from 'styled-components';

const TaskColumnCard = ({ task }) => {
    const [isShow, setIsShow] = useState(false);

    const handleMoveTask = () => {
        console.log('move task');
        return 'hello';
    };

    const handleDeleteTask = () => {
        console.log('delete');
        return 'hello';
    };

    const handleEditTask = () => {
        console.log('edit');
        return 'hello';
    };
    
    return (
        <TaskContainer>
            <Text>{task.title}</Text>
            <GroupsWrapper>
                <InfoGroup>
                    <Image src={task.userURL} alt="user avatar" />
                    <Chip priority={task.priority} />
                </InfoGroup>
                <ButtonGroup>
                    <IconButton
                        iconName={iconNames.arrowCircle}
                        onClick={() => setIsShow(prev => !prev)}
                    />
                    <IconButton
                        iconName={iconNames.pencil}
                        onClick={handleEditTask}
                    />
                    <IconButton
                        iconName={iconNames.trash}
                        onClick={handleDeleteTask}
                    />
                    <Popup isShow={isShow}>
                        <TagWrapper onClick={handleMoveTask}>
                            <TextTag>in progress</TextTag>
                            <Icon name={iconNames.arrowCircle} size={'16'} />
                        </TagWrapper>
                        <TagWrapper onClick={handleMoveTask}>
                            <TextTag>done</TextTag>
                            <Icon name={iconNames.arrowCircle} size={'16'} />
                        </TagWrapper>
                    </Popup>
                </ButtonGroup>
            </GroupsWrapper>
        </TaskContainer>
    );
};

export { TaskColumnCard };

TaskColumnCard.propTypes = {
    task: propTypes.shape({
        text: propTypes.string,
        userURL: propTypes.string,
        priority: propTypes.string,
    }),
};

const TaskContainer = styled.div(({ theme }) => ({
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    // width: '300px',
    height: '110px',
    backgroundColor: theme.color.taskCardColor,
    borderRadius: theme.space.x2 + 'px',
    padding: theme.space.x4 + 'px',
    paddingBottom: theme.space.x5 + 'px',
}));

const Text = styled.p(({ theme }) => ({
    fontSize: theme.space.x4 + 'px',
    lineHeight: theme.space.x5 + 'px',
    fontWeight: 500,
    textOverflow: 'ellipsis',
    overflow: 'hidden',
    whiteSpace: 'nowrap',
    color: theme.color.mainTextColor,
}));

const Image = styled.img(({ theme }) => ({
    width: '32px',
    height: '32px',
    borderRadius: '50%',
    outline: '1.8px solid ' + theme.color.accentColor,
}));

const InfoGroup = styled.div(({ theme }) => ({
    display: 'flex',
    alignItems: 'baseline',
    gap: theme.space.x2 + 'px',
}));

const ButtonGroup = styled.div(({ theme }) => ({
    position: 'relative',
    display: 'flex',
    alignItems: 'center',
    gap: theme.space.x2,
}));

const Popup = styled.div(({ theme, isShow }) => ({
    display: 'grid',
    width: '150px',
    position: 'absolute',
    zIndex: 100,
    top: '150%',
    left: '-130%',
    backgroundColor: theme.color.outletBackgroundColor,
    padding: `${theme.space.x5}px ${theme.space.x6}px`,
    gap: theme.space.x3 + 'px',
    borderRadius: theme.space.x3,
    transform: isShow ? 'scale(1)' : 'scale(0)',
    opacity: isShow ? 1 : 0,
    boxShadow: ' 0px 4px 16px 0px' + theme.color.modalShadow,
    border: '1px solid ' + theme.color.modalBorder,
    pointerEvents: isShow ? 'all' : 'none',
}));

const GroupsWrapper = styled.div(({ theme }) => ({
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'baseline',
}));

const TextTag = styled.p(({ theme }) => ({
    fontSize: theme.space.x4 + 'px',
    lineHeight: theme.space.x5 + 'px',
    fontWeight: 500,
}));

const TagWrapper = styled.div(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    color: theme.color.secondaryTextColor,
    cursor: 'pointer',
    transition: 'color linear 200ms',

    '&:hover': {
        color: theme.color.accentColor,
    },
}));
