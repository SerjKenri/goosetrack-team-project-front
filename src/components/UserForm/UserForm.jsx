import { useState, useRef } from 'react';
import { useDispatch } from 'react-redux';
import { Formik } from 'formik';
import { format } from 'date-fns';
import styled from 'styled-components';

import {
    selectUserName,
    selectUserEmail,
    selectUserPhone,
    selectUserBirthday,
    selectUserAvatar,
    selectUserTelegram,
    selectUserState,
} from '../../redux/auth/auth.selectors';

import { useFormValidation } from 'schemas/userFormValidation';
import { Input } from 'core/kit/Input';
import { Button } from 'core/kit/Button';
import { ButtonDifference } from 'core/kit/Button';
import { UserInfoText, PopupChip, Chip, TextBold } from 'core/kit/text';
import { Icon } from 'core/kit/Icon';
import { iconNames } from 'assets/icons/iconNames';
import { useSelector } from 'react-redux';
import { useMatchMedia } from 'core/hooks/useMatchMedia';
import { logoutUser, updateUser } from 'redux/operations';
import { AuthNavigate } from 'components/AuthNavigate/AuthNavigate';
import { ROUTING } from 'core/utils/constantsRouting';
import { Modal } from 'core/Modal/Modal';
import { useTranslation } from 'react-i18next';
import { toast } from 'react-toastify';

export const UserForm = () => {
    const filePicker = useRef('');
    const dispatch = useDispatch();

    const { isDesktop, isTablet, isMobile } = useMatchMedia();
    const { t } = useTranslation();
    const { userFormSchema } = useFormValidation();

    const name = useSelector(selectUserName);
    const email = useSelector(selectUserEmail);
    const phone = useSelector(selectUserPhone);
    const telegram = useSelector(selectUserTelegram);
    const avatarURL = useSelector(selectUserAvatar);
    const birthday = useSelector(selectUserBirthday) || Date.now();
    console.log(useSelector(selectUserState));
    const formattedDate = format(new Date(birthday), 'yyyy-MM-dd');

    const [userImage, setUserImage] = useState(avatarURL);
    const [avatar, setAvatar] = useState(avatarURL);
    const [isShow, setIsShow] = useState(false);
    const formData = new FormData();
    const handleCloseModal = () => {
        setIsShow(false);
        dispatch(logoutUser());
    };
    const handleChangeAvatar = e => {
        const file = e.target.files[0];
        const objURL = URL.createObjectURL(file);
        setAvatar(objURL);
        setUserImage(file);
    };
    const handleUpload = async () => {
        if (!setUserImage) {
            toast.warning('Please select a file');
            return;
        }
    };
    const handlePick = () => {
        filePicker.current.click();
    };

    return (
        <>
            <Container>
                <Formik
                    initialValues={{
                        avatarURL,
                        name,
                        birthday: formattedDate,
                        email,
                        phone,
                        telegram,
                    }}
                    validationSchema={userFormSchema}
                    onSubmit={(values, { setSubmitting }) => {
                        if (email === values.email) {
                            if (userImage) {
                                formData.append('avatarURL', userImage);
                            }
                            if (values.name) {
                                formData.append('name', values.name);
                            }
                            formData.append('email', values.email);
                            if (values.phone) {
                                formData.append('phone', values.phone);
                            }
                            if (values.birthday) {
                                formData.append('birthDay', values.birthday);
                            }
                            if (values.telegram) {
                                formData.append('messenger', values.telegram);
                            }

                            dispatch(updateUser(formData));
                            // window.location.reload();
                        } else {
                            setIsShow(true);
                            formData.append('email', values.email);
                            if (userImage) {
                                formData.append('avatarURL', userImage);
                            }
                            if (values.name) {
                                formData.append('name', values.name);
                            }
                            if (values.phone) {
                                formData.append('phone', values.phone);
                            }
                            if (values.birthday) {
                                formData.append('birthDay', values.birthday);
                            }
                            if (values.telegram) {
                                formData.append('messenger', values.telegram);
                            }
                            dispatch(updateUser(formData));
                            // location.reload();
                        }

                        setSubmitting(false);
                    }}
                >
                    {formik => (
                        <Form onSubmit={formik.handleSubmit} autoComplete="off">
                            <AvatarWrapper>
                                <AvatarContainer>
                                    <AvatarInput
                                        ref={filePicker}
                                        id="avatar"
                                        type="file"
                                        accept="image/*,.jpg"
                                        name="avatarURL"
                                        onChange={handleChangeAvatar}
                                    />
                                    <AvatarLabel htmlFor="avatar">
                                        {!avatar ? (
                                            <UserIconWrapper>
                                                <Icon
                                                    name={iconNames.avatar}
                                                    size="48px"
                                                    stroke="none"
                                                />
                                            </UserIconWrapper>
                                        ) : (
                                            <AvatarImage
                                                src={avatar}
                                                alt="user avatar"
                                            />
                                        )}
                                    </AvatarLabel>
                                    <PlusIconWrapper onClick={handlePick}>
                                        <Icon
                                            name={iconNames.plus}
                                            size="100%"
                                        />
                                    </PlusIconWrapper>
                                </AvatarContainer>
                            </AvatarWrapper>
                            <NameWrapper>
                                <NameText>{name}</NameText>
                                <UserRoleText>User</UserRoleText>
                            </NameWrapper>
                            <InputWrapper
                                isMobile={isMobile}
                                isDesktop={isDesktop}
                            >
                                <FormInput
                                    labelTitle={t('userProfilePage.userName')}
                                    name="name"
                                    placeholder={t(
                                        'userProfilePage.userNamePlaceholder'
                                    )}
                                    onChange={formik.handleChange}
                                    value={formik.values.name}
                                    {...formik.getFieldProps('name')}
                                    isMobile={isMobile}
                                    touched={formik.touched}
                                    errors={formik.errors}
                                />
                                {formik.touched.name && formik.errors.name ? (
                                    <ErrorMessage>
                                        {formik.errors.name}
                                    </ErrorMessage>
                                ) : null}

                                <FormInput
                                    type="date"
                                    labelTitle={t('userProfilePage.birthday')}
                                    name="birthday"
                                    placeholder={t(
                                        'userProfilePage.userBirthdayPlaceholder'
                                    )}
                                    onChange={formik.handleChange}
                                    value={formik.values.birthday}
                                    {...formik.getFieldProps('birthday')}
                                    isMobile={isMobile}
                                    touched={formik.touched}
                                    errors={formik.errors}
                                />
                                {formik.touched.birthday &&
                                formik.errors.birthday ? (
                                    <ErrorMessage>
                                        {formik.errors.birthday}
                                    </ErrorMessage>
                                ) : null}
                                <FormInput
                                    labelTitle={t('userProfilePage.email')}
                                    name="email"
                                    placeholder={t(
                                        'userProfilePage.userEmailPlaceholder'
                                    )}
                                    onChange={formik.handleChange}
                                    value={formik.values.email}
                                    {...formik.getFieldProps('email')}
                                    isMobile={isMobile}
                                    touched={formik.touched}
                                    errors={formik.errors}
                                />
                                {formik.touched.email && formik.errors.email ? (
                                    <ErrorMessage>
                                        {formik.errors.email}
                                    </ErrorMessage>
                                ) : null}
                                <FormInput
                                    type="phone"
                                    labelTitle={t('userProfilePage.phone')}
                                    name="phone"
                                    placeholder={t(
                                        'userProfilePage.userPhonePlaceholder'
                                    )}
                                    onChange={formik.handleChange}
                                    value={formik.values.phone}
                                    {...formik.getFieldProps('phone')}
                                    isMobile={isMobile}
                                    touched={formik.touched}
                                    errors={formik.errors}
                                />
                                {formik.touched.phone && formik.errors.phone ? (
                                    <ErrorMessage>
                                        {formik.errors.phone}
                                    </ErrorMessage>
                                ) : null}
                                <FormInput
                                    labelTitle={t('userProfilePage.telegram')}
                                    name="telegram"
                                    placeholder={t(
                                        'userProfilePage.userTelegramPlaceholder'
                                    )}
                                    onChange={formik.handleChange}
                                    value={formik.values.telegram}
                                    {...formik.getFieldProps('telegram')}
                                    isMobile={isMobile}
                                    touched={formik.touched}
                                    errors={formik.errors}
                                />
                                {formik.touched.telegram &&
                                formik.errors.telegram ? (
                                    <ErrorMessage>
                                        {formik.errors.telegram}
                                    </ErrorMessage>
                                ) : null}
                            </InputWrapper>
                            <SaveButton
                                differentStyles={ButtonDifference.secondary}
                                title={t('userProfilePage.saveChanges')}
                                type="submit"
                                onSubmit={handleUpload}
                                disabled={formik.isSubmitting}
                                isMobile={isMobile}
                                isTablet={isTablet}
                            />
                        </Form>
                    )}
                </Formik>

                <ChangePassword
                    route={`/${ROUTING.CHANGE_PASS}`}
                    content={t('userProfilePage.changePassword')}
                />
            </Container>
            <Modal
                setIsVisible={handleCloseModal}
                isVisible={isShow}
                closeButton={false}
            >
                <div>
                    <TextBold style={{ textAlign: 'center' }}>
                        {t('userProfilePage.modal.description')}
                    </TextBold>

                    <Button
                        differentStyles={ButtonDifference.secondary}
                        onClick={handleCloseModal}
                        title={t('userProfilePage.modal.titleButton')}
                        buttonStyle={{
                            marginLeft: 'auto',
                            marginRight: 'auto',
                            marginTop: '30px',
                        }}
                    />
                </div>
            </Modal>
        </>
    );
};

const ChangePassword = styled(AuthNavigate).attrs(({ theme }) => ({
    navStyle: { marginTop: '20px' },
}))({});

const Container = styled.div(({ theme, isTablet, isDesktop }) => ({
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    position: 'relative',
    backgroundColor: theme.color.calendarCellColor,
    paddingTop: '40px',
    paddingBottom: isTablet ? '40px' : '60px',
    paddingLeft: 'auto',
    paddingRight: 'auto',
    width: '335px',
    height: '653px',
    borderRadius: '16px',
    [theme.media.between(
        `${theme.breakpoints.m}px`,
        `${theme.breakpoints.l}px`
    )]: {
        width: '704px',
        height: '854px',
        paddingBottom: '40px',
    },
    [theme.media.up(`${theme.breakpoints.l}px`)]: {
        width: '1087px',
        height: '752px',
        paddingTop: '60px',
        paddingBottom: '60px',
    },
}));

const Form = styled.form(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column',
}));

const AvatarWrapper = styled.div(({ theme }) => ({
    width: '124px',
    height: '124px',
    [theme.media.down(`${theme.breakpoints.m}px`)]: {
        position: 'absolute',
        top: '-6%',
        left: '50%',
        transform: 'translatex(-50%)',
        width: '72px',
        height: '72px',
    },
}));

const SaveButton = styled(Button).attrs(({ theme, isTablet, isMobile }) => ({
    buttonStyle: {
        width: isMobile ? '195px' : isTablet ? '262px' : '262px',
        height: isMobile ? '46px' : isTablet ? '48px' : '48px',
        borderRadius: '16px',
    },
}))({});

const NameWrapper = styled.div(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column',
    gap: '4px',
    marginTop: '14px',
    marginBottom: '40px',
    [theme.media.up(`${theme.breakpoints.l}px`)]: {
        marginBottom: '44px',
    },
}));
const NameText = styled(UserInfoText)(({ theme }) => ({
    [theme.media.up(`${theme.breakpoints.m}px`)]: {
        fontSize: '18px',
    },
}));
const UserRoleText = styled(PopupChip)(({ theme }) => ({
    [theme.media.up(`${theme.breakpoints.m}px`)]: {
        fontSize: '14px',
        fontWeight: '1.3',
    },
    color: theme.color.labelColor,
}));

const InputWrapper = styled.div(({ theme, isMobile, isDesktop }) => ({
    display: 'flex',
    alignItems: 'center',
    flexWrap: 'wrap',
    flexDirection: 'column',
    gap: isMobile ? '18px' : '24px',
    marginBottom: !isDesktop ? '40px' : '88px',
    width: !isDesktop ? '299px' : '758px',
    height: isDesktop && '264px',
}));

const FormInput = styled(Input).attrs(
    ({ theme, isMobile, errors, touched }) => ({
        inputStyle: {
            outline: 'none',
            border:
                !errors && !touched
                    ? '1px solid' + theme.color.taskHighColor
                    : '1px solid' + theme.color.modalBorder,
            backgroundColor: theme.color.calendarCellColor,
            width: isMobile ? '299px' : '354px',
            height: isMobile ? '42px' : '46px',
            fontSize: isMobile ? '14px' : '16px',
            lineHeight: isMobile ? '1.3' : '1.125',
            color: theme.color.mainTextColor,
        },
        labelTextStyle: {
            fontSize: isMobile ? '12px' : '14px',
            lineHeight: isMobile ? '1.16' : '1.3',
            fontWeight: '400',
        },
    })
)({});
const AvatarContainer = styled.div(({ theme }) => ({
    position: 'relative',

    width: '100%',
    height: '100%',

    borderRadius: '50%',
    border: `2px solid ${theme.color.accentColor}`,
}));

const AvatarInput = styled.input({
    opacity: '0',
    height: '0',
    width: '0',
    lineHeight: '0',
    overflow: 'hidden',
    padding: '0',
    margin: '0',
});
const AvatarLabel = styled.label({
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%,-50%)',

    width: 'inherit',
    height: 'inherit',
    borderRadius: '50%',
});
const UserIconWrapper = styled.div(({ theme }) => ({
    width: 'inherit',
    height: 'inherit',

    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',

    color: theme.color.accentTextColor,
}));
const AvatarImage = styled.img({
    width: 'inherit',
    height: 'inherit',
    borderRadius: '50%',

    objectFit: 'cover',
});
const PlusIconWrapper = styled.div(({ theme }) => ({
    position: 'absolute',
    bottom: '0',
    right: '10%',

    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',

    width: '14px',
    height: '14px',
    borderRadius: '50%',

    color: theme.color.btnTextColor,
    backgroundColor: theme.color.accentColor,
    [theme.media.up(`${theme.breakpoints.m}px`)]: {
        width: '24px',
        height: '24px',
    },
}));

const ErrorMessage = styled(Chip)(({ theme }) => ({
    color: theme.color.taskHighColor,
    fontSize: '12px',
    marginTop: '-1%',
}));
