import React from 'react';
import './TodoItems.css';
const TodoItems =(props)=>{
    const {items,deleteItem}=props;

    const listItems=items.length?items.map(item=>{
        return(
            <div key={item.id}>
                <span className='name'>{item.name}</span>
                <span className='age'>{item.age}</span>
                <span className='icon action' onClick={()=>deleteItem(item.id)}>&times;</span>
            </div>
        );
    }
    
    ):<p>There is No Items To Show</p>
    // if(items.length<=0)
    // listItems=<div>No Items</div>
    return(
        <div className="list-items">
            <div className='list-items-head'>
                <span className='name title'>Name</span>
                <span className='age title'>age</span>
                <span className='action title'>Action</span>
            </div>
            {listItems}
        </div>
    );
}
export default TodoItems;