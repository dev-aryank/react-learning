import { useId } from "react";

const LearnUseId = () => {
  const id = useId();
  // for(let i = 0; i < 100; i++){
  //     console.log(useId())
  // }

  const inputId = useId();

  return (
    <div>
      {id}
      <br />
      <label htmlFor={inputId}>Name</label>
      <input id={inputId} type="text" />
    </div>
  );
};

export default LearnUseId;
