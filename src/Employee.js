import React from 'react'

class Employee extends React.Component {
    constructor(props) {
        super(props);
        this.state={
            isDeleting:false
        }

    }



    render() {
        return (
            <div style= {{border:"2px solid black"}}>
            {this.state.isDeleting ? <div>Deleting...</div>:<div>
            <h4>Id: {this.props.employee.id}</h4>	             
            <p>Name: {this.props.employee.name}</p>	       
            <p>Age: {this.props.employee.age}</p>	            
            <p>Company: {this.props.employee.company}</p>	            
            <p>Email: {this.props.employee.email}</p>	          
            <p>IsActive: {this.props.employee.isActive.toString()}</p>	         

            <button onClick={() => {this.props.delete(this.props.employee.id);this.setState({isDeleting: true})}}>Delete</button>
            </div>}
            </div>
               
        )
    }
}

export default Employee