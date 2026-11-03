import useCounterStore from "../store-Zustand/store";

const CounterOperation = () => {
  const increment = useCounterStore((state) => state.increment);
  const decrement = useCounterStore((state) => state.decrement);
  const incrementAsync = useCounterStore((state) => state.incrementAsync);
  const reset = useCounterStore((state) => state.reset);

  console.log("counterOperation");

  return (
    <div className="flex gap-6 text-black text-4xl">
      <button
        onClick={decrement}
        className="bg-yellow-300 px-4 py-2 rounded-sm cursor-pointer transition active:bg-yellow-500 hover:bg-yellow-200 "
      >
        -
      </button>
      <button
        onClick={increment}
        className="bg-yellow-300 px-4 py-2 rounded-sm cursor-pointer transition active:bg-yellow-500 hover:bg-yellow-200 "
      >
        +
      </button>

      <button
        onClick={() => incrementAsync(2)}
        className="bg-yellow-300 px-4 py-2 rounded-sm cursor-pointer transition active:bg-yellow-500 hover:bg-yellow-200 "
      >
        ++
      </button>
      <button
        onClick={reset}
        className="bg-yellow-300 px-4 py-2 rounded-sm cursor-pointer transition active:bg-yellow-500 hover:bg-yellow-200 "
      >
        Reset
      </button>
    </div>
  );
};

export default CounterOperation;
