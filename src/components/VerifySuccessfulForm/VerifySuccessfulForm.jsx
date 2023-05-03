import { useDispatch } from 'react-redux';
import styled from 'styled-components';
import GooseLogIn from '../../assets/images/goose-login.png';
import GooseLogIn2x from '../../assets/images/goose-login@2x.png';
import { ROUTING } from 'core/utils/constantsRouting';
import { useTranslation } from 'react-i18next';
import { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { verifyUser } from 'redux/operations';
import { Button, ButtonDifference } from 'core/kit/Button';

export const VerifySuccessfulForm = () => {
    const dispatch = useDispatch();
    // const navigate = useNavigate();
    const { t } = useTranslation();
    const { verificationToken } = useParams();

    useEffect(() => {
        dispatch(verifyUser(verificationToken));
    });

    return (
        <VerifySuccessWrap>
            <VerifySuccessContainer>
                <VerifySuccessForm>
                    <VerifySuccessFormTitle>
                        {t('VerifySuccessPage.labelTitleName')}
                    </VerifySuccessFormTitle>
                    <VerifySuccessText>
                        {t('VerifySuccessPage.description')}
                    </VerifySuccessText>

                    <Link to={ROUTING.LOGIN}>
                        <Button
                            type="button"
                            differentStyles={ButtonDifference.primary}
                            // disabled={ }
                            title={t('VerifySuccessPage.btnTitle')}
                            buttonStyle={{
                                backgroundColor: '#3e85f3',
                                width: '287px',
                                height: '46px',
                                marginTop: '32px',
                                marginLeft: 'auto',
                                marginRight: 'auto',
                            }}
                            textStyle={{
                                margin: '0',
                            }}
                        ></Button>
                    </Link>
                </VerifySuccessForm>
                <LoginGooseImg
                    srcset={`${GooseLogIn} 1x, ${GooseLogIn2x} 2x`}
                    src={`${GooseLogIn}`}
                    alt="goose"
                />
            </VerifySuccessContainer>
        </VerifySuccessWrap>
    );
};

const VerifySuccessWrap = styled.div(({ theme }) => ({
    height: '100vh',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: theme.color.authBackgroundColor,
}));

const VerifySuccessContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
`;

const VerifySuccessForm = styled.div(({ theme }) => ({
    display: 'flex',
    flexDirection: 'column',
    padding: '40px 24px',
    width: '335px',
    marginBottom: '18px',
    backgroundColor: theme.color.mainBackgroundColor,
    borderRadius: '8px',

    [theme.media.up(`${theme.breakpoints.m}px`)]: {
        padding: '40px',
        width: '580px',
        marginBottom: '24px',
    },
}));

const VerifySuccessFormTitle = styled.h1`
    ${({ theme }) => `
        text-align: center;
        font-weight: 600;
        font-size: 34px;
        line-height: 46px;
        color: ${theme.color.accentTextColor};
        text-shadow: 0px 47px 355px rgba(0, 0, 0, 0.07)
        0px 9.4px 57.6875px rgba(0, 0, 0, 0.035);
        margin-bottom: 82px;
        
        @media (min-width: 768px) {
            font-size:44px;
        }`}
`;

const VerifySuccessText = styled.p`
    ${({ theme }) => `
        text-align: center;
        font-family: ${theme.font.mainFont},
        font-weight: 400;
        font-size: 14px;
        line-height: 20px;
        color: ${theme.color.calendarDateColor};
        text-shadow: 0px 47px 355px rgba(0, 0, 0, 0.07)
        0px 9.4px 57.6875px rgba(0, 0, 0, 0.035);
        margin-bottom: 52px;
        text-aling: center;

        @media (min-width: 768px) {
            font-size: 18px;
        }`}
`;

const LoginGooseImg = styled.img`
    display: none;

    @media (min-width: 1440px) {
        position: fixed;
        width: 368px;
        height: 521px;
        right: 20px;
        bottom: 20px;
        display: block;
    }
`;
