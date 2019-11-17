import React from 'react'
import { render } from 'react-dom'
import Employee from './Employee';
import AddForm from './AddForm';

class Employees extends React.Component {

    constructor(props){
      super(props);
      this.state = {
        employees: [],
        isLoading: true,
        isSaving:false
      }
      this.fetchData=this.fetchData.bind(this);
      this.saveData=this.saveData.bind(this);
    }
  
    fetchData()
    {
      this.setState({isloading: true});
    fetch("http://localhost:3000/employees")
    .then(resp => resp.json())
        .then(resp => {
          this.setState({
            employees: resp,
            isloading: false,
            isSaving: false
          })
        })
    }
    componentDidMount(){
      
    this.fetchData();
}
  saveData(name, age, company, email, isActive){
    this.setState({isSaving: true});
    fetch('http://localhost:3000/employees', {
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
    }).then(() => {
      this.fetchData();
  });
    
  }

    render() {
      return(

        <div>
          {this.state.isSaving ? <p>Saving...</p> : <AddForm submitClicked={this.saveData}/>}
          {this.state.isloading ? <p>Loading...</p> : <div>{this.state.employees.map(Employee)}</div>}
        </div>
      
       
      )}
  }
  
  export default Employees;