import { useLoginUserMutation } from 'redux/auth/auth.api';

export const Login = () => {
    const [loginUser] = useLoginUserMutation();
    // console.log(body);
    const onLogin = e => {
        e.preventDefault();
        const form = e.currentTarget;
        const email = form.elements.email.value;
        const password = form.elements.password.value;
        const body = { email, password };

        loginUser({ password, email });

        form.reset();
    };

    return (
        <form onSubmit={onLogin}>
            <h2>Login</h2>
            <label>
                <input type="email" name="email" />
            </label>
            <label>
                <input type="password" name="password" />
            </label>

            <br />
            <button type="submit">Login</button>
        </form>
    );
};
