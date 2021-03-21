import {Link} from 'react-router-dom';
function SelectCourse(){

    const courses=["CSE","ECE","EEE","Metallurgy","Textile","Engineering physics","Chemical","Biochemical","Robotics",
                "Environmental","Civil","Aerospace","Mechanical"];
        courses.sort();
  
        return(<div className="container">
            <h2 className="text-center">Select a course</h2>
            <div className="row  mt-3">
                {courses.map(course=> <div className="col-md-3 col-sm-3 pb-2 d-flex justify-content-center">
                    <Link to={"/courses/"+course} Style={"text-decoration:none;"} >
                        <button key={course} className= "btn btn-outline-success" >
                             {course}
                             </button>
                             </Link>
                             </div>
                )}
            </div>
            </div>
        )

}
export default SelectCourse;