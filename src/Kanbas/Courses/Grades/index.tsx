import { LiaFileImportSolid } from "react-icons/lia";
import { IoMdSettings } from "react-icons/io";
import { FaFilter } from "react-icons/fa";
import { FaMagnifyingGlass } from "react-icons/fa6";
import { useParams } from "react-router-dom";
import * as db from "../../Database";

export default function Grades() {
    const currParams = useParams();
    const courseId = currParams.id;
    const grades = db.default.grades[0];
    const users = db.default.users[0];
    //const enrollments = db.default.enrollments;

    // console.log("enrollments", enrollments)
    // console.log("users", users)
    // const currStudents = enrollments.filter((enrollment: any) => enrollment.course === cid);
    // console.log("currStudents", currStudents)
    // console.log("grades", grades)

    // const currGrades = [];
    // for (let i = 0; i < currStudents.length; i++) {
    //     console.log(currStudents[i].user)
    //     const studentGrades = grades.filter((grade: any) => grade.student === currStudents[i].user);
    //     if (studentGrades) {
    //         currGrades.push(studentGrades);
    //     }
    // }

    // console.log("currGrades", currGrades)

    const assignments = db.default.assignments[0].filter((assignment) => assignment.course === courseId);
    const enrollments = db.default.enrollments.filter((enrollment) => enrollment.course === courseId);


    return (
        <div className="pl-5">
            <div className="row justify-content-end py-3">
                <div className="col-auto">
                    <button id="wd-import-grades" className="btn btn-lg btn-secondary me-1 ">
                        <LiaFileImportSolid className="position-relative me-2" style={{ bottom: "1px" }} />
                        Import
                    </button>
                </div>
                <div className="col-auto">
                    <button id="wd-export-grades" className="btn btn-lg btn-secondary me-1 ">
                        <LiaFileImportSolid className="position-relative me-2" style={{ bottom: "1px", transform: "scaleX(-1)" }} />
                        Export
                    </button>
                </div>
                <div className="col-auto">
                    <button id="wd-export-grades" className="btn btn-lg btn-secondary me-1">
                        <IoMdSettings className="position-relative me-2" style={{ bottom: "1px" }} />
                    </button>
                </div>
            </div>

            <div className="row py-3">
                <div className="col">
                    <b>Student Name</b> <br />
                    <input type="text" className="form-control" placeholder="Search Students" />
                </div>

                <div className="col">
                    <b>Assignment Names</b> <br />
                    <input type="text" className="form-control" placeholder="Search Assignments" />
                </div>
            </div>

            <div className="row py-3">
                <div className="col-auto">
                    <button id="wd-import-grades" className="btn btn-lg btn-secondary me-1 float-end">
                        <FaFilter className="position-relative me-2" style={{ bottom: "1px" }} />
                        Apply Filters
                    </button>
                </div>
            </div>


            <div className="table-responsive">
                <table className="table table-striped table-bordered">
                    <thead>
                        <th>Student Name</th>
                        {assignments.map((assignment) => (<th>{assignment.title}</th>))}
                    </thead>
                    <tbody>
                        {enrollments.map((enrollment) => {
                            const currUser = db.default.users.find((user) => user._id === enrollment.user);
                            return (
                                <tr>
                                    <td style={{ color: 'red' }}>{currUser?.firstName} {currUser?.lastName}</td> 
                                    {assignments.map((assignment) => {
                                        const currGrade = db.default.grades.find(
                                            (grade) => grade.student === enrollment.user && grade.assignment === assignment._id);
                                        return (<td  className="text-center">{currGrade?.grade || ""}%</td>);
                                    })}
                                </tr>);
                        })}
                    </tbody>
                </table>
            </div>
        </div>);
}