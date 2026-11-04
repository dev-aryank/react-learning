import React, { useMemo, useRef, useState } from "react";

const Child = React.memo(
  ({ value }) => {
    console.log("Child rendered");

    return (
      <div className="border border-red-500 p-4">Value in Child: {value}</div>
    );
  },
  (prevProps, nextProps) => {
    // custom logic to check whether previous prop is equal to next prop or not (simulate deep checking instead of default shallow check)
  },
);

// const MemoizedChild = React.memo(Child);

function LearnMemo() {
  "use no memo";

  const [count, setCount] = React.useState(0);

  //   const a = useMemo(() => {
  //     return [4, 5, 1, 2, 3];
  //   }, []);

  const [a, setA] = useState([1, 2, 3, 4, 5]);

  //   const a = useRef([1, 2, 3, 4, 5]);

  const someExpensiveComputation = useMemo(() => {
    console.log("Computation Render");
    return a.reduce((acc, curr) => acc + curr, 0);
  }, [a]);

  console.log(someExpensiveComputation);

  console.log("Parent rendered");

  return (
    <div className="flex items-center justify-center h-screen">
      <div className="flex flex-col items-center gap-4 border p-8 rounded-sm">
        <button
          className="bg-teal-600 px-4 py-2 rounded-sm"
          onClick={() => setCount(count + 1)}
        >
          Increment in Parent: {count}
        </button>

        <Child value="Hi Bro" />
        {/* <MemoizedChild value="Hi Bro" count={count} /> */}

        <button
          className="bg-teal-600 px-4 py-2 rounded-sm"
          //   onClick={() => {
          //     a.current = [...a.current, 10];
          //   }}
          onClick={() => setA([...a, 10])}
        >
          Push 10 in Array
        </button>
      </div>
    </div>
  );
}

export default LearnMemo;
