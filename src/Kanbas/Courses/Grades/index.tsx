import { LiaFileImportSolid } from "react-icons/lia";
import { IoMdSettings } from "react-icons/io";
import { FaFilter } from "react-icons/fa";
import { FaMagnifyingGlass } from "react-icons/fa6";
import { useParams } from "react-router-dom";
import * as db from "../../Database";

export default function Grades() {
    const currParams = useParams();
    const cid = currParams.id;
    const grades = db.default.grades;
    const users = db.default.users;
    const enrollments = db.default.enrollments;

    console.log("enrollments", enrollments)
    const currStudents = enrollments.filter((enrollment: any) => enrollment.course === cid);
    console.log("currStudents", currStudents)
    console.log("grades", grades)

    const currGrades = [];
    for (let i = 0; i < currStudents.length; i++) {
        console.log(currStudents[i].user)
        const studentGrades = grades.filter((grade: any) => grade.student === currStudents[i].user);
        if (studentGrades) {
            currGrades.push(studentGrades);
        }
    }

    console.log("currGrades", currGrades)


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
                        Apply Fiters
                    </button>
                </div>
            </div>


            <div className="table-responsive">

                <table className="table table-striped table-bordered">
                    <tbody>
                        <tr>
                            <th className="text-left">Student Name</th>
                            <td className="text-center">A1 SETUP <br /> Out of 100</td>
                            <td className="text-center">A2 HTML <br /> Out of 100</td>
                            <td className="text-center">A3 CSS <br /> Out of 100</td>
                            <td className="text-center">A4 BOOTSTRAP <br /> Out of 100</td>
                        </tr>


                        <tr>
                            <td style={{ color: 'red' }}>Spencer Belsky</td>
                            <td className="d-flex justify-content-center"><input type="number" defaultValue={69} className=" form-control form-control-sm text-center" style={{ width: '70px' }}></input></td>
                            <td className="text-center">100%</td>
                            <td className="text-center">100%</td>
                            <td className="text-center">100%</td>
                        </tr>
                        <tr>
                            <td style={{ color: 'red' }}>Paul Atreides</td>
                            <td className="text-center">99%</td>
                            <td className="text-center">99%</td>
                            <td className="text-center">99%</td>
                            <td className="text-center">99%</td>
                        </tr>
                        <tr>
                            <td style={{ color: 'red' }}>Winston Smith</td>
                            <td className="text-center">98%</td>
                            <td className="text-center">98%</td>
                            <td className="text-center">98%</td>
                            <td className="text-center">98%</td>
                        </tr>
                        <tr>
                            <td style={{ color: 'red' }}>Barbra Striesland</td>
                            <td className="text-center">97%</td>
                            <td className="text-center">97%</td>
                            <td className="text-center">97%</td>
                            <td className="text-center">97%</td>
                        </tr>
                        <tr>
                            <td style={{ color: 'red' }}>Ofra Katz</td>
                            <td className="text-center">90%</td>
                            <td className="text-center">90%</td>
                            <td className="text-center">90%</td>
                            <td className="text-center">90%</td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <div className="table table-striped table-bordered">

                <div className="col">
                    <div className="row py-3">
                        <b>Student Name</b>
                    </div>
{/*                     
                    {currGrades.map((student) => (
                        <td className="text-left">{student} <br /> Out of 100</td>
                    ))} */}
                </div>
                <div className="col">
                    Assignment Names
                </div>
            </div>
        </div>

    )
}