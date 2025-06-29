import React, { useState } from "react";

const Counter = () => {
    const [count, setCount] = useState(0);

    useEffect(() => {
        document.title = `Contatore: ${count}`;
    },
        [count]);

    const handleIncrement = () => {
        setCount(count + 1);
    };

    const handleDecrement = () => {
        setCount(count - 1);
    };

    const handleReset = () => {
        setCount(0);
    };

    return (
        <div>
            <p>
                Contatore: {count}
            </p>
            <button onClick={handleIncrement}>Incremento</button>
            <button onClick={handleDecrement}>Decrementa</button>
            <button onClick={handleReset}>Reset</button>
        </div>
    );
}


export default Counter;
