import './App.css';
import './config/firebase-config';
import { getAuth } from "firebase/auth";
import { useAuthState } from "react-firebase-hooks/auth";
import Login from "./screens/Login/Login.js";

const auth = getAuth();
function App() {
  
  const signOut = () => {
    auth.signOut();
  };
  const [user] = useAuthState(auth);

  console.log(user);
  return (
    
    <div className="App">
      {/* <header className="App-header"></header> */}
      {user ? (
        <div className="app">
          <h1>Hello, {user.displayName}</h1>
          <h1>You are signed in as {user.email}</h1>
          <button onClick={signOut}>Sign Out</button>
        </div>
      ) : (
        <Login />
      )}
    </div>
  );
}

export default App;
