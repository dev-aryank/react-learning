import { useContext } from "react";
import { useAuthContext } from "./auth-context";
// import { AuthContext } from "./auth-context";

const Navbar = () => {
  const authContext = useAuthContext();

  return (
    <div style={{ backgroundColor: "lightblue", minHeight: "10vh" }}>
      Navbar {authContext.user.name}
      <button
        onClick={() => {
          authContext.setUser({
            ...authContext.user,
            name: authContext.user.name === "Aryan" ? "Aryankumar" : "Aryan",
          });
        }}
      >
        Toggle in Navbar.jsx
      </button>
    </div>
  );
};

export default Navbar;
