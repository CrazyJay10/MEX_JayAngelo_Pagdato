import { Link } from "react-router-dom";

const Error = () => {
    return ( 
        <div class="error-page">
    <div class="container">
        <div class="row justify-content-center">
            <div class="col-md-12 text-center">
                <span class="display-1 d-block">404</span>
                <div class="mb-4 lead">The page you are looking for was not found.</div>
                <Link to="/"><button className="btn btn-link" >Back to Login</button></Link>
            </div>
        </div>
    </div>
</div>


     );
}
 
export default Error;