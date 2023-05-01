const { TaskForm } = require("components/TaskForm/TaskForm");
const { Modal } = require("core/Modal/Modal");

const TaskModal = ({ isShow, closeModal, currentTask }) => {
    return (
        <Modal setIsVisible={closeModal} isVisible={isShow}>
            <TaskForm currentTask={currentTask} closeModal={closeModal} />
        </Modal>
    );
};

export {TaskModal}