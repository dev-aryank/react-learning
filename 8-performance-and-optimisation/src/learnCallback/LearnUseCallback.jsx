import { memo, useCallback, useState } from "react";

const LearnUseCallback = () => {
  "use no memo";

  console.log("Parent rendering...");
  const [text, setText] = useState("");

  const textHandler = useCallback((e) => {
    console.log(`text: ${text}`);
    setText(e.target.value);
  }, [text]);

  return (
    <div className="border rounded-sm p-6 max-w-2xl">
      <p>Text in parent: {text}</p>
      <Child textHandler={textHandler} />
      {/* <Child textHandler={textHandler} text={text} /> */}
    </div>
  );
};

const Child = memo(({ textHandler }) => {
  console.log("child rendering...");

  return (
    <div className="border border-red-500 rounded-sm p-6">
      <div>Inside Child</div>
      <input className="border rounded-sm" type="text" onChange={textHandler} />
    </div>
  );
});

export default LearnUseCallback;
