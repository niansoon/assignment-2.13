import { useState } from "react";

const AddSum = (props) => {

    const [input1, setInput1] = useState("");
    const [input2, setInput2] = useState("");

    const onInput1 = (e) => {
        setInput1(e.target.value);
    };

    const onInput2 = (e) => {
        setInput2(e.target.value);
    };

    const handleOnSubmit = (e) => {
        e.preventDefault();
        props.sumSum(input1,input2)
        }
        

    return(
        <>
        <form onSubmit={handleOnSubmit}>
            <input type="text" value={input1} onChange={onInput1} /> +
            <input type="text" value={input2} onChange={onInput2} />
            <button>Show Answer</button>
        </form>
        </>
    )
}

export default AddSum;