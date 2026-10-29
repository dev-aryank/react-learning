import { createContext, useContext, useEffect, useState } from "react";

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const token = localStorage.getItem("USER_TOKEN");

    if (token) {
      // Make backend API call to validate token and get user object
      const userObj = { name: "Aryan", email: "hello@aryank.dev" };
      setUser(userObj);
    }

    setLoading(false);
  }, []);

  if (loading) {
    return <p>Loading....</p>;
  }

  return (
    <AuthContext.Provider value={{ user, setUser }}>
      {children}
    </AuthContext.Provider>
  );
};

const useAuth = () => {
  return useContext(AuthContext);
};

export default AuthProvider;
export { useAuth };
