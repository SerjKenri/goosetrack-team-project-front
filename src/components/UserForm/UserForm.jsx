import { Formik } from 'formik';
import styled from 'styled-components';
import { userFormSchema } from 'schemas/userFormValidation';

import { Avatar } from 'core/kit/Avatar';
import { Input } from 'core/kit/Input';
import { UserInfoText, PopupChip } from 'core/kit/text';
import { Button } from 'core/kit/Button';
import { ButtonDifference } from 'core/kit/Button';

export const UserForm = () => {
    const handleSubmit = values => {
        console.log(values);
    };
    return (
        <Container>
            <AvatarWrapper>
                <Avatar size="100%" plusIcon />
            </AvatarWrapper>
            <Formik
                initialValues={{
                    name: '',
                    birthday: '',
                    email: '',
                    phone: '',
                    skype: '',
                }}
                validationSchema={userFormSchema}
                onSubmit={handleSubmit}
            >
                {({
                    values,
                    errors,
                    handleSubmit,
                    handleChange,
                    isValid,
                    handleBlur,
                    touched,
                }) => (
                    <Form onSubmit={handleSubmit} autoComplete="off">
                        <NameWrapper>
                            <NameText>Nadiia</NameText>
                            <UserRoleText>User</UserRoleText>
                        </NameWrapper>
                        <InputWrapper>
                            <FormInput
                                labelTitle="User Name"
                                name="name"
                                placeholder="Enter your name"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.name}
                            />
                            <FormInput
                                type="date"
                                labelTitle="Birthday"
                                name="birthday"
                                placeholder="25.04.2023"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.birthday}
                            />
                            <FormInput
                                labelTitle="Email"
                                name="email"
                                placeholder="Enter your email"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.email}
                            />
                            <FormInput
                                type="phone"
                                labelTitle="Phone"
                                name="phone"
                                placeholder="Enter your phone"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.phone}
                            />
                            <FormInput
                                labelTitle="Skype"
                                name="skype"
                                placeholder="Enter your skype"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.skype}
                            />
                        </InputWrapper>
                        <SaveButton
                            differentStyles={ButtonDifference.secondary}
                            title="Save changes"
                            type="submit"
                            disabled={!isValid ? false : true}
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
    backgroundColor: 'gray',
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
