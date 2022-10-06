import { Link } from "react-router-dom"
import React from "react"
class Page extends React.Component{
 

   render(){
    return(
       <div>
        <p className="box2">
         {this.props.users.map(item =>{
         return(
                 <p className='box'>{`Name :${item.name} || Department : ${item.department} || Rating :${item.rating}`}</p>
            )
         })
        }
        </p>
       <p>
         <Link to="/"><button>BACK</button></Link>
       </p>
       </div>
    )
   }
}
export default Page;