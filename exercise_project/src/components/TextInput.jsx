import { useState } from "react";

const TextInput = () => {
    const [text, setText] = useState("");
    const handleChange = (event) => {
        setText(event.target.value)
    };

    return (
        <div>
            <input type="text" value={text} onChange={handleChange} />
        </div>
    )
};



export default TextInput;