export default function AssignmentEditor() {
    return (
      <div id="wd-assignments-editor">
        <label htmlFor="wd-name">Assignment Name</label>
        <input id="wd-name" value="A1 - ENV + HTML" />
        <br /><br />
        <textarea id="wd-description">
          The assignment is available online
          Submit a link to the landing page of
        </textarea>
        <br />
        <table>
          <tr>
            <td align="right" valign="top">
              <label htmlFor="wd-points">Points</label>
            </td>
            <td>
              <input id="wd-points" value={100} />
            </td>
          </tr>
          <tr>
            <td align="right" valign="top">
              <label htmlFor="wd-group">Assignment Group</label>
            </td>
            <td>
                <select id="wd-group">
                    <option value="VAL1">ASSIGNMENTS</option>
                </select>
            </td>
          </tr>
          <tr>
            <td align="right" valign="top">
              <label htmlFor="wd-display-grade-as">Display Grade As</label>
            </td>
            <td>
                <select id="wd-display-grade-as">
                    <option value="VAL1">Percentage</option>
                </select>
            </td>
          </tr>
          <tr>
            <td align="right" valign="top">
              <label htmlFor="wd-submission-type">Submission Type</label>
            </td>
            <td>
                <select id="wd-submission-type">
                    <option value="VAL1">Online</option>
                </select>
            </td>
          </tr>
          <tr>
            <td align="right" valign="top">
              <label>Online Entry Options</label>
            </td>
            <td>
            <br/>
                <input type="checkbox"
                    name="check-submission-type" id="wd-text-entry
                    "/>
                <label htmlFor="wd-chkbox-comedy">Text Entry</label><br/>
                <input type="checkbox"
                    name="check-submission-type" id="wd-website-ur"/>
                <label htmlFor="wd-chkbox-drama">Website URL</label><br/>
                <input type="checkbox"
                    name="check-submission-type" id="wd-media-recordings"/>
                <label htmlFor="wd-chkbox-scifi">Media Recordings</label><br/>
                <input type="checkbox"
                    name="check-submission-type" id="wd-student-annotation"/>
                <label htmlFor="wd-chkbox-fantasy">Student Annotations</label><br/>
                <input type="checkbox"
                    name="check-submission-type" id="wd-wd-file-upload"/>
                <label htmlFor="wd-chkbox-fantasy">File Uploads</label>
            </td>
          </tr>
          <tr>
            <td align="right" valign="top">
              <label htmlFor="wd-assign-to">Assign To</label>
            </td>
            <td>
              <input id="wd-assign-to" value="Everyone" />
            </td>
          </tr>
          <tr>
            <td align="right" valign="top">
              <label htmlFor="wd-due-date">Due</label>
            </td>
            <td>
            <input type="date"
                id="wd-text-fields-dob"
                value="2024-05-13"/>
                <br/>
            </td>
          </tr>
          <tr>
            <td align="right" valign="top">
              <label htmlFor="wd-available-from">Available From</label>
            </td>
            <td>
            <input type="date"
                id="wd-text-fields-dob"
                value="2024-05-06"/>
                <br/>
            </td>
            <td align="right" valign="top">
              <label htmlFor="wd-until">Until</label>
            </td>
            <td>
            <input type="date"
                id="wd-text-fields-dob"
                value="2024-05-20"/>
                <br/>
            </td>
          </tr>
          {/* Complete on your own */}
        </table>
        </div>
);}
