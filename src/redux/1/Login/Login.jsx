import { useDispatch } from 'react-redux';
import { loginUser } from 'redux/operations';

export const Login = () => {
    const dispatch = useDispatch();

    const onLogin = e => {
        e.preventDefault();
        const form = e.currentTarget;
        dispatch(
            loginUser({
                email: form.elements.email.value,
                password: form.elements.password.value,
            })
        );
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
