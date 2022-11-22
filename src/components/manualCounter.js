import userEvent from '@testing-library/user-event';
import { useEffect, useState } from 'react';
import Autocomplete from './autocomplete';

const ManualCounter = () => {
    const [counter, setCounter] = useState(0);
    const [message, setMessage] = useState("")
    const increase = () => {

        if (counter === 10) {
            setMessage("maximul este 10")
        } else {
            setCounter(counter + 1);
        }

    }
    const decrease = () => {
        if (counter === 0) {
            setMessage("ESTE 0")
        } else {
            setCounter(counter - 1);
        }

    }


    return (
        <div>
            <h2>Manul Counter</h2>
            <button onClick={increase}>+</button>
            {counter}
            <button onClick={decrease}>-</button> <br />
            {message}
            {message && message.length > 0 &&
                <Autocomplete />
            }
        </div>
    )
}

export default ManualCounter;