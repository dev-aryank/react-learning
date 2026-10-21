import { useState } from "react";
const Counter = () => {
    
    // useState gives this component a value that React remembers between renders.
    // counter is the current value; setCounter is how we ask React to change it.
    const [counter, setCounter] = useState(0);


    async function incrementCounter() {
        // if(counter < 1) {
        //     alert("Counter cannot be less than 0");
        //     return;
        // }

        // This is an example of how to use async/await with state updates.
        setCounter(counter + 1); // This will increment the counter immediately
        // 1st render happens here, and the user sees the incremented value.

        await new Promise(resolve => setTimeout(resolve, 2000)); // This will wait for 2 seconds

        setCounter(counter - 1); // This will decrement the counter again after 2 seconds
        // 2nd render happens here, and the user sees the decremented value.

    }

    async function accessCurrentCounterState() {
        // Passing a function tells React to calculate the next value from the latest state.
        // This avoids using `counter` captured by this render, which can be stale after `await`.
        setCounter(prevCounter => prevCounter + 1); 

        await new Promise(resolve => setTimeout(resolve, 2000)); 

        // React applies this update to the latest state too, including the increment above.
        setCounter(prevCounter => prevCounter - 1); 
    }

    console.log("Counter component rendered with counter value:", counter); // This will log the current counter value every time the component renders.

    return (
        <div>
            {/* This shows the current state value. */}
            <p>{counter}</p>
            {/* Pass the handler to onClick so it runs when the button is clicked. */}
            <button onClick={incrementCounter}>Increment</button>
            <button onClick={accessCurrentCounterState}>Current State</button>

        </div>
    );
}

export default Counter
