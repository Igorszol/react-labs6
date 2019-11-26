import React from "react";

import{
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

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
        this.saveData=this.saveData.bind(this);
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

    saveData(name, age, company, email, isActive){
      this.setState({isSaving: true});
      fetch('http://localhost:3001/employees', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            isActive: isActive,
            age: age,
            name: name,
            company: company,
            email: email
   
        })
      });
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
                
                <Link to="/">
                <button onClick={()=>this.saveData(this.state.name,this.state.age,this.state.company,this.state.email,this.state.isActive)}>Add</button>
          </Link>
                
                <Link to="/">
          <button>Cancel</button>
          </Link>
            </form>
         </div>
            </div>
        )}

}
export default AddForm; 