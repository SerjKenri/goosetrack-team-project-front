const { default: styled } = require("styled-components");

export const ButtonDifference = {
  // Для кнопок: LogOut, Login, SignUp:
  primary: "primary",

  // Для кнопок: Add,Edit, Save changes:
  secondary: "secondary",

  // Для кнопки:Cancel:
  cancel: "cancel",

  // копі-паст це:
  // import { ButtonDifference } from "core/kit/Button/Button.styled";
  // прописати сюди:
  // //  <Button
  //       differentStyles={ButtonDifference.secondary}
  //       title="hello"
  //       onClick
  //       icon
  //       buttonStyle
  //       textStyle
  //       // iconName={iconNames.loginIcon}
  //     ></Button>
};

// export const StyledButton = styled.button`

//
//   border: none;
//   border-radius: 16px;
//
//   padding: 16px 23px;
//   /* gap: 11px; */

//   font-family: "Inter";
//   font-style: normal;
//   font-weight: 600;
//   font-size: 18px;
//   line-height: 133%;
//   letter-spacing: -0.02em;
//   color: white;
// `;
// export const StyledBtnName = styled.button`
//   cursor: pointer;

//   background: #3e85f3;
//   box-shadow: 4px 2px 16px rgba(136, 165, 191, 0.48);
//   border: none;
//   border-radius: 16px;
// `;

export const Container = styled.div({
  flexDirection: "row",
  justifyContent: "center",
});

export const ButtonWrapper = styled.button(
  ({ differentStyles, disabled, theme }) => ({
    display: "flex",
    flexDirection:
      differentStyles === ButtonDifference.primary ? "row-reverse" : "row",
    justifyContent: "center",
    alignItems: "center",
    boxSizing: "border-box",

    height: theme.space.x10,
    borderRadius:
      differentStyles === ButtonDifference.primary
        ? theme.space.x4
        : theme.space.x2,

    paddingLeft: theme.space.x6,
    paddingRight: theme.space.x6,
    paddingTop: theme.space.x4,
    paddingBottom: theme.space.x4,

    background: disabled
      ? theme.color.taskCancelColor
      : theme.color.accentBackgroundColor,
    border: "none",
    cursor: "pointer",

    boxShadow:
      differentStyles === ButtonDifference.primary
        ? "4px 2px 16px rgba(136, 165, 191, 0.48)"
        : "none",

    // "&:hover": {
    //   background:
    //     appearance === ButtonAppearance.primary
    //       ? theme.color.mainLightHovered
    //       : theme.color.whiteHovered,
    //   transition: "0.2s ease-in",
    // },
    // "&:active": {
    //   transition: "0.2s ease-in",
    //   border:
    //     appearance === ButtonAppearance.primary
    //       ? 2px solid ${theme.color.primaryActiveBorder}
    //       : 2px solid ${theme.color.secondaryActiveBorder},
    // },
  })
);

export const Title = styled.p(({ differentStyles, disabled, theme }) => {
  console.log(differentStyles);
  return {
    fontFamily: theme.font.mainFont,
    fontStyle: "normal",
    fontWeight: "600",
    fontSize: differentStyles === ButtonDifference.primary ? "18px" : "14px",
    lineHeight: differentStyles === ButtonDifference.primary ? "133%" : "129%",
    letterSpacing: "-0.02em",
    // color: theme.color.btnTextColor,
    margin:
      differentStyles === ButtonDifference.primary
        ? "0 11px 0 0"
        : " 0 0  0 8px",
    padding: 0,
    color: disabled
      ? theme.color.inactiveBtnTextColor
      : differentStyles === ButtonDifference.cancel
      ? "#111111"
      : theme.color.btnTextColor,
  };
});

export const IconContainer = styled.div(({ theme }) => ({
  // border: "2px solid red",
  // marginRight: theme.space.x1,
  // marginTop: theme.space.x1,
}));
