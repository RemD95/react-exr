import React, { useState } from "react";

const LoginForm = () => {
    const [username, setUsername] = useState("");
    const [password, setpassword] = useState("");
};


const handleUsername = (event) => {
    setText(event.target.value)
};

const handlePassword = (event) => {
    setText(event.target.value)
};

return (
     <form>
      <div>
        <label htmlFor="username">Username</label>
        <input type="username" onInput={handleUsername} value={username} id="username" name="username" placeholder="inserisci username" />
      </div>
      <div>
        <label htmlFor="password">Password</label>
        <input type="password" onInput={handlePassword} value={password} id="password" name="password" placeholder="inserisci password" />
      </div>
    </form>
)
            
export default LoginForm