import { useLocation} from "react-router";
import {useParams } from "react-router-dom";
import * as db from "../../Database";
import "./Editor.css"

export default function AssignmentEditor() {

  const { pathname } = useLocation();
  const currParam = useParams();
  const aid = currParam.id;
  const assignments = db.default.assignments;
  //console.log("assignments", assignments)
  const currAssignment = assignments.filter((assignment: any) => assignment._id === aid)[0];
  //console.log("currAssignment", currAssignment)

  return (

    <div id="wd-assignments-editor">
      <div className="container">
        <div className="row">
          <div className="col">
            <label htmlFor="wd-name">Assignment Name</label>
          </div>
        </div>
        <div className="row">
          <div className="col">
            <input id="wd-name" value={currAssignment.title} className="form-control" />
          </div>
        </div>
        <br />
        <div className="row">
          <div className="col">
            <textarea id="wd-description" className="form-control">
              {currAssignment.description}
            </textarea>
          </div>
        </div>
        <br />
        <div className="row py-4">
          <div className="col text-end">
            <label htmlFor="wd-points">{currAssignment.points}</label>
          </div>
          <div className="col">
            <input id="wd-points" value={100} className="form-control" />
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

            <input type="checkbox" checked id="textEntry" className="input"/>
            <label>Text Entry</label> <br />
            <input type="checkbox" checked className="input"/> Website URL <br />
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
            <input type="date" id="wd-text-fields-dob" value={currAssignment.due_date} className="form-control" />
            <br />
          </div>
        </div>
        <div className="row py-4">
          <div className="col">
            <label htmlFor="wd-available-from">Available From</label>
          </div>
          <div className="col">
            <input type="date" id="wd-text-fields-dob" value="2024-05-06" className="form-control" />
            <br />
          </div>
          <div className="col">
            <label htmlFor="wd-until">Until</label>
          </div>
          <div className="col">
            <input type="date" id="wd-text-fields-dob" value="2024-05-20" className="form-control" />
            <br />
          </div>
        </div>
      </div>
    </div>
  );
}
