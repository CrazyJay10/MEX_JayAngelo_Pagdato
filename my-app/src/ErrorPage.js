import { Link } from 'react-router-dom';

const ErrorPage = () => {
    return ( 
    <div className="not-found">
      <h1>404</h1>
      <p>That page you are looking for was not found. </p>
      <Link to="/"><button className="btn btn-link" >Back to Login</button></Link>
    </div>
     );
}
 
export default ErrorPage;