import { useState }from 'react';
import './LoginForm.css';

const LoginForm = () => {
    const [id, setId] = useState('');
    const [password, setPassword] = useState('');

    const handleUsernameChange = (e) => {
        setId(e.target.value);
    };

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
    };

    return (
        <div className="container">
            <h2>로그인</h2>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    className="input"
                    placeholder="아이디"
                    value={id}
                    onChange={handleUsernameChange}
                    required
                />
                <input
                    type="password"
                    className="input"
                    placeholder="비밀번호"
                    value={password}
                    onChange={handlePasswordChange}
                    required
                />
                <button type="submit" className="button">로그인</button>
            </form>
        </div>
    );
};

export default LoginForm;
