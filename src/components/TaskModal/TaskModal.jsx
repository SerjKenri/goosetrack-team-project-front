const { TaskForm } = require('components/TaskForm/TaskForm');
const { Modal } = require('core/Modal/Modal');

const TaskModal = ({ columnId, isShow, closeModal, currentTask }) => {

    return columnId && (
        <Modal setIsVisible={closeModal} isVisible={isShow}>
            <TaskForm
                columnId={columnId}
                currentTask={currentTask }
                closeModal={closeModal}
            />
        </Modal>
    );
};

export { TaskModal };
