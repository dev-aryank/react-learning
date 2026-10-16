import React from "react";

const Event1 = () => {
  const handleClick = (e) => {
    console.log(e);
    alert("Button clicked!");
  };
  const handleMouseMove = (e) => {
    console.log(e);
    console.log("Mouse moved over the button!");
  };

  const handleFormSubmit = (e) => {
    e.preventDefault(); // Prevents the default form submission behavior
    console.log(e);
    console.log("Form was submitted");
  };

  const handleUsernameChanged = (e) => {
    const username = e.target.value;
    console.log(username);
  };

  return (
    <div>
      {/* <button onClick={handleClick} onMouseMove={handleMouseMove}>Click me</button> */}

      <form onSubmit={handleFormSubmit}>
        <label htmlFor="name">Name:</label>
        <input
          id="name"
          type="text"
          placeholder="Enter your name"
          name="username"
          onChange={handleUsernameChanged}
        />

        <label htmlFor="password">Password:</label>
        <input
          id="password"
          type="password"
          placeholder="Enter your password"
          name="password"
        />

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Event1;
