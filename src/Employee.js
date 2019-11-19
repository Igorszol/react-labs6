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
            <table style={{ border: "2px solid black"}}>
               
            {this.state.isDeleting ? <tbody> <tr><td>Deleting...</td></tr>  </tbody>: 
            <tbody>
                    <tr>
                        <td>Name: </td>
                        <td>{this.props.emp.name}</td>
                    </tr>
                    <tr>
                        <td>Comapny:</td>
                        <td>{this.props.emp.company}</td>
                    </tr>
                    <tr>
                        <td>Age:</td>
                        <td>{this.props.emp.age}</td>
                    </tr>
                    <tr>
                        <td>Email:</td>
                        <td>{this.props.emp.email}</td>
                    </tr>
                    <tr>
                        <td>IsActive:</td>
                        <td>{this.props.emp.isActive.toString()}</td>
                    </tr>


                    <tr>
                        <td>
                            <button onClick={() => {this.props.delete(this.props.emp.id);this.setState({isDeleting: true})}}>Delete</button>
                        </td>
                    </tr>
    
                </tbody>}
           
            </table>
        )
    }
}

export default Employee