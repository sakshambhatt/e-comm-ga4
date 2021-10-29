import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useLogin } from "../contexts/loginProvider";
import LoginForm from "../components/LoginForm";

export default function Login() {
  const { isUserLoggedIn, loginWithUserCredentials, logout } = useLogin();
  const navigate = useNavigate();
  const { state } = useLocation();
  const previousState = state?.from;

  useEffect(() => {
    if (isUserLoggedIn && previousState) {
      navigate(previousState);
    }
    return () => console.log("login unmouted");
  }, [isUserLoggedIn, navigate, previousState]);

  const [credentialObject, setCredentialObject] = useState({
    username: "",
    password: ""
  });

  const loginHandler = () => {
    if (!isUserLoggedIn) {
      const { username, password } = credentialObject;
      loginWithUserCredentials(username, password);
    } else {
      logout();
      navigate(state?.from ? state.from : "/");
    }
  };
  return (
    <div className="login-form-container">
      <h1 className="heading heading-5">
        {isUserLoggedIn
          ? "Login successful. Welcome 🙏, user!"
          : "Please login (u: test, p: test123*)"}
      </h1>
      {!isUserLoggedIn ? (
        <LoginForm value={{ credentialObject, setCredentialObject }} />
      ) : (
        ""
      )}
      <div>
        <button className="button button-primary" onClick={loginHandler}>
          {!isUserLoggedIn ? "Login" : "Logout"}
        </button>
      </div>
    </div>
  );
}
