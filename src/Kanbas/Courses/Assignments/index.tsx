import { FaCaretDown, FaCheckCircle, FaEllipsisV, FaBook, FaPlus, FaPlusCircle } from "react-icons/fa";
import { BsGripVertical } from "react-icons/bs";
import { Link, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { deleteAssignment, addAssignment, updateAssignment, setAssignments, setAssignment } from "./reducer";
import { useEffect, useState } from "react";
import * as client from "./client";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap';
import '../index.css'
export default function Assignments() {
    const param = useParams();
    const courseId = param.id;
    const dispatch = useDispatch();
    const { assignments } = useSelector((state: any) => state.assignmentsReducer);
    const { assignment } = useSelector((state: any) => state.assignmentsReducer.assignment);
    
    useEffect(() => {
        client.findAssignmentsForCourse(courseId).then((assignments) => {
            dispatch(setAssignments(assignments));
        });
    }, [courseId, dispatch]);

    const deleteAssignmentHandler = (assignmentId: string) => {
        client.deleteAssignment(assignmentId).then(() => {
            dispatch(deleteAssignment(assignmentId));
        });
    };

    return (
        <>
            <div>
                <div className="flex-fill" style={{
                    textAlign: 'right', justifyContent: 'space-between', display: 'flex', padding: '10px',
                }}>
                    <div style={{ textAlign: 'left', float: "left" }}>
                        <input
                            type="text"
                            className="form-control"
                            placeholder="Search for Assignment"
                            id="SearchForAssignments"
                        />
                    </div>


                    <div className="d-flex">
                        <button id="wd-add-assignment" className="btn btn-lg btn-danger me-1 float-end"  >
                            <Link to={`/Kanbas/Courses/${courseId}/Assignments/Editor`} style={{ textDecoration: 'none', color: 'black', fontWeight: 'bold' }} >
                                <FaPlus className="position-relative me-2" style={{ bottom: "1px" }} />
                                Assignment
                            </Link>
                        </button>
                        <button id="wd-add-assignment-group" className="btn btn-lg btn-secondary me-1 float-end" >
                            <FaPlus className="position-relative me-2" style={{ bottom: "1px" }} />
                            Group
                        </button>


                        <div className="dropdown mt-1" style={{ float: 'right' }}>
                            <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                                <li><a className="dropdown-item" href="#">Edit</a></li>
                                <li><a className="dropdown-item" href="#">Delete</a></li>
                                <li><a className="dropdown-item" href="#">Hide</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <hr />
            <ul className="list-group wd-modules">
                <li className="list-group-item bg-secondary p-1"

                >
                    <div>
                        <BsGripVertical className="me-2" /><FaCaretDown /> ASSIGNMENTS
                        <span className="float-end">
                            <FaCheckCircle className="text-success" />
                            <FaPlusCircle className="ms-2" /><FaEllipsisV className="ms-2" />
                        </span>
                        <span
                            className="badge rounded-pill float-end py-1 px-2 mr-1 mx-3"
                            style={{
                                color: "black",
                                border: "solid 1px",
                                borderColor: "gray",
                                textAlign: "center",
                            }}>40% of Total</span>
                    </div>

                    <ul className="list-group wd-lessons">
                        {assignments
                            .filter((assignment: any) => assignment.course === courseId)
                            .map((assignment: any) => (
                                <li className="list-group-item" style={{
                                    padding: "10px",
                                }}>
                                    <BsGripVertical className="me-2" />
                                    <FaBook className="mx-2" style={{ color: 'green' }} />
                                    <Link to={`/Kanbas/Courses/${courseId}/Assignments/${assignment._id}`} style={{ textDecoration: 'none', color: 'black', fontWeight: 'bold' }} onClick={() => dispatch(setAssignment(assignment))}>
                                        {assignment.title}
                                    </Link>
                                    <button className="btn btn-danger float-end" onClick={() => {
                                        if (
                                            window.confirm("Are you sure to delete this record?")
                                        ) {
                                            deleteAssignmentHandler(assignment._id);
                                        } else {
                                            console.log("not delete")
                                        }
                                    }}>
                                        Delete</button>
                                    <span className="float-end">
                                        <FaCheckCircle className="text-success" />
                                        <FaEllipsisV className="ms-2" />
                                    </span>
                                    <div>
                                        <span>
                                            <span style={{ color: 'red' }}>Multiple Modules</span> | <span style={{ fontWeight: 'bold' }}>Not Available Until </span> May 6 at 12:00am |
                                        </span>

                                        <span>
                                            <span style={{ fontWeight: 'bold' }}>Due:</span> May 13 at 11:59pm | 100 pts
                                        </span>
                                    </div>
                                </li>
                            ))}
                    </ul>

                </li>
            </ul>
        </>
    );
}