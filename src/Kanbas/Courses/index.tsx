import CoursesNavigation from "./Navigation";
import Modules from "./Modules";
import Home from "./Home";
import { Navigate, Route, Routes,  useLocation } from "react-router";
import {useParams} from "react-router-dom";
import Assignments from "./Assignments";
import AssignmentEditor from "./Assignments/Editor";
import { FaAlignJustify } from 'react-icons/fa';
import Grades from "./Grades";
import AddAssignmentEditor from "./Assignments/AddAssignmentEditor";
import PeopleTable from "./People/People";

export default function Courses({ courses }: { courses: any[]}) {
    const  param  = useParams();
    const cid = param.id;
    const { pathname } = useLocation();
    const course = courses.find((course) => course._id === cid);
    
    return (
        <div id="wd-courses">
            <h2 className="text-danger">
                <FaAlignJustify className="me-4 fs-4 mb-1" />
                {course && course.name}  &gt; {pathname.split("/")[4]}
            </h2>
            <hr />
            <div className="d-flex">
                <div className="d-none d-md-block">
                    <CoursesNavigation />
                </div>
                <div className="flex-fill">
                    <Routes>
                        <Route path="/" element={<Navigate to="Home" />} />
                        <Route path="Home" element={<Home />} />
                        <Route path="Modules" element={<Modules />} />
                        <Route path="Assignments"
                            element={<Assignments />} />
                        <Route path="Assignments/:id" element={<AssignmentEditor />} />
                        <Route path="Assignments/Editor" element={<AddAssignmentEditor />} />
                        <Route path="Grades" element={<Grades />} />
                        <Route path="People" element={<PeopleTable />} />
                        <Route path="People/:uid" element={<PeopleTable />} />
                    </Routes>
                </div>
            </div>
        </div>
    );
}
