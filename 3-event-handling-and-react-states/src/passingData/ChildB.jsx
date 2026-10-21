import React from 'react'

const ChildB = (props) => {
  return (
    <div>
      {/* ChildB receives the parent's count as a prop, rather than reading ChildA's state. */}
      <p>Child B Count: {props.data}</p>
    </div>
  )
}

export default ChildB
