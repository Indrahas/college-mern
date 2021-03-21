import {BrowserRouter as Router,Route} from 'react-router-dom';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";

import Navbar from "./components/navbar";
import StateList from "./components/stateList"
import CourseList from "./components/courseList" 
import SearchList from "./components/searchList" 
import SelectState from "./components/selectState"
import SelectCourse from "./components/selectCourse"
import CollegeDetails from "./components/collegeDetails"
import StudentDetails from "./components/studentDetails"
import NotFound from "./components/NotFound"
function App() {
  return (
    <Router>
      <div >
      <Navbar />
      </div>
      <Route path="/" exact component={SearchList} />
      <Route path="/states/:state" exact component={StateList} />
      <Route path="/states" exact component={SelectState} />
      <Route path="/courses/:course" exact component={CourseList} />
      <Route path="/courses" exact component={SelectCourse} />
      <Route path="/college/:id" exact component={CollegeDetails} />
      <Route path="/student/:id" exact component={StudentDetails} />
      <Route path="/error" exact component={NotFound} />
    </Router>
  );
}

export default App;
