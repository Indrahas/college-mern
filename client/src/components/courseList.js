import {useParams,Link} from 'react-router-dom';
import {useState,useEffect} from 'react';
const axios=require('axios')
function CourseList(){
    const {course}=useParams()
    var [colleges,setColleges]=useState([]);
    var [loading,setLoading]=useState(true);
    var index=0;
    useEffect(()=>{
        axios.get("/courses/"+course).then(res=>{
            console.log(res.data)
            setColleges(res.data)
            setLoading(false)
        })       
    },[ course])
    return(
        
        
        <div>
            {loading && <div className="text-center pt-2"><div className="spinner-grow text-center" Style="width: 3rem; height: 3rem;" role="status">
  <span className="sr-only">Loading...</span>
</div></div>}
            <h3 className="text-center mt-4 mb-4">Colleges offering {course}</h3>
            <table class="table table-hover">
            <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">College name</th>
      <th scope="col">City</th>
      <th scope="col">State</th>
      <th scope="col"></th>
    </tr>
  </thead>
  <tbody>
            {colleges && colleges.map(college =>  
            {
                index=index+1
            return (
                <tr>
                <th scope="row">{index}</th>
                <td>{college.name}</td>
                <td>{college.city}</td>
                <td>{college.state}</td>
                <td><Link to={"/college/"+String(college._id)}  >
                    <button key={college.name} className= "btn btn-secondary" > 
                    Click Here
                    </button>
                    </Link></td>

                {/* <div className="row">
                <Link to={"/college/"+String(college._id)}  >
                    <button key={college.name} className= "btn btn-secondary" > 
                    {college.name}
                    </button>
                    </Link>
                    </div>  */}
              </tr>
              
                    
            )}
)}
</tbody>
            </table>
        </div>
    )
}
export default CourseList;