

import { getAuth } from "firebase/auth";
import { useAuthState } from "react-firebase-hooks/auth";
  
const auth = getAuth();
export default function Header({columns, data}) {
    const [user] = useAuthState(auth);

    const signOut = () => {
        auth.signOut();
    };
    return (
        <nav className="navbar navbar-expand-lg bg-light">
            <div className="container-fluid">
                <a className="navbar-brand" href="#">Onedhan Finance</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                
                {user ?
                    <div className="d-flex" role="search">
                        <span  className="navbar-text">Hello, {user.displayName}</span>
                        <button onClick={signOut} className="btn btn-outline-success">Logout</button>
                    </div> : 
                    <div className="d-flex" role="search">
                        <span  className="navbar-text">Hello, login to continue...</span>
                    </div> 
                }
            </div>
        </nav>
    );
}
