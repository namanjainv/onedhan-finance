import './App.css';
import './config/firebase-config';
import { getAuth } from "firebase/auth";
import { useAuthState } from "react-firebase-hooks/auth";
import Login from "./screens/Login/Login.js";
import Home from "./screens/Home/Home.js";
import Header from "./components/Header.js";

const auth = getAuth();
function App() {
  
  const [user] = useAuthState(auth);

  return (
    
    <div className="App">
      <Header />
      {user ? (
        <Home />
      ) : (
        <Login />
      )}
    </div>
  );
}

export default App;
