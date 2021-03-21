import {useParams} from 'react-router-dom';
import {useState,useEffect} from 'react';
const axios=require('axios')

function StudentDetails(){
    const {id} = useParams()
    console.log(id)

    var [student,setStudent]=useState([])
    var [loading,setLoading]=useState(true);
    useEffect(()=>{
        
        axios.get("http://localhost:5000/student/"+id).then(res=>{
            console.log(res.data)

            setStudent(res.data)
            setLoading(false)
        })       
    },[id])
    return(
        <div>
            { loading && <p>Still loading..</p>}
 
            {student && <p>{student.name}</p>}
            
        </div>
    )
}
export default StudentDetails;