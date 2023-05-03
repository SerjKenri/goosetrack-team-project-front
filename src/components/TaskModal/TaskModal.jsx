import styled from 'styled-components';

const { TaskForm } = require('components/TaskForm/TaskForm');
const { Modal } = require('core/Modal/Modal');

const TaskModal = ({ columnId, isShow, closeModal, currentTask }) => {
    return (
        columnId && (
            <TaskModalWindow setIsVisible={closeModal} isVisible={isShow}>
                <TaskForm
                    columnId={columnId}
                    currentTask={currentTask}
                    closeModal={closeModal}
                />
            </TaskModalWindow>
        )
    );
};

export { TaskModal };

const TaskModalWindow = styled(Modal).attrs(({ theme }) => ({
    modalWindowStyle: {
        border: '1px solid rgba(220, 227, 229, 0.8)',
        boxShadow: '0px 4px 16px rgba(17, 17, 17, 0.1)',
        padding: '40px 28px',
    },
}))({});
