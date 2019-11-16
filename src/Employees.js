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
      }
    }
  
    componentDidMount(){
      this.setState({isloading: true})
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
      return(

        <div>
            <AddForm/>
          {this.state.isloading ? <p>Loading...</p> : <div>{this.state.employees.map(Employee)}</div>}
        </div>
      
       
      )}
  }
  
  export default Employees;