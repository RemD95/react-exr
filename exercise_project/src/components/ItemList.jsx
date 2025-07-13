import React from 'react';

const ItemList = ({item}) => {
    return (
        <>
            <div>
                <h2>Items List</h2>
                <ul>
                    {item.map((item, index) => (<li key={index}>
                        {item}
                    </li>
                    ))}
                </ul>
            </div>
        </>
    )

}