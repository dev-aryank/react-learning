const ChildA = (props) => {

    // Calling the callback prop sends an event from this child up to the parent.
    function handleChildButtonClick() {
        props.handleChildButtonClick();
    }

  return (
    <div>
      {/* This value came down from the parent as a prop. */}
      <p>Child count: {props.count}</p>
      {/* The click handler invokes the parent's callback, which updates the shared count. */}
      <button onClick={handleChildButtonClick}>Child A Button</button>
    </div>
  )
}

export default ChildA
