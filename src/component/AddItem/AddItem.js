import React ,{Component} from 'react';
import './AddItem.css'
class AddItem extends Component {
    
    state={
        // id:null,
        name:'',
        age:''
    }
    handelChange=(event)=>{
        this.setState({
            [event.target.id]:event.target.value
        })
    }
    handelSubmit=(e)=>{
        e.preventDefault();
        // this.setState({id:Math.ceil(Math.random()*1000)})
        if(this.state.name===''||this.state.age==='')return
        this.props.addItem(this.state);
        this.setState({name:'',age:''})
    }
    render ()
    {
        return (
            <div>
                <form onSubmit={this.handelSubmit}> 
                    <input type="text" placeholder="Enter  Name..." onChange={this.handelChange} id="name" value={this.state.name}/>
                    <input type="number" placeholder="Enter  Age..." onChange={this.handelChange} id="age" value={this.state.age} min='1'/>
                    <input type="submit" value="Add"/>
                </form>
            </div>
        );
    }
}
export default AddItem;