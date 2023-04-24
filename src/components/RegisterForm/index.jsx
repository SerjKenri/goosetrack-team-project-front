import { useTranslation } from 'react-i18next';
import { useRegisterForm } from 'components/RegisterForm/useRegisterForm';

import { Input } from 'core/kit/Input';
import { Button } from 'core/kit/Button';

import { Formik } from 'formik';

const LangaguesBar = () => {
    const LANGAGUES = ['en', 'ua'];
    const { i18n } = useTranslation();

    return (
        <div>
            <ul>
                {LANGAGUES.map(langague => {
                    console.log(langague);
                    return (
                        <li key={langague}>
                            <button
                                id={
                                    i18n.resolvedLanguage === langague
                                        ? 'selectedLang'
                                        : 'langId'
                                }
                                onClick={() => i18n.changeLanguage(langague)}
                            >
                                {langague}
                            </button>
                        </li>
                    );
                })}
            </ul>
        </div>
    );
};

export const RegisterForm = () => {
    const { t, onSubmit, validationSchema } = useRegisterForm();

    return (
        <>
            <LangaguesBar />
            <Formik
                initialValues={{
                    email: '',
                    name: '',
                    password: '',
                }}
                validationSchema={validationSchema}
                onSubmit={onSubmit}
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
                    <form onSubmit={handleSubmit} autoComplete="off">
                        <Input
                            name="email"
                            type="text"
                            labelTitle={t('signUpPage.labelTitleEmail')}
                            placeholder={t('signUpPage.inputPlaceholderEmail')}
                            handleBlur={handleBlur}
                            onChange={handleChange}
                            value={values.email}
                            error={
                                touched.email && errors.email
                                    ? errors.email
                                    : ''
                            }
                        />
                        <Input
                            name="name"
                            type="text"
                            labelTitle={t('signUpPage.labelTitleName')}
                            placeholder={t('signUpPage.inputPlaceholderName')}
                            handleBlur={handleBlur}
                            onChange={handleChange}
                            value={values.name}
                            error={
                                touched.name && errors.name ? errors.name : ''
                            }
                        />

                        <Input
                            name="password"
                            type="password"
                            labelTitle={t('signUpPage.labelTitlePassword')}
                            placeholder={t(
                                'signUpPage.inputPlaceholderPassword'
                            )}
                            handleBlur={handleBlur}
                            onChange={handleChange}
                            value={values.password}
                            error={
                                touched.password && errors.password
                                    ? errors.password
                                    : ''
                            }
                        />
                        <Button
                            type="submit"
                            disabled={!isValid}
                            title={
                                !isValid
                                    ? t('signUpPage.button')
                                    : t('signUpPage.signUp')
                            }
                        />
                    </form>
                )}
            </Formik>
        </>
    );
};
