import { useState } from "react";
const Counter = () => {
    
    // useState gives this component a value that React remembers between renders.
    // counter is the current value; setCounter is how we ask React to change it.
    const [counter, setCounter] = useState(0);

    function incrementCounter() {
        // Updating state tells React to render the component again with the new count.
        setCounter(counter + 1);
    }

    function decrementCounter() {
        if(counter < 1) {
            alert("Counter cannot be less than 0");
            return;
        }
        // Updating state tells React to render the component again with the new count.
        setCounter(counter - 1);
    }

    return (
        <div>
            {/* This shows the current state value. */}
            <p>{counter}</p>
            {/* Pass the handler to onClick so it runs when the button is clicked. */}
            <button onClick={incrementCounter}>Increment</button>
            <button onClick={decrementCounter}>Decrement</button>
        </div>
    );
}

export default Counter
