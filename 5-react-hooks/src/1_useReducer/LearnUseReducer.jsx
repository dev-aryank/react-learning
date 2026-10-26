import { useReducer, useState } from "react";

const LearnUseReducer = () => {
    // const [count, setCount] = useState(0);

    const [state, dispatch] = useReducer(myReducer, { count: 5 });

    function myReducer(prevState, action) {
        switch(action.type){
            case 'INCREMENT':
                return {
                    count: prevState.count+1
                }
            case 'DECREMENT':
                return {
                    count: prevState.count-1
                }
            case 'MULTIPLY2':
                return {
                    count: prevState.count*2
                }

            default:
                break
        }
    }

    function handleAdd() {
        dispatch({type: 'INCREMENT'})
    }
    function handleSubtract() {
        dispatch({type: 'DECREMENT'})
    }
    function handleMultiplyBy2(){
        dispatch({type: 'MULTIPLY2'})
    }

  return (
    <div>
      <p>{state.count}</p>
      <button onClick={handleSubtract}>Sub</button>
      <button onClick={handleAdd}>Add</button>
      <button onClick={handleMultiplyBy2}>Mul 2</button>
    </div>
  );
};

export default LearnUseReducer;
