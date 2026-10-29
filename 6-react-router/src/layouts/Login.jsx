import { Navigate, useLocation, useNavigate } from "react-router";
import { useAuth } from "../providers/with-auth-provider";

const Login = () => {
  const location = useLocation();
  const from = location.state?.from || "/dashboard";
  console.log(location);

  const { user, setUser } = useAuth();

  const navigate = useNavigate();

  if (user) {
    return <Navigate to={from} />;
  }

  const handleToggleLogin = () => {
    if (user) {
      setUser(null);
      localStorage.clear();
    } else {
      // verify the credentials with backend API call
      const userObj = { name: "Aryan", email: "hello@aryank.dev" };
      setUser(userObj);
      localStorage.setItem(
        "USER_TOKEN",
        "eyJhbGciOiJIUzI1NiVCJ9.9sZSI6IlVTYXQiOjE1MTYyMzkwMjJ9.f36POk6yJV_adQssw5c",
      );
    }
    navigate(from);
  };

  return (
    <div>
      <h1>Login Page</h1>
      <button
        className="bg-yellow-400 text-black px-4 py-2 cursor-pointer"
        onClick={handleToggleLogin}
      >
        Toggle Login
      </button>
    </div>
  );
};

export default Login;

{
  /* <div>Login Component</div> */
}
{
  /* <span>Got state: {location.state?.name ?? "No name provided"}</span> */
}
