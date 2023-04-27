import { useState, useRef } from 'react';
import { useDispatch } from 'react-redux';
import { Formik } from 'formik';
import { format } from 'date-fns';
import styled from 'styled-components';

import {
    selectUserId,
    selectUserName,
    selectUserEmail,
    selectUserPhone,
    selectUserBirthday,
    selectUserAvatar,
    selectUserTelegram,
} from '../../redux/auth/auth.selectors';

import { userFormSchema } from 'schemas/userFormValidation';
import { Input } from 'core/kit/Input';
import { Button } from 'core/kit/Button';
import { ButtonDifference } from 'core/kit/Button';
import { UserInfoText, PopupChip, Chip } from 'core/kit/text';
import { Icon } from 'core/kit/Icon';
import { iconNames } from 'assets/icons/iconNames';
import { useSelector } from 'react-redux';
import { updateUser } from 'redux/operations';

export const UserForm = () => {
    const filePicker = useRef(null);
    const dispatch = useDispatch();
    const id = useSelector(selectUserId);
    const name = useSelector(selectUserName);
    const email = useSelector(selectUserEmail);
    const phone = useSelector(selectUserPhone);
    const telegram = useSelector(selectUserTelegram);
    const avatar = useSelector(selectUserAvatar);
    const birthday = useSelector(selectUserBirthday) || Date.now();

    const formattedDate = format(new Date(birthday), 'yyyy-MM-dd');
    const [userImage, setUserImage] = useState(avatar);
    const formData = new FormData();

    const handleChangeAvatar = e => {
        const file = e.target.files[0];
        let blob = new Blob([file], { type: 'image/jpeg' });
        const objURL = URL.createObjectURL(blob);
        setUserImage(objURL);
    };
    const handleUpload = async () => {
        if (!setUserImage) {
            alert('Please select a file');
            return;
        }
        formData.append('file', userImage);
    };
    const handlePick = () => {
        filePicker.current.click();
    };
    return (
        <Container>
            <Formik
                initialValues={{
                    username: name,
                    birthday: formattedDate,
                    email: email,
                    phone: phone,
                    telegram: telegram,
                }}
                validationSchema={userFormSchema}
                onSubmit={async (values, { setSubmitting }) => {
                    console.log('values ', values);
                    formData.append('username', values.username);
                    formData.append('birthday', values.birthday);
                    formData.append('email', values.email);
                    formData.append('phone', values.phone);
                    formData.append('telegram', values.telegram);

                    await dispatch(updateUser(id, formData)).unwrap();

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
                                    name="avatar"
                                    onChange={handleChangeAvatar}
                                    value={avatar}
                                />
                                <AvatarLabel htmlFor="avatar">
                                    {!userImage ? (
                                        <UserIconWrapper>
                                            <Icon
                                                name={iconNames.avatar}
                                                size="48px"
                                                stroke="none"
                                            />
                                        </UserIconWrapper>
                                    ) : (
                                        <AvatarImage
                                            src={userImage}
                                            alt="user avatar"
                                        />
                                    )}
                                </AvatarLabel>
                                <PlusIconWrapper onClick={handlePick}>
                                    <Icon name={iconNames.plus} size="100%" />
                                </PlusIconWrapper>
                            </AvatarContainer>
                        </AvatarWrapper>
                        <NameWrapper>
                            <NameText>Nadiia</NameText>
                            <UserRoleText>User</UserRoleText>
                        </NameWrapper>
                        <InputWrapper>
                            <FormInput
                                labelTitle="User Name"
                                name="username"
                                placeholder="Enter your name"
                                onChange={formik.handleChange}
                                value={formik.values.username}
                                {...formik.getFieldProps('username')}
                            />
                            {formik.touched.username &&
                            formik.errors.username ? (
                                <ErrorMessage>
                                    {formik.errors.username}
                                </ErrorMessage>
                            ) : null}

                            <FormInput
                                type="date"
                                labelTitle="Birthday"
                                name="birthday"
                                placeholder="25.04.2023"
                                onChange={formik.handleChange}
                                value={formik.values.birthday}
                                {...formik.getFieldProps('birthday')}
                            />
                            {formik.touched.birthday &&
                            formik.errors.birthday ? (
                                <ErrorMessage>
                                    {formik.errors.birthday}
                                </ErrorMessage>
                            ) : null}
                            <FormInput
                                labelTitle="Email"
                                name="email"
                                placeholder="Enter your email"
                                onChange={formik.handleChange}
                                value={formik.values.email}
                                {...formik.getFieldProps('email')}
                            />
                            {formik.touched.email && formik.errors.email ? (
                                <ErrorMessage>
                                    {formik.errors.email}
                                </ErrorMessage>
                            ) : null}
                            <FormInput
                                type="phone"
                                labelTitle="Phone"
                                name="phone"
                                placeholder="Enter your phone"
                                onChange={formik.handleChange}
                                value={
                                    !formik.values.phone
                                        ? ''
                                        : formik.values.phone
                                }
                                {...formik.getFieldProps('phone')}
                            />
                            {formik.touched.phone && formik.errors.phone ? (
                                <ErrorMessage>
                                    {formik.errors.phone}
                                </ErrorMessage>
                            ) : null}
                            <FormInput
                                labelTitle="Telegram"
                                name="telegram"
                                placeholder="Enter your telegram"
                                onChange={formik.handleChange}
                                value={
                                    !formik.values.telegram
                                        ? ''
                                        : formik.values.telegram
                                }
                                {...formik.getFieldProps('telegram')}
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
                            title="Save changes"
                            type="submit"
                            onSubmit={handleUpload}
                            disabled={formik.isSubmitting}
                        />
                    </Form>
                )}
            </Formik>
        </Container>
    );
};

const Container = styled.div(({ theme }) => ({
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    position: 'relative',
    backgroundColor: theme.color.btnTextColor,
    paddingTop: '40px',
    paddingBottom: '60px',
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

const SaveButton = styled(Button).attrs(({ theme }) => ({
    buttonStyle: {
        width: '195px',
        height: '46px',
        borderRadius: '16px',
        [theme.media.up(`${theme.breakpoints.m}px`)]: {
            width: '262px',
            height: '48px',
        },
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
}));

const InputWrapper = styled.div(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    flexWrap: 'wrap',
    flexDirection: 'column',
    gap: '18px',
    marginBottom: '40px',

    width: '299px',

    [theme.media.between(
        `${theme.breakpoints.m}px`,
        `${theme.breakpoints.l}px`
    )]: {
        gap: '24px',
    },
    [theme.media.up(`${theme.breakpoints.l}px`)]: {
        gap: '24px',
        width: '758px',
        height: '264px',
        marginBottom: '88px',
    },
}));

const FormInput = styled(Input).attrs(({ theme }) => ({
    inputStyle: {
        outline: 'none',
        border: '1px solid' + theme.color.modalBorder,
        backgroundColor: theme.color.btnTextColor,
        width: '299px',
        height: '42px',
        fontSize: '14px',
        lineHeight: '1.3',
        color: theme.color.mainTextColor,
        [theme.media.up(`${theme.breakpoints.m}px`)]: {
            fontSize: '16px',
            lineHeight: '1.125',
            width: '354px',
            height: '46px',
        },
    },
    labelTextStyle: {
        fontSize: '12px',
        lineHeight: '1.16',
        fontWeight: '400',
        [theme.media.up(`${theme.breakpoints.m}px`)]: {
            fontSize: '14px',
            lineHeight: '1.3',
        },
    },
}))({});
const AvatarContainer = styled.div(({ theme }) => ({
    position: 'relative',

    width: '100%',
    height: '100%',

    borderRadius: '50%',
    border: `2px solid ${theme.color.accentTextColor}`,
}));

const AvatarInput = styled.input({
    visibility: 'hidden',
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
    backgroundColor: theme.color.accentTextColor,
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
