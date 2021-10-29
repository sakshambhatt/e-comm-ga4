import { createContext, useContext, useEffect, useState } from "react";
import fakeAuthApi from "../api/fakeAuthApi";
export const LoginContext = createContext();

export const useLogin = () => {
  return useContext(LoginContext);
};

export default function LoginProvider({ children }) {
  const [isUserLoggedIn, setLogin] = useState(false);

  useEffect(() => {
    const isUserLoggedIn = JSON.parse(localStorage?.getItem("login"));
    console.log("isUserLoggedIn", isUserLoggedIn);
    isUserLoggedIn && setLogin(true);
  }, []);

  async function loginWithUserCredentials(username, password) {
    try {
      const response = await fakeAuthApi(username, password);
      console.log("response", response);
      if (response.success) {
        setLogin(true);
        localStorage.setItem(
          "login",
          JSON.stringify({
            isUserLoggedIn: true
          })
        );
      }
      //console.log(response);
    } catch (error) {
      console.log("error", error);
      localStorage.setItem(
        "login",
        JSON.stringify({
          isUserLoggedIn: false
        })
      );
    }
  }
  function logout() {
    setLogin(false);
    localStorage.setItem(
      "login",
      JSON.stringify({
        isUserLoggedIn: false
      })
    );
  }
  return (
    <LoginContext.Provider
      value={{ isUserLoggedIn, loginWithUserCredentials, logout }}
    >
      {children}
    </LoginContext.Provider>
  );
}
