import { Routes, Route, Navigate } from "react-router";
import Dashboard from "./Dashboard";
import KanbasNavigation from "./Navigation";
import Courses from "./Courses";
import "./styles.css";
//import * as db from "./Database";
import * as client from "./Courses/client";
import { useEffect, useState } from "react";
import store from "./store";
import { Provider } from "react-redux";
import PeopleTable from "./Courses/People/People";
import Account from "./Account/";
import ProtectedRoute from "./ProtectedRoute";
import axios from "axios";


export default function Kanbas() {
  const [courses, setCourses] = useState<any[]>([]);
//   const REMOTE_SERVER = process.env.REACT_APP_REMOTE_SERVER;
//   const USERS_API = `${REMOTE_SERVER}/api/users`;
//   const REMOTE_SERVER = process.env.REACT_APP_REMOTE_SERVER;
// const COURSES_API = `${REMOTE_SERVER}/api/courses`;

  // const REMOTE_SERVER = process.env.REACT_APP_API_BASE;
  // console.log("REMOTE SERVER", REMOTE_SERVER)
  // const COURSES_API = `${REMOTE_SERVER}/api/courses`;
  // console.log("COurses api", COURSES_API)
  
  const fetchCourses = async () => {
    const courses = await client.fetchAllCourses();
    setCourses(courses);
  };
  useEffect(() => {
    fetchCourses();
  }, []);

  // const fetchCourses = async () => {
  //   try {
  //     console.log("fetching courses")
  //     const response = await axios.get(COURSES_API);
  //     setCourses(response.data);
  //   }
  //   catch (err: any) {
  //     console.log("failed fetching courses")
  //     console.error(err);
  //   }
  // }
  // console.log("courses fetched")
  // useEffect(() => {
    
  //   fetchCourses();
  // }, []);
  

  const [course, setCourse] = useState<any>({
    _id: "1234", name: "New Course", number: "New Number",
    startDate: "2023-09-10", endDate: "2023-12-15", description: "New Description",
  });

  const addNewCourse = async () => {
    const newCourse = await client.createCourse(course);
    setCourses([...courses, newCourse]);
  };
  const deleteCourse = async (courseId: any) => {
    await client.deleteCourse(courseId);
    setCourses(courses.filter((course) => course._id !== courseId));
  };
  const updateCourse = async () => {
    await client.updateCourse(course);
    setCourses(
      courses.map((c) => {
        if (c._id === course._id) {
          return course;
        } else {
          return c;
        }
      })
    );
  };

  return (
    <Provider store={store}>
      <div id="wd-kanbas" className="h-100">
        <div className="d-flex h-100">
          <div className="d-none d-md-block bg-black">
            <KanbasNavigation />
          </div>
          <div className="flex-fill p-4">
            <Routes>
              <Route path="/" element={<Navigate to="Dashboard" />} />
              <Route path="/Account/*" element={<Account />} />
              <Route path="Dashboard" element={<ProtectedRoute><Dashboard
                courses={courses}
                course={course}
                setCourse={setCourse}
                addNewCourse={addNewCourse}
                deleteCourse={deleteCourse}
                updateCourse={updateCourse} />
              </ProtectedRoute>} />
              <Route path="Courses/:id/*" element={<ProtectedRoute><Courses courses={courses} /></ProtectedRoute>} />
              <Route path="Calendar" element={<h1>Calendar</h1>} />
              <Route path="Inbox" element={<h1>Inbox</h1>} />
            </Routes>
          </div>
        </div>
      </div>
    </Provider>
  );
}
export { }
