import styled from "styled-components";
import propTypes from "prop-types";

const Container = styled.div(({ theme, priority }) => ({
  display: "flex",
  flexDirection: "row",
  justifyContent: "center",
  alignItems: "center",
  padding: "4px 12px",
  gap: "149px",
  borderRadius: "4px",
  backgroundColor:
    priority === "Low"
      ? theme.color.taskLowColor
      : priority === "Medium"
      ? theme.color.taskMedColor
      : theme.color.taskHighColor,
  color: "#f7f6f9",
  fontFamily: "Inter",
  fontWeight: "600",
  fontSize: "10px",
  lineHeight: "12px",
  textAlign: "center",
}));

export const Chip = ({ priority }) => {
  return <Container priority={priority}>{priority}</Container>;
};

Chip.propTypes = {
  priority: propTypes.oneOf(["Low", "Medium", "High"]).isRequired,
};
