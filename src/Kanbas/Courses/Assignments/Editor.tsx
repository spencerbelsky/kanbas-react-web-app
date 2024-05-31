export default function AssignmentEditor() {
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
            <input id="wd-name" value="A1 - ENV + HTML" className="form-control" />
          </div>
        </div>
        <br />
        <div className="row">
          <div className="col">
            <textarea id="wd-description" className="form-control">
              The assignment is available online
              Submit a link to the landing page of
            </textarea>
          </div>
        </div>
        <br />
        <div className="row py-4">
          <div className="col">
            <label htmlFor="wd-points">Points</label>
          </div>
          <div className="col "> 
            <input id="wd-points" value={100} className="form-control" />
          </div>
        </div>
        <div className="row py-4">
          <div className="col">
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
          <div className="col">
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
          <div className="col">
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
        <div className="row py-4">
          <div className="col">
            <label>Online Entry Options</label>
          </div>
          <div className="col">
            <br />
          
            <input type="checkbox" className="form-control" name="check-submission-type" id="wd-text-entry" />
            <label htmlFor="wd-text-entry">Text Entry</label><br />
            <input type="checkbox" className="form-control" name="check-submission-type" id="wd-website-ur" />
            <label htmlFor="wd-website-ur">Website URL</label><br />
            <input type="checkbox" className="form-control" name="check-submission-type" id="wd-media-recordings" />
            <label htmlFor="wd-media-recordings">Media Recordings</label><br />
            <input type="checkbox" className="form-control" name="check-submission-type" id="wd-student-annotation" />
            <label htmlFor="wd-student-annotation">Student Annotations</label><br />
            <input type="checkbox" className="form-control" name="check-submission-type" id="wd-wd-file-upload" />
            <label htmlFor="wd-wd-file-upload">File Uploads</label>


            
          </div>
        </div>
        <div className="row py-4">
          <div className="col">
            <label htmlFor="wd-assign-to">Assign To</label>
          </div>
          <div className="col">
            <input id="wd-assign-to" value="Everyone" className="form-control" />
          </div>
        </div>
        <div className="row py-4">
          <div className="col">
            <label htmlFor="wd-due-date">Due</label>
          </div>
          <div className="col">
            <input type="date" id="wd-text-fields-dob" value="2024-05-13" className="form-control" />
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
