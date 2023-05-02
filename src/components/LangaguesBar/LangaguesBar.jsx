import { useTranslation } from 'react-i18next';
import styled from 'styled-components';

const LangaguesBar = () => {
    const LANGAGUES = ['en', 'ua'];
    const { i18n } = useTranslation();

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
    font-family: 'Montserrat', sans-serif;
    font-weight: 700;
    border-color: #3498db;
    color: rgb(255, 255, 255);
    box-shadow: 0 0 40px 40px #3498db inset, 0 0 0 0 #3498db;
    -webkit-transition: all 150ms ease-in-out;
    transition: all 150ms ease-in-out;
    font-family: Georgia;
    :hover,
    :focus,
    :active {
        color: #3498db;
        box-shadow: 0 0 10px 0 #3498db inset, 0 0 10px 4px #3498db;
    }
`;

const Wrapper = styled.ul`
    display: flex;
`;
