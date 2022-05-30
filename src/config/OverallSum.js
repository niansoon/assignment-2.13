import AddSum from "./AddSum";
import Answer from "./Answer";
import {useState} from 'react';
import config from './config/index';

const OverallSum = () => {

    const [sum, setSum] = useState("");

    const handleSum = (input1, input2) => {
        const calc = Number(input1) + Number(input2);

        setSum(calc);
    }

    return(
        <>
        <h2>Addition Calculator</h2>
        <AddSum sumSum = {handleSum} />
        <Answer name = {sum} />
        <div>BaseURL: {config.baseURL}</div>
        </>
    )
}

export default OverallSum;