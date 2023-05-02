import { iconNames } from 'assets/icons/iconNames';
import { TaskModal } from 'components/TaskModal/TaskModal';
import { Chip } from 'core/kit/Chip';
import { Icon } from 'core/kit/Icon';
import { IconButton } from 'core/kit/IconButton';
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectUserAvatar } from 'redux/auth/auth.selectors';
import { delTask } from 'redux/operations';
import styled from 'styled-components';

function TaskColumnCard({
    task,
    isDragging,
    isGroupedOver,
    provided,
    isClone,
    index,
}) {
    const userURL = useSelector(selectUserAvatar);
    const [isShow, setIsShow] = useState(false);
    const dispatch = useDispatch();

    const handleDeleteTask = id => {
        console.log(id);
        if (id) {
            dispatch(delTask(id));

            return;
        }
    };

    const handleEditTask = () => {
        setIsShow(true);
        return;
    };
    const handleCloseModal = () => {
        setIsShow(false);
    };
    return (
        <>
            <TaskContainer
                href={task._id}
                isDragging={isDragging}
                isGroupedOver={isGroupedOver}
                isClone={isClone}
                ref={provided.innerRef}
                {...provided.draggableProps}
                {...provided.dragHandleProps}
                data-is-dragging={isDragging}
                data-testid={task.id}
                data-index={index}
            >
                <Text>{task.title}</Text>
                <GroupsWrapper>
                    <InfoGroup>
                        {userURL ? (
                            <Image src={userURL} alt="user avatar" />
                        ) : (
                            <Icon size={'30'} name={iconNames.avatar} />
                        )}
                        <Chip priority={task.priority} />
                    </InfoGroup>
                    <ButtonGroup>
                        <IconButton
                            buttonSize={24}
                            iconName={iconNames.pencil}
                            onClick={handleEditTask}
                        />
                        <IconButton
                            buttonSize={24}
                            iconName={iconNames.trash}
                            onClick={() => handleDeleteTask(task._id)}
                        />
                    </ButtonGroup>
                </GroupsWrapper>
            </TaskContainer>
            <TaskModal
                columnId={task.columnId}
                currentTask={task}
                closeModal={handleCloseModal}
                isShow={isShow}
            />
        </>
    );
}

export default React.memo(TaskColumnCard);

const TaskContainer = styled.div(({ theme }) => ({
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
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

// const Popup = styled.div(({ theme, isShow }) => ({
//     display: 'grid',
//     width: '150px',
//     position: 'absolute',
//     zIndex: 100,
//     top: '150%',
//     left: '-130%',
//     backgroundColor: theme.color.outletBackgroundColor,
//     padding: `${theme.space.x5}px ${theme.space.x6}px`,
//     gap: theme.space.x3 + 'px',
//     borderRadius: theme.space.x3,
//     transform: isShow ? 'scale(1)' : 'scale(0)',
//     opacity: isShow ? 1 : 0,
//     boxShadow: ' 0px 4px 16px 0px' + theme.color.modalShadow,
//     border: '1px solid ' + theme.color.modalBorder,
//     pointerEvents: isShow ? 'all' : 'none',
// }));

const GroupsWrapper = styled.div(({ theme }) => ({
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'baseline',
}));

// const TextTag = styled.p(({ theme }) => ({
//     fontSize: theme.space.x4 + 'px',
//     lineHeight: theme.space.x5 + 'px',
//     fontWeight: 500,
// }));

// const TagWrapper = styled.div(({ theme }) => ({
//     display: 'flex',
//     alignItems: 'center',
//     justifyContent: 'space-between',
//     color: theme.color.secondaryTextColor,
//     cursor: 'pointer',
//     transition: 'color linear 200ms',

//     '&:hover': {
//         color: theme.color.accentColor,
//     },
// }));
