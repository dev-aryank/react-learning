import { useEffect, useRef, useState } from "react";

const LearnUseRef = () => {
  let count = 0;
  const rCount = useRef(0);
  const [sCount, setSCount] = useState(0);

  function handleAdd() {
    count++;
    setSCount((prev) => prev + 1); //async, causing rerender
    rCount.current++; //synchronous

    console.log(count);
    console.log("state", sCount);
    console.log("ref", rCount);
  }

  const inputRef = useRef(null);

  const result = useRef(null);

  useEffect(() => {
    // Perform heavy operation
    result.current = 5;
  }, []);

  console.log(result);

  return (
    <div>
      <p>Normal: {count}</p>
      <p>State: {sCount}</p>
      <p>Ref: {rCount.current}</p>
      <button onClick={handleAdd}>Add</button>

      <br />
      <br />
      <input ref={inputRef} type="text" />
      <button onClick={() => inputRef.current.focus()}>Focus</button>
    </div>
  );
};

export default LearnUseRef;
