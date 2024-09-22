import { createContext, useEffect, useState } from "react";

export const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(
    JSON.parse(localStorage.getItem("squad-user")) || null
  );

  const login = (userData) => {
    setCurrentUser(userData)
  };

  const logout = () => {
    localStorage.removeItem("squad-user");
    setCurrentUser(null);
  };

  useEffect(() => {
    localStorage.setItem("squad-user", JSON.stringify(currentUser));
  }, [currentUser]);

  return (
    <AuthContext.Provider value={{currentUser, login, logout}}>
      {children}
    </AuthContext.Provider>
  );
};
