import React ,{Component} from 'react';
import './App.css';
import AddItem from'./component/AddItem/AddItem'
import TodoItems from './component/TodoItems/TodoItems';
class App extends Component {
  state={
    items:[
      {id:1,name:'Ahmed Alaa',age:24},
      {id:2,name:'Hamza',age:28},
      {id:3,name:'Ibrahim Ahmed',age:25},
      {id:4,name:'Hessien Alaa',age:27},
    ]
  }
  deleteItem=(itemId)=>{
    let items=this.state.items.filter(item=>{ return item.id!==itemId})
    this.setState({items})
  }
  addItem=(item)=>{
    let items=this.state.items;
    let itemId=Math.ceil(Math.random()*1000)
    item.id=itemId;
    items.push(item); 
    this.setState({items});
  }
 render ()
 {
  return (
    <div className="App container">
      <h1 className='text-center'>TodoList App</h1>
      <TodoItems items={this.state.items} deleteItem={this.deleteItem}/>
      <AddItem addItem={this.addItem}/>
    </div>
  );
 }
}

export default App;
