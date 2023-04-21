import { useEffect } from "react";
import { createPortal } from "react-dom";
import styled from "styled-components";

const modalRoot = document.querySelector("#modal-root");

const Modal = ({
  modalWindowStyle,
  isVisible,
  setIsVisible,
  children,
  closeButton = true,
  modalContentStyle,
}) => {
  useEffect(() => {
    const onEscapeClose = (e) => {
      if (e.code === "Escape") {
        setIsVisible();
      }
    };

    document.addEventListener("keydown", onEscapeClose);
    return () => document.removeEventListener("keydown", onEscapeClose);
  }, [setIsVisible]);

  const handleCloseModal = (e) => {
    const { target, currentTarget } = e;

    if (target === currentTarget) {
      setIsVisible();
    }
  };

  const modal = (
    <Backdrop onClick={handleCloseModal}>
      <ModalWindow style={modalWindowStyle}>
        {closeButton && (
          <ModalButton type="button" onClick={setIsVisible}>
            icon
          </ModalButton>
        )}
        <ModalContent style={modalContentStyle}>{children}</ModalContent>
      </ModalWindow>
    </Backdrop>
  );

  return isVisible ? createPortal(modal, modalRoot) : null;
};

export { Modal };

const Backdrop = styled.div(({ theme }) => ({
  width: "100vw",
  height: "100vh",
  position: "fixed",
  top: "0px",
  zIndex: "120",
  visibility: "visible",
  opacity: "1",
  backgroundColor: theme.color.modalBorder,
}));

const ModalWindow = styled.div(({ theme }) => ({
  minWidth: "320px",
  maxWidth: "900px",
  maxHeight: "90vh",
  position: "absolute",
  top: "50%",
  left: "50%",
  overflow: "hidden",
  transform: "translate(-50%, -50%)",
  border: `1px solid ${theme.color.modalBorder}`,
  borderRadius: theme.space.x1,
  backgroundColor: theme.color.outletBackgroundColor,
}));

const ModalContent = styled.div(({ theme }) => ({
  maxHeight: "69vh",
  overflowY: "auto",
  padding: `${theme.space.x10}px ${theme.space.x7}px`,
}));

const ModalButton = styled.button(({ theme }) => ({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  width: "30px",
  height: "30px",
  padding: 0,
  position: "absolute",
  top: theme.space.x3,
  right: theme.space.x3,
  color: "black",
  backgroundColor: "transparent",
  borderRadius: "50%",
  border: "1px solid transparent",
  cursor: "pointer",
}));
