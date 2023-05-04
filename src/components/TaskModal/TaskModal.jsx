import styled from 'styled-components';
import { TaskForm } from 'components/TaskForm/TaskForm';
import { Modal } from 'core/Modal/Modal';
import { useMatchMedia } from 'core/hooks/useMatchMedia';

const TaskModal = ({ columnId, isShow, closeModal, currentTask }) => {
    const { isDesktop, isTablet, isMobile } = useMatchMedia();
    return (
        columnId && (
            <TaskModalWindow
                setIsVisible={closeModal}
                isVisible={isShow}
                isDesktop={isDesktop}
                isTablet={isTablet}
                isMobile={isMobile}
            >
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

const TaskModalWindow = styled(Modal).attrs(
    ({ theme, isMobile, isTablet }) => ({
        modalWindowStyle: {
            borderRadius: '8px',
            border: '1px solid rgba(220, 227, 229, 0.8)',
            boxShadow: '0px 4px 16px rgba(17, 17, 17, 0.1)',
            backgroundColor: theme.color.mainBackgroundColor,
            width: !isMobile ? '396px' : '303px',
            height: !isMobile ? '360px' : '336px',
        },
        modalContentStyle: {
            padding: '0',
        },
    })
)({});
