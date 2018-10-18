import React from 'react';
import './Todoitem.css'

const Todoitems = (props) => {
    const { items, deleteItem } = props;
    const Listitems = items.map(item => {
        return (
            <div key={item.id}>
                <span>{item.name}</span>
                <span>{item.age}</span>
                <span onClick={() => deleteItem(item.id)}>&times;</span>
            </div>
        )
    })


    return (
        <div className='ListItems'>
            <div>
                <span>Name</span>
                <span>Age</span>
                <span>Action</span>
            </div>
            {Listitems}
        </div>
    )
}

export default Todoitems