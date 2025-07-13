import React from "react"

const Card = (props) => {
    return (
        <div style={{ border: '1px solid black', padding: '15px', margin: '7px' }}>
            {props.children}
        </div>
    )
}
