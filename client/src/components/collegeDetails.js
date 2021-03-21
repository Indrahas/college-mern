import {useParams,useHistory} from 'react-router-dom';
import {useState,useEffect} from 'react';
const axios=require('axios')

function CollegeDetails(){
    const {id} = useParams()
    console.log(id)
    const history=useHistory()
    var [college,setCollege]=useState([]);
    var [students,setStudents]=useState([])
    var [loading,setLoading]=useState(true);
    useEffect(()=>{
        
        axios.get("/college/"+id).then(res=>{
            if(!res.data.college){
                    history.push("/error")
            }
            console.log(res.data)
            setCollege(res.data.college)
            setStudents(res.data.students)
            setLoading(false)
        }).catch(err=>{
            console.log(err)
            history.push("/error")})       
    },
    //eslint-disable-next-line
    [id])
    return(
        <div>
            { loading && <div className="text-center pt-2"> <div className="spinner-grow" Style="width: 3rem; height: 3rem;" role="status">
  <span className="sr-only">Loading...</span>
</div></div>}
            { college && <div className="container  pt-1">
                <h2 className="text-center pb-3">{college.name} details</h2>
                <div className="row">
                    <div className="col-6 text-right">
                            <p className="font-weight-bold">Name :</p>
                    </div>
                    <div className="col-6 text-left">
                        <p>{college.name}</p>
                    </div>
                </div>
                <div className="row">
                    <div className="col-6 text-right">
                            <p className="font-weight-bold">Year Founded :</p>
                    </div>
                    <div className="col-6 text-left">
                        <p>{college.year_founded}</p>
                    </div>
                </div>
                <div className="row">
                    <div className="col-6 text-right">
                            <p className="font-weight-bold">City :</p>
                    </div>
                    <div className="col-6 text-left">
                        <p>{college.city}</p>
                    </div>
                </div>
                <div className="row">
                    <div className="col-6 text-right">
                            <p className="font-weight-bold">State :</p>
                    </div>
                    <div className="col-6 text-left">
                        <p>{college.state}</p>
                    </div>
                </div>
                <div className="row">
                    <div className="col-6 text-right">
                            <p className="font-weight-bold">Courses offered :</p>
                    </div>
                    <div className="col-6 text-left">
                        <p>{college.courses}</p>
                    </div>
                </div>
                
                </div>}
                <div className="dropdown-divider"></div>
               {college && <h2 className="text-center pt-2 pb-3">{college.name } Alumni</h2>}
                <div></div>
                <div className="card-deck d-flex justify-content-center">   
            {students && students.map(student=>
            // <div className="row">
            // <div className="col-md-2">
            //     <Link to={"/student/"+String(student._id)}  >
            //     <button key={student._id} className= "btn btn-secondary" >
            //          {student.name}
            //     </button>
            //     </Link>
            //     </div>
            // </div>
            <div>
                <div className="card text-white bg-success mb-3" Style={"width: 18rem; height:18rem;"}>
  <div className="card-header">{student.name}</div>
  <div className="card-body">
    <p className="card-title">Year of batch : {student.year_of_batch}</p>
    <p className="card-text">Skills: {student.skills}</p>
  </div>
</div>
            </div>
            )}
            </div>
            
        </div>
    )
}
export default CollegeDetails;