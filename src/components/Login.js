import { useState } from "react";
import { useNavigate } from "react-router-dom";
import DigitalWalletService from '../services/DigitalWalletService';

const Login = ({setUser}) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const navigate = useNavigate();

    const handleLogin = async (e) => {
        e.preventDefault();
        const payload = {
            username,
            password
        }
        debugger;
        const res = await DigitalWalletService.userLogin(payload);
        if(res?.data?.token) {
            sessionStorage.setItem('bearer', res.data.token);
            setUser();
            navigate('/transactions')
        } else {
            setError("Invalid username or password");
        }

    } 
  return (
    <div>
      <div className="form-group">
        <label htmlFor="username">User name</label>
        <input
          type="text"
          className="form-control"
          id="username"
          required
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          name="username"
        />
      </div>

      <div className="form-group">
        <label htmlFor="password">Password</label>
        <input
          type="password"
          className="form-control"
          id="password"
          required
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          name="password"
        />
      </div>
      { error && (<span style={{color: "red"}}>{error}</span>)}<br/>
      <button onClick={handleLogin}>Login</button>
    </div>
  );
};

export default Login;
