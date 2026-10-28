import { useLocation } from "react-router"

const Login = () => {

  const location = useLocation();
  console.log(location)

  return (
    <div>
      <div>Login Component</div>
      <span>Got state: {location.state.name}</span>
    </div>
  )
}

export default Login
