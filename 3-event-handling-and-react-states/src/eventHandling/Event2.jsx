import React from 'react'

const ChildA = (props) => {
    const steps = 5;
    return (
        <button onClick={(e) => props.handler(steps, e)}>Click me Child A</button>
    );
}

const ChildB = (props) => {
    return (
        <button onClick={(e) => props.handler()}>Click me Child B</button>
    );
}

const Event2 = () => {
    const walking = (steps, evn) => {
        alert("Going for a walk steps: "+ steps)
        evn.stopPropagation(); // This will stop the event from bubbling up to the parent div
    };

    const eating = () => {
        alert("Going for eating")
    };

  return (
    <div onClick={(e) => alert("Clicked on parent div")}>
      <ChildA handler={walking} />
      <ChildB handler={eating} />
    </div>
  )
}

export default Event2
