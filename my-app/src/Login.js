import { useState } from 'react';
import { Link, useHistory} from 'react-router-dom';

const Login = () => {
    let username = 'admin'
    let password = 'admin1234'

    const [verifyUsername, setVerifyUsername] = useState('');
    const [verifyPassword, setVerifyPassword] = useState('');
    const [isVerify, setIsVerify] = useState(false);
    const history = useHistory();

    const veryfyLogin = () =>{
        (verifyUsername !== (username) || verifyPassword !== (password)) && alert('Incorrect username or password');
        (verifyUsername === (username) && verifyPassword === (password)) && setIsVerify(true);
    }

    return (  
        <div className="LoginPage">
            <input type="text" className="txtUsername" placeholder="Username" onChange={event => setVerifyUsername(event.target.value)}/>
            <input type="password" className="txtPassword" placeholder="Password" onChange={event => setVerifyPassword(event.target.value)}/>
            <Link to={isVerify && history.push('/Home')}><button onClick={veryfyLogin} className="btnSignin" >Sign in</button></Link>
            <Link to='Error'><p className="forgotPassword">Forgot Password?</p></Link>
            <Link to='Error'><p className="register">Register</p></Link>
        </div>
    );
}
 
export default Login;