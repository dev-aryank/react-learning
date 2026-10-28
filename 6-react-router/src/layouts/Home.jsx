import React from "react";
import { Link, Navigate, useNavigate } from "react-router";

const Home = () => {

  const navigate = useNavigate();
  const shouldRedirect = false;

  function handleButtonClick() {
    console.log("Button was clicked");
    navigate("/dashboard", {
      replace: true,
      // relative: true
    })
  }

  if(shouldRedirect) return <Navigate to={"/dashboard"}/>

  return (
    <div>
      <nav>
        <Link to={"/login"} state={{ name: "Aryankumar" }}>
          Login
        </Link>
        <Link to={"/about"}>About</Link>
      </nav>
      <button
        className="bg-black text-white cursor-pointer"
        onClick={handleButtonClick}
      >
        Click to send somewhere
      </button>
    </div>
  );
};

export default Home;
