import { useState } from "react";
import LearnUseReducer from "./1_useReducer/LearnUseReducer";
import LearnUseEffect from "./2_useEffect/LearnUseEffect";
import LearnUseId from "./3_useId/LearnUseId";
import LearnUseRef from "./4_useRef/LearnUseRef";
import LearnUseRef2 from "./4_useRef/LearnUseRef2";
import Dashboard from "./5_useContext/Dashboard";
import TodoPage from "./todoApp/TodoPage";
import { AuthProvider } from "./5_useContext/auth-context";
import LearnCustomHook from "./6_customHook/LearnCustomHook";
import LearnAxios from "./7_axios/LearnAxios";
import CreatePost from "./7_axios/CreatePost";

const App = () => {
//   const [user, setUser] = useState({
//     name: "Aryankumar",
//     age: 21,
//   });

//   function handleToggleName() {
//     setUser({
//       ...user,
//       name: user.name === "Aryan" ? "Aryankumar" : "Aryan",
//     });
//   }

  return (
    // <AuthContext.Provider value={{user, setUser}}>
    // <AuthProvider value={{user, setUser}}>
      <>
        {/* <LearnUseReducer /> */}
        {/* <TodoPage /> */}
        {/* <LearnUseEffect /> */}
        {/* <LearnUseId /> */}
        {/* <LearnUseRef /> */}
        {/* <LearnUseRef2 /> */}
        {/* <button onClick={handleToggleName}>Toggle Name in App.jsx</button>
        <Dashboard /> */}
        {/* <LearnCustomHook /> */}
        {/* <LearnAxios /> */}
        <CreatePost />
      </>
    // </AuthProvider>
    // </AuthContext.Provider>
  );
};

export default App;
