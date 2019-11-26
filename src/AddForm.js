import React from "react";

class AddForm extends React.Component
{
    constructor(props)
    {
        super(props);
        this.state = {
          name: "",
          age: "",
          company: "",
          email: "",
          isActive: false,
            isVisible: false
          }
      
          this.nameChanged = this.nameChanged.bind(this);
        this.ageChanged = this.ageChanged.bind(this);
        this.companyChanged = this.companyChanged.bind(this);
        this.emailChanged = this.emailChanged.bind(this);
        this.isActiveChanged = this.isActiveChanged.bind(this);

        }

      nameChanged(event) {
        this.setState({ name:event.target.value });
    }

    ageChanged(event) {
        this.setState({ age:event.target.value });
    }

    companyChanged(event) {
        this.setState({ company: event.target.value });
    }

    emailChanged(event) {
        this.setState({ email: event.target.value });
    }

    isActiveChanged(event) {
        this.setState({ isActive:event.target.value });
    }




    render(){
        return(
          <div style= {{border:"2px solid black"}}>
          <div>
           
             
            <form>
                <p>ID: <input disabled></input></p>
                <p>Name: <input name="name" type="text" value={this.state.name} onChange={this.nameChanged}></input></p>
                <p>Age: <input name="age" type="number" value={this.state.age} onChange={this.ageChanged}></input></p>
                <p>Company: <input name="company" type="text" value={this.state.company} onChange={this.companyChanged}></input></p>
                <p>Email: <input name="email" type="text" value={this.state.email} onChange={this.emailChanged}></input></p>
                <p>IsActive: <input name="isActive" type="checkbox" defaultChecked={this.state.isActive} onChange={this.isActiveChanged}></input></p>
                
                <button onClick={() => this.props.submitClicked(this.state.name,this.state.age,this.state.company,this.state.email,this.state.isActive)}>Add</button>
                <button >Cancel</button>
            </form>
         </div>
            </div>
        )}

}
export default AddForm; 