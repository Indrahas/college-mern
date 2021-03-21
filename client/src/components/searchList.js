import {useState} from 'react';
import {Link,useHistory} from 'react-router-dom';
const axios=require('axios')
function SearchList(){
var [college,setCollege] = useState("");
var [type,setType] = useState();
const history = useHistory()
const onChangeCollege=(e)=>{
    setCollege(e.target.value);
}
const onChangeType=(e)=>{
    setType(e.target.value);
}
const onSubmitForm = (e)=>{
e.preventDefault();

if(type==="Id"){
history.push("/college/"+college)

}
else{
axios.get("/collegen/"+college)
.then(res=>{
    // console.log(res)
    history.push("/college/"+res.data[0]._id)
}).catch(err=>history.push("/error"))
}



}
return(
    <div className="container " Style={"padding-top:0px;"}>
        <h3 className="text-center" Style={"padding-bottom:25px;"}>Search for the college</h3>
        <form onSubmit={onSubmitForm}>
            <div className="form-group ">
                <div className="row">
                <label className="col-md-4 text-center font-weight-bold" >Search college by</label>
                <select  required onChange={onChangeType} value ={type} className="col-md-2 form-control mb-2">
                    <option value="Name">Name</option>
                    <option value="Id">Id</option>
                </select>
                </div>
                <div className="row">
                <label className="col-md-4 text-center font-weight-bold">Search item</label>
                <input required type="text" value={college} onChange={onChangeCollege} className="col-md-6 mr-2 form-control" placeholder="Enter name or id of the college"/>
                <div className="form-group">
                    <input type="submit" value="Search" className="btn btn-primary"/>
                </div>
                </div>
                
           </div>
        </form>
    
       <p> If you aren't aware of what to search, Find college by <span><Link to="/states" className="badge badge-info" Style={"text-decoration:none;"}>State</Link></span> or by <span><Link className="badge badge-info" to="/courses" Style={"text-decoration:none;"} >Course</Link></span>
       </p>
    </div>
)

}

export default SearchList;

