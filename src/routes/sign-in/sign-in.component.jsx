//import { getRedirectResult } from "firebase/auth";
import React from "react";
import SignUpForm from "../../components/sign-up-form/sign-up-form.component";
import {
  signInWithGooglePopup,
  createUserDocumentFromAuth,
} from "../../utils/firebase/firebase.utils";

function SignIn() {
  /*
  useEffect(() => {
    const foo = async () => {
      const response = await getRedirectResult(auth);
      console.log(response);

      if (response) {
        const userDocRef = await createUserDocumentFromAuth(response.user);
      }
    };

    foo();
  }, []);
  */

  const logGoogleUser = async () => {
    const { user } = await signInWithGooglePopup();
    //console.log(user);
    const userDocRef = await createUserDocumentFromAuth(user);
  };

  return (
    <div>
      <h1>Sign In</h1>
      <button onClick={logGoogleUser}>Sign in with Google Popup</button>
      <SignUpForm />
    </div>
  );
}

export default SignIn;
