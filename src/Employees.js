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
        isSaving:false,
        isDeleting:false
      }
      this.fetchData=this.fetchData.bind(this);
      this.saveData=this.saveData.bind(this);
      this.deleteEmp=this.deleteEmp.bind(this);
    }
  
    fetchData()
    {
      this.setState({isloading: true});
    fetch("http://localhost:3001/employees")
    .then(resp => resp.json())
        .then(resp => {
          this.setState({
            employees: resp,
            isloading: false,
            isSaving: false,
            idDeleting: false
          })
        })
    }
    componentDidMount(){
      
    this.fetchData();
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
    }).then(() => {
      this.fetchData();
  });
}
  deleteEmp(id) {
    this.setState({isDeleting: true});
    fetch('http://localhost:3001/employees/' + id, {
        method: 'DELETE'
    }).then(() => {
        this.fetchData();
    });
}



  

    render() {
      return(

        <div>
          
          {this.state.isloading ? <p>Loading...</p> : 
          <div>
            {this.state.employees.map(employee =>
                        <Employee key={employee.id} employee={employee} delete={this.deleteEmp}/>)}
      
        </div>}
        </div>
      
       
      )}
  }
  
  export default Employees;