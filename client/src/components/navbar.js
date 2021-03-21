import {Link} from 'react-router-dom';

function Navbar(){
    return (
        <nav className="navbar navbar-dark bg-dark navbar-expand-sm">
            <div className="container">
            <p className="navbar-brand" Style={"padding-top:17px;"} >College List</p>
            
           
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item">
                        <Link to="/states" className="nav-link">By State</Link>
                        
                    </li>
                    <li className="nav-item">
                        
                        <Link to="/courses" className="nav-link">By Course</Link>
                    </li>
                    <li className="nav-item">
                        
                        <Link to="/" className="nav-link">By Search</Link>
                    </li>
                </ul>
            </div>
            
        </nav>
    )
}
export default Navbar; 