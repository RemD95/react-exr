import React, { useRef } from "react";

const UncontrolledInput = () => {
  const inputRef = useRef(null);
  return (
    <>
      <h2>Uncontrolled Input Ex.2</h2>
      <input type="text" ref={inputRef} />
    </>
  )
}

export default UncontrolledInput