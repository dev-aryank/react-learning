import { useId, useRef } from "react";

const LearnUseRef2 = () => {

  const inputRef = useRef(null);

  return (
    <div>
      <button onClick={() => inputRef.current.focus()}>Focus from Parent</button>
      <Child ipRef={inputRef} />
    </div>
  );
};

const Child = ({ipRef}) => {
  const inputId = useId();

  return (
    <div>
      <label htmlFor={inputId}>Input in Child</label>
      <input ref={ipRef} id={inputId} type="text" />
    </div>
  );
};

export default LearnUseRef2;
