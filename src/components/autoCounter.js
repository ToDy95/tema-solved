import { useEffect, useState } from 'react';


const AutoCounter = () => {
    const [autoCounter, setAutoCounter] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setAutoCounter((counter) => counter + 1);
        },
            1000);

        return clearInterval(autoCounter);


    }, []);


    return (
        <div>
            <h2>AutoCounter</h2>
            {autoCounter}
        </div>
    );
}


export default AutoCounter;