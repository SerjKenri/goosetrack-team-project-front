import propTypes from "prop-types";

import {
  IconContainer,
  Title,
  ButtonWrapper,
  Container,
} from "./Button.styled.js";

// import { Icon } from "./Icon";

const Button = ({
  differentStyles,
  title,
  onClick,
  disabled = false,
  icon,
  buttonStyle,
  textStyle,
  iconColor = "inherit",
  iconName,
  iconSize,
}) => {
  return (
    <Container>
      <ButtonWrapper
        style={buttonStyle}
        onClick={onClick}
        disabled={disabled}
        differentStyles={differentStyles}
      >
        {icon && (
          <IconContainer>
            {/* <Icon name={iconName} color={iconColor} size={iconSize} /> */}
          </IconContainer>
        )}

        <Title
          differentStyles={differentStyles}
          disabled={disabled}
          style={textStyle}
        >
          {title}
        </Title>
      </ButtonWrapper>
    </Container>
  );
};

export default Button;
