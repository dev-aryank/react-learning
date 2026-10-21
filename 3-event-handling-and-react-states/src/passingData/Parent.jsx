import {useState} from 'react'
import ChildA from './ChildA'
import ChildB from './ChildB';

const Parent = () => {
    // The parent owns the shared count so it can pass the value to both children.
    const [countParent, setCountParent] = useState(0);

    // ChildA calls this function through a prop to ask the parent to update its state.
    function handleChildButtonClick() {
        setCountParent(prevCount => prevCount + 1);
    }

    return (
    <div>
        <p>Inside Parent: {countParent}</p>
        {/* Pass a callback and the current count down to ChildA. */}
        <ChildA handleChildButtonClick={handleChildButtonClick} count={countParent} />
        {/* Pass the same parent state to ChildB; this is how sibling children share data. */}
        <ChildB data={countParent} />
    </div>
    )
}

export default Parent
