import styled from "styled-components";
import propTypes from "prop-types";
import { Icon } from "./Icon";
import { iconNames } from "assets/icons/iconNames";
// example
// <IconButton iconName={iconNames.arrowCircle} buttonSize={32} />

const IconButton = ({ onClick, disabled = false, iconName, buttonStyle, buttonSize = 16 }) => {
  return (
    <>
      <ButtonWrapper
        style={buttonStyle}
        onClick={onClick}
        disabled={disabled}
        buttonSize={buttonSize}
      >
        <Icon name={iconName} size={"100%"} />
      </ButtonWrapper>
    </>
  );
};

export { IconButton };

IconButton.propTypes = {
  onClick: propTypes.func.isRequired,
  disabled: propTypes.bool,
  iconName: propTypes.oneOf(Object.values(iconNames)).isRequired,
  buttonStyle: propTypes.object,
  buttonSize: propTypes.number,
};

const ButtonWrapper = styled.button(({ theme, buttonSize }) => ({
  color: theme.color.iconColor,
  backgroundColor: "transparent",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  width: buttonSize + "px",
  height: buttonSize + "px",
  border: "0px solid transparent",
  borderRadius: "50%",
  padding: theme.space.x0,
  cursor: "pointer",
  // to do hover ?
  //'&:hover':{}
}));
