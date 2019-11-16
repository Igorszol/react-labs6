import React from 'react'
import { render } from 'react-dom'
import Employee from './Employee';

class Employees extends React.Component {

    constructor(props){
      super(props);
      this.state = {
        employees: [],
        isloading: true
      }
    }
  
    componentDidMount(){
fetch("http://localhost:3000/employees")
.then(resp => resp.json())
    .then(resp => {
      this.setState({
        employees: resp,
        isloading: false
      })
    })
}

    render() {
      return this.state.isloading ? <p>Loading...</p> :
        <div>
               {this.state.employees.map(Employee)}
      </div>
      
    }
  }
  
  export default Employees;