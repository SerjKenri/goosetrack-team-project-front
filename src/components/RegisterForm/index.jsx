import { validationSchema } from 'schemas/registerFormValidation';

import { Input } from 'core/kit/Input';
import { Button } from 'core/kit/Button';

import { Formik } from 'formik';

export const RegisterForm = () => {
    const onSubmit = values => {
        console.log(values);
    };

    return (
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
                        labelTitle="Email"
                        placeholder="Enter your email"
                        handleBlur={handleBlur}
                        onChange={handleChange}
                        value={values.email}
                        error={
                            touched.email && errors.email ? errors.email : ''
                        }
                    />
                    <Input
                        name="name"
                        type="text"
                        labelTitle="Name"
                        placeholder="Enter your name"
                        handleBlur={handleBlur}
                        onChange={handleChange}
                        value={values.name}
                        error={touched.name && errors.name ? errors.name : ''}
                    />

                    <Input
                        name="password"
                        type="password"
                        labelTitle="Password"
                        placeholder="Enter password"
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
                        title={!isValid ? 'disabled' : 'Submit'}
                    />
                </form>
            )}
        </Formik>
    );
};
