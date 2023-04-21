import styled from "styled-components";
import propTypes from "prop-types";

export const Chip = ({ priority }) => {
  if (priority === "low") return <LowContainer>Low</LowContainer>;
  if (priority === "med") return <MedContainer>Medium</MedContainer>;
  if (priority === "high") return <HighContainer>High</HighContainer>;
};

Chip.propTypes = {
  priority: propTypes.string.isRequired,
};

export const LowContainer = styled.div(({ theme }) => ({
  display: "flex",
  flexDirection: "row",
  justifyContent: "center",
  alignItems: "center",
  padding: "4px 12px",
  gap: "149px",
  borderRadius: "4px",
  backgroundColor: theme.color.taskLowColor,
  color: "#f7f6f9",
  fontFamily: "Inter",
  fontWeight: "600px",
  fontSize: "10px",
  lineHeight: "12px",
  textAlign: "center",
}));

export const MedContainer = styled.div(({ theme }) => ({
  display: "flex",
  flexDirection: "row",
  justifyContent: "center",
  alignItems: "center",
  padding: "4px 12px",
  gap: "149px",
  borderRadius: "4px",
  backgroundColor: theme.color.taskMedColor,
  color: "#f7f6f9",
  fontFamily: "Inter",
  fontWeight: "600px",
  fontSize: "10px",
  lineHeight: "12px",
  textAlign: "center",
}));

export const HighContainer = styled.div(({ theme }) => ({
  display: "flex",
  flexDirection: "row",
  justifyContent: "center",
  alignItems: "center",
  padding: "4px 12px",
  gap: "149px",
  borderRadius: "4px",
  backgroundColor: theme.color.taskHighColor,
  color: "#f7f6f9",
  fontFamily: "Inter",
  fontWeight: "600px",
  fontSize: "10px",
  lineHeight: "12px",
  textAlign: "center",
}));
