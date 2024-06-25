import { createContext } from "react";
import { getRefreshToken } from "../utils/auth";

interface AuthContext {
  login: (email: string, password: string) => Promise<void>;
  logout: () => Promise<void>;
  register: (email: string, password: string) => Promise<void>;
}

const defaultContextValues: AuthContext = {
  login: async () => {},
  logout: async () => {},
  register: async () => {},
};

export const AuthContext = createContext(defaultContextValues);

interface AuthProviderProps {
  children: React.ReactNode;
}
export const AuthContextProvider = (props: AuthProviderProps) => {
  const { children } = props;

  const login = async (email: string, password: string) => {
    const response = await fetch("http://localhost:3000/auth/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    });

    const data = await response.json();
    console.log("Data in login", data);

    localStorage.setItem("accessToken", data.token);
    localStorage.setItem("refreshToken", data.refreshToken);

    // window.location.reload();
    window.location.replace("/trips");
  };

  const register = async (email: string, password: string) => {
    const response = await fetch("http://localhost:3000/auth/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    });

    const data = await response.json();
    console.log("Data in register", data);

    window.location.replace("/login");
  };

  const logout = async () => {
    await fetch("http://localhost:3000/auth/logout", {
      method: "POST",
      headers: {
        "refresh-token": `${getRefreshToken()}`,
      },
    });

    localStorage.removeItem("accessToken");
    localStorage.removeItem("refreshToken");

    // window.location.reload();
    window.location.replace("/");
  };

  return (
    <AuthContext.Provider value={{ login, logout, register }}>
      {children}
    </AuthContext.Provider>
  );
};
