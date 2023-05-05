import { useTranslation } from 'react-i18next';
import styled from 'styled-components';

const LangaguesBar = () => {
    const LANGAGUES = ['en', 'ua'];
    const { i18n } = useTranslation();

    console.log(i18n.resolvedLanguage)

    return (
        <div>
            <Wrapper>
                {LANGAGUES.map(langague => {
                    return (
                        <li key={langague}>
                            <StyledButton
                                id={
                                    i18n.resolvedLanguage === langague
                                        ? 'selectedLang'
                                        : 'langId'
                                }
                                onClick={() => i18n.changeLanguage(langague)}
                                className={i18n.resolvedLanguage === langague && 'active'}
                            >
                                {langague}
                            </StyledButton>
                        </li>
                    );
                })}
            </Wrapper>
        </div>
    );
};

export { LangaguesBar };

const StyledButton = styled.button`
    box-sizing: border-box;
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    background-color: transparent;
    border: 2px solid #e74c3c;
    border-radius: 0.6em;
    cursor: pointer;
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    -webkit-align-self: center;
    -ms-flex-item-align: center;
    align-self: center;
    font-size: 0.6rem;
    font-weight: 400;
    line-height: 1;
    margin: 3px;
    padding: 1em 1em;
    text-decoration: none;
    text-align: center;
    text-transform: uppercase;
    font-family: 'Inter', sans-serif;
    font-weight: 700;
    border-color: #3498db;
    color: ${props => props.theme.color.mainTextColor};
    box-shadow: 0 0 15px 15px
            ${props => props.theme.color.accentBackgroundColor} inset,
        0 0 0 0 #3498db;
    -webkit-transition: all 150ms ease-in-out;
    transition: all 150ms ease-in-out;
    font-family: Georgia;
    :hover,
    :focus,
    &.active {
        color: ${props => props.theme.color.iconColor};
        box-shadow: 0 0 5px 0 #3498db inset, 0 0 5px 2px #3498db;
    }
`;

const Wrapper = styled.ul`
    display: flex;
`;
