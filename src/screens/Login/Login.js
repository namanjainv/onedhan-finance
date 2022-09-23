import "./Login.css";
import { getAuth, signInWithPopup, GoogleAuthProvider, linkWithPopup } from "firebase/auth";
import { OAuthProvider } from "firebase/auth";

const msftProvider = new OAuthProvider('microsoft.com');
const googleProvider = new GoogleAuthProvider();

const auth = getAuth();

// msftProvider.setCustomParameters({
//     tenant: 'd136c7c5-8e48-41c1-809e-268b0a7f9c3c'
// });


function App() {
    const googleSignIn = () => {
        signInWithPopup(auth, googleProvider)
            .then((result) => {
                // This gives you a Google Access Token. You can use it to access the Google API.
                const credential = GoogleAuthProvider.credentialFromResult(result);
                const token = credential.accessToken;
                // The signed-in user info.
                const user = result.user;
                console.log(user);
                // ...
            }).catch((error) => {
                // Handle Errors here.
                const errorCode = error.code;
                const errorMessage = error.message;
                // The email of the user's account used.
                const email = error.customData.email;
                // The AuthCredential type that was used.
                const credential = GoogleAuthProvider.credentialFromError(error);
                // ...
            });
    };

    const msftSignIn = () => {
        signInWithPopup(auth, msftProvider)
            .then((result) => {
                // User is signed in.
                // IdP data available in result.additionalUserInfo.profile.

                // Get the OAuth access token and ID Token
                const credential = OAuthProvider.credentialFromResult(result);
                const accessToken = credential.accessToken;
                const idToken = credential.idToken;

                console.log(credential, accessToken, idToken);
            })
            .catch((error) => {
                console.log(error);
                // Handle error.
            });
    }
    return (
        <div className="login">
            <button onClick={googleSignIn}>Google</button>
            <button onClick={msftSignIn}>Microsoft</button>
        </div>
    );
}

export default App;