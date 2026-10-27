import { createContext, useContext } from "react";

const AuthContext = createContext({
  name: "Aryankumar",
});

export const AuthProvider = ({ children, value }) => {
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export const useAuthContext = () => {
    const context = useContext(AuthContext);
    //Custom logic
    return context;
};
