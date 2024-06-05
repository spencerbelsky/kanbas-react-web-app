import { addAssignment, deleteAssignment, updateAssignment, setAssignment } from "./reducer";
import { Link, useLocation, useNavigate, useParams } from "react-router-dom";
import * as db from "../../Database";
import "./Editor.css"
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

export default function AddAssignmentEditor() {
  const dispatch = useDispatch();
  const currParam = useParams();
  const { pathname } = useLocation();
  //console.log("currParam", currParam)
  const aid = currParam.id;
  const cid = pathname.split("/")[3];
  //console.log("aid", aid)
  //console.log("cid", cid)
  const { assignments } = useSelector((state: any) => state.assignmentsReducer);
  const { assignment } = useSelector((state: any) => state.assignmentsReducer.assignment);
  console.log("assignments", assignments)
  console.log("assignment", assignment)


  const currAssignment = assignments.filter((assignment: any) => assignment._id === aid)[0] ||
    { _id: "0", title: "New Assignment", description: "New Assignment Description", points: 100, due_date: "2025-05-06", available_from: "2024-05-06", };

  //const currAssignment = assignments.filter((assignment: any) => assignment._id === aid)[0];
  console.log("currAssignment", currAssignment)
  console.log("currAssignment.title", currAssignment.title)
  const navigate = useNavigate();
  
  const handleSave = () => {
    console.log("Actually saving assignment TBD in later assignments");
    navigate(`/Kanbas/Courses/${aid}/Assignments`);
  };

  const [assignmentName, setAssignmentName] = useState("");
  //const { assignments } = useSelector((state: any) => state.assignment);

  //console.log("aid", aid)
  
  //const assignments = db.default.assignments[0];
  //console.log("assignments", assignments)

  // const currAssignment = assignments.filter((assignment: any) => assignment._id === aid)[0] || {
  //   currAssignment: {
  //   _id: "0",
  //   title: "New Assignment",
  //   description: "New Assignment Description",
  //   points: 100,
  //   due_date: "2025-05-06",
  //   available_from: "2024-05-06",
  //   }
  // };
  return (

    <div id="wd-assignments-editor">
      <div className="container">
        <div className="row">
          <div className="col">
            <label htmlFor="wd-name">New Assignment Name</label>
          </div>
        </div>
        <div className="row">
          <div className="col">
            <input id="wd-name" value={currAssignment.title} className="form-control"  onChange={(e) => dispatch(setAssignment({...currAssignment, title: e.target.value}))}/>
          </div>
        </div>
        <br />
        <div className="col">
          <label htmlFor="wd-description">Description</label>
        </div>
        <div className="row">
          <div className="col">
            <input id="wd-description" className="form-control" value={currAssignment.description} onChange={(e) => dispatch(setAssignment({...currAssignment, description: e.target.value}))}/>
          </div>
        </div>
        <br />
        <div className="row py-4">
          <div className="col text-end">
            <label htmlFor="wd-points">Points</label>
          </div>
          <div className="col">
            <input id="wd-points" value={currAssignment.points} className="form-control" onChange={(e) => dispatch(setAssignment({...currAssignment, points: e.target.value}))}/>
          </div>
        </div>
        <div className="row py-4">
          <div className="col text-end">
            <label htmlFor="wd-group">Assignment Group</label>
          </div>
          <div className="col">
            <select id="wd-group" className="form-control">
              <option value="VAL1">ASSIGNMENTS</option>
              <option value="VAL2">QUIZZES</option>
              <option value="VAL3">PROJECTS</option>
            </select>
          </div>
        </div>
        <div className="row py-4">
          <div className="col text-end">
            <label htmlFor="wd-display-grade-as">Display Grade As</label>
          </div>
          <div className="col">
            <select id="wd-display-grade-as" className="form-control">
              <option value="VAL1">Percentage</option>
              <option value="VAL2">Letter Grade</option>
              <option value="VAL3">Pass/Fail</option>
            </select>
          </div>
        </div>
        <div className="row py-4">
          <div className="col text-end">
            <label htmlFor="wd-submission-type">Submission Type</label>
          </div>
          <div className="col">
            <select id="wd-submission-type" className="form-control">
              <option value="VAL1">Online</option>
              <option value="VAL2">In-person</option>
              <option value="VAL3">Email</option>
            </select>
          </div>
        </div>
        <div className="row py-4 border-radius">
          <div className="col text-end">
            <label>Online Entry Options</label>
          </div>
          <div className="col">
            <br />

            <input type="checkbox" checked id="textEntry" className="input" />
            <label>Text Entry</label> <br />
            <input type="checkbox" checked className="input" /> Website URL <br />
            <label><input type="checkbox" checked /> Media recordings </label><br />
            <input type="checkbox" /> Student Annotation <br />
            <input type="checkbox" checked /> File Uploads <br />
            <input type="checkbox" /> Restrict Upload File Types <br />

          </div>
        </div>
        <div className="row py-4">
          <div className="col text-end">
            <label htmlFor="wd-assign-to">Assign To</label>
          </div>
          <div className="col">
            <input id="wd-assign-to" value="Everyone" className="form-control" />
          </div>
        </div>
        <div className="row py-4">
          <div className="col text-end">
            <label htmlFor="wd-due-date">Due</label>
          </div>
          <div className="col">
            <input type="date" id="wd-text-fields-dob" value={currAssignment.due_date} className="form-control" onChange={(e) => dispatch(setAssignment({...currAssignment, due_date: e.target.value}))}/>
            <br />
          </div>
        </div>
        <div className="row py-4">
          <div className="col">
            <label htmlFor="wd-available-from">Available From</label>
          </div>
          <div className="col">
            <input type="date" id="wd-text-fields-dob" value={currAssignment.available_from} className="form-control"  onChange={(e) => dispatch(setAssignment({...currAssignment, available_from: e.target.value}))} />
            <br />
          </div>
          <div className="col">
            <label htmlFor="wd-until">Until</label>
          </div>
          <div className="col">
            <input type="date" id="wd-text-fields-dob" value={currAssignment.due_date} className="form-control"  onChange={(e) => dispatch(setAssignment({...currAssignment, due_date: e.target.value}))}/>
            <br />
          </div>
        </div>

        <div className="row">
          <div className="col">
            <Link to={`/Kanbas/Courses/${aid}/Assignments`}>
              <button onClick={() => dispatch(addAssignment({...assignment, course: cid}))} className="btn btn-primary">
                Save
              </button>
            </Link>
          </div>
          <div className="col">
            <Link to={`/Kanbas/Courses/${cid}/Assignments`}
              className="btn">
              <button className="btn btn-danger">
                Cancel
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}