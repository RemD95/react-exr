// "/about" -> http://localhost:PORT/about

import { useNavigate } from "react-router-dom";

const About = ()=>{
  const navigate = useNavigate();
    
  const handleClick =() => {;
    navigate("/")
}  
    return (
        <>
        <h1>About</h1>
        <div>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium, neque!</p>
        </div>
        <button onClick={handleClick}>Go To Homepage</button>
        </>
    )
}

export default About