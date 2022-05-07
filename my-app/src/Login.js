import { useState } from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
    let username = 'admin'
    let password = 'admin1234'

    const [verifyUsername, setVerifyUsername] = useState('');
    const [verifyPassword, setVerifyPassword] = useState('');
    const [isVerify, setIsVerify] = useState(false);

    const veryfyLogin = () =>{
        (verifyUsername !== (username) || verifyPassword !== (password)) && alert('Incorrect username or password');
        (verifyUsername === (username) && verifyPassword === (password)) && setIsVerify(true);
    }

    return (  
        <form className="login">
        <div className="LoginPage">
            <div>
            <input type="text" className="txtUsername" placeholder="Username" onChange={event => setVerifyUsername(event.target.value)}/>
            </div><div>
            <input type="password" className="txtPassword" placeholder="Password" onChange={event => setVerifyPassword(event.target.value)}/>
            </div>
            <Link to={isVerify && "/todo"}><button onClick={veryfyLogin} className=" btn btnSignin" >Sign in</button></Link>
            <p className="forgotPassword"><Link to="/error">Forgot Password?</Link></p>
            <p className="register"><Link to="/error">Register</Link></p>
        </div>
        </form>
    );
}
 
export default Login;