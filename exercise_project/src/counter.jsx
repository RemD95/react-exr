import React, { useState } from "react";

const Counter = () => {
    const [count, setCount] = useState(0);

    const handleIncrement = () => {
        setCount(count + 1);
    };

    const handleDecrement = () => {
        setCount(count - 1);
    };

    return (
        <div>
            <p>
                Contatore: {count}
            </p>
            <button onClick={handleIncrement}>Incremento</button>
            <button onClick={handleDecrement}>Decrementa</button>
        </div>
    );
}


export default Counter;
