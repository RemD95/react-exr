import React from 'react';

const ItemList = ({items}) => {
    return (
        <>
            <div>
                <h2>Items List</h2>
                <ul>
                    {items.map((item, index) => (
                        <li key={index}>
                        {item}
                    </li>
                    ))}
                </ul>
            </div>
        </>
    )

}

export default ItemList