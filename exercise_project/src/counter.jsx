import React, { Component } from "react";
import React, { useState } from "react";

function Counter() {
    const [count, setCount] = useState(0);
    return (
        <div>
            <h1>Contatore: {count}</h1>
        </div>
    );
}


export default Counter;
