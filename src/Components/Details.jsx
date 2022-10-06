import React from 'react'
import { Link } from 'react-router-dom';


class Details extends React.Component{

    constructor(){
        super();
        this.state = {
            name:'',
            department:'',
            rating:'',
            showName:false
        }
    }

    updateName = (event) =>{
        this.setState({name:event.target.value})
    }
    updateDepartment = (event) =>{
        this.setState({department:event.target.value})
    }
    updateRating = (event) =>{
        this.setState({rating:event.target.value})
    }
    handleShowName = () =>{
        const updateArray = this.props.users
        updateArray.push({name:this.state.name,department:this.state.department,rating:this.state.rating})
        this.props.updateUsers(updateArray)
       this.setState({showName: true})
    }

render(){
    return(
        <div>
        <h1>EMPLOYEE FEEDBACK FORM</h1>
        <p>Name :<input type="text" className='enter' value={this.state.name} onChange={this.updateName}/></p>
        <p>Department :<input type="text" className='enter'  value={this.state.department} onChange={this.updateDepartment}/></p>
        <p>Rating :<input type="number" className='enter' value={this.state.rating} onChange={this.updateRating}/></p>
        <Link to="/Page"> <button onClick={this.handleShowName}>SUBMIT</button></Link>
        {this.state.showName && 
        <p className="box2">
         {this.state.Arr.map(item =>{
         return(
                 <p className='box'>{`Name :${item.name} | Department : ${item.department} | Rating :${item.rating}`}</p>
            )
         })
        }
        </p>
   }
       </div> 
        
    )
 }
}

export default Details;
