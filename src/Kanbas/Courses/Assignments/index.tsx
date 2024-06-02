import { FaCaretDown, FaCheckCircle, FaEllipsisV, FaGripVertical, FaPlus, FaPlusCircle, FaSquare } from "react-icons/fa";
import { BsGripVertical } from "react-icons/bs";
import { Link, useParams } from "react-router-dom";
import { FaBook } from "react-icons/fa";
import { FaEllipsis, FaGrip, FaPenToSquare, FaSquareCaretDown } from "react-icons/fa6";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap';
import '../index.css'
export default function Assignments() {
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
                        <button id="wd-add-assignment" className="btn btn-lg btn-danger me-1 float-end">
                            <FaPlus className="position-relative me-2" style={{ bottom: "1px" }} />
                            Assignment
                        </button>
                        <button id="wd-add-assignment-group" className="btn btn-lg btn-secondary me-1 float-end">
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
                        <li className="list-group-item"
                            style={{
                                padding: "10px",

                            }}>
                            <BsGripVertical className="me-2" />
                            <FaBook className="mx-2" style={{ color: 'green' }} />
                            <a href='#/Kanbas/Courses/1234}/Assignments/123' style={{ textDecoration: 'none', color: 'black', fontWeight: 'bold' }}>
                                A1 - ENV + HTML
                            </a>
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
                        <li className="list-group-item"
                            style={{
                                padding: "10px",

                            }}>
                            <BsGripVertical className="me-2" />
                            <FaBook className="mx-2" style={{ color: 'green' }} />
                            <a href='#/Kanbas/Courses/1234/Assignments/123' style={{ textDecoration: 'none', color: 'black', fontWeight: 'bold' }}>
                                A2 - CSS + BOOTSTRAP
                            </a>
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
                        <li className="list-group-item"
                            style={{
                                padding: "10px",

                            }}
                        >
                            <BsGripVertical className="me-2" />
                            <FaBook className="mx-2" style={{ color: 'green' }} />
                            <a href='#/Kanbas/Courses/1234/Assignments/123' style={{ textDecoration: 'none', color: 'black', fontWeight: 'bold' }}>
                                A3 - JAVASCRIPT + REACT
                            </a>
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
                        
                    </ul>
                </li>
            </ul>
        </>
    );
}