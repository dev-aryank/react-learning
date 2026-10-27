import { useContext } from 'react'
import { useAuthContext } from './auth-context';
// import { AuthContext } from './auth-context'

const Main = () => {

    const authContext = useAuthContext();

  return (
    <div style={{backgroundColor: "lightpink", minHeight: "90vh"}}>
      Main {authContext.user.name}
    </div>
  )
}

export default Main
