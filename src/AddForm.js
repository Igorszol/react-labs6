import React from "react";

class AddForm extends React.Component
{
    constructor(props)
    {
        super(props);
        this.state = {
            isVisible: false
          }
          this.handleAddVisible=this.handleAddVisible.bind(this);
          this.handleAddInvisible=this.handleAddInvisible.bind(this);
    }

    handleAddVisible (event) {
        this.setState({isVisible: true});
      }
      handleAddInvisible (event) {
        this.setState({isVisible: false});
      }

    render(){
        return(
            <div style= {{border:"2px solid black"}}>

            <button onClick={this.handleAddVisible}>Add Employee</button>
            {this.state.isVisible ?  
            <form>
                <p>ID: <input disabled></input></p>
                <p>Name: <input name="name" type="text"></input></p>
                <p>Age: <input name="age" type="number"></input></p>
                <p>Company: <input name="company" type="text"></input></p>
                <p>Email: <input name="email" type="text"></input></p>
                <p>IsActive: <input name="isActive" type="checkbox"></input></p>
                
                <button>Add</button>
                <button onClick={this.handleAddInvisible}>Cancel</button>
            </form>:null}
         
            </div>
        )}

}
export default AddForm; 