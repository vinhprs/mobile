import { Route, Routes, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { Spinner } from "@chakra-ui/react";
import Homepage from "./pages/Homepage/Homepage";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import Login from "./pages/Login/Login";
import ForgetPassword from "./pages/ForgetPassword/ForgetPassword";
import Otp from "./pages/ForgetPassword/Otp";
import OtpSignup from "./pages/Signup/Otp";
import Signup from "./pages/Signup/Signup";
import Information from "./pages/Signup/Information";
import ListCourses from "./pages/ListCourses/ListCourses";
import CourseItem from "./pages/CourseItem/CourseItem";
import VideoCourse from "./pages/VideoCourse/VideoCourse";
import Assingments from "./pages/Assingments/Assingments";
import MyLearning from "./pages/MyLearning/MyLearning";
import Cart from "./pages/Cart/Cart";
import LoginTeacher from "./pages/Teacher/Login/Login";
import Header from "./pages/Teacher/Header/Header";

import "@fontsource/inter/100.css";
import "@fontsource/inter/200.css";
import "@fontsource/inter/300.css";
import "@fontsource/inter/400.css";
import "@fontsource/inter/500.css";
import "@fontsource/inter/600.css";
import "@fontsource/inter/700.css";
import "@fontsource/inter/800.css";
import "@fontsource/inter/900.css";
import Profile from "./pages/Profile/Profile";
import Dashboard from "./pages/Teacher/Dashboard/Dashboard";
import Sidebar from "./components/Sidebar/Sidebar";
import CreateCourse from "./pages/Teacher/CreateCourse/CreateCourse";
import Settings from "./pages/Profile/Settings";
import Setting from "./pages/Teacher/Settings/Setting";
import MainCourse from "./pages/Teacher/TeacherCourse/MainCourse";
import MainExam from "./pages/Teacher/Exam/MainExam";
function App() {
  const [loading, setLoading] = useState(true);
  const pathname = useLocation();
  console.log(pathname);

  useEffect(() => {
    if (pathname.pathname.includes("teacher") === false) {
      setLoading(true);
      const loadings = setTimeout(() => {
        setLoading(false);
      }, 800);
      return () => clearTimeout(loadings);
    } else {
      setLoading(false);
    }
  }, [pathname]);
  return (
    <div>
      {pathname.pathname.includes("teacher") === true && (
        <>
          <div className="h-full">
            <div
              className={`grid ${
                pathname.pathname !== "/teacher"
                  ? "grid-cols-[300px_1fr]"
                  : "grid-cols-1"
              }`}
            >
              {pathname.pathname !== "/teacher" && (
                <div className="bg-[#1D2026] shadow-[0px_-1px_0px_0px_#363B47] h-screen fixed w-[300px] top-0 left-0">
                  <Sidebar />
                </div>
              )}
              <div
                className={`bg-[#F5F7FA] h-full ${
                  pathname.pathname !== "/teacher"
                    ? "w-[calc(100vw-300px)] left-[300px]"
                    : "w-full"
                } relative`}
              >
                <div className="h-full">
                  {!loading ? (
                    <>
                      {pathname.pathname !== "/teacher" && <Header />}
                      <Routes>
                        <Route path="/teacher" element={<LoginTeacher />} />
                        <Route
                          path="/teacher/dashboard"
                          element={<Dashboard />}
                        />
                        <Route
                          path="/teacher/create-course"
                          element={<CreateCourse />}
                        />
                        <Route
                          path="/teacher/setting/:id"
                          element={<Setting />}
                        />
                        <Route
                          path="/teacher/courses"
                          element={<MainCourse />}
                        />
                        <Route path="/teacher/exam" element={<MainExam />} />
                      </Routes>
                    </>
                  ) : (
                    <div className="pt-[100px] pb-[60px] px-[24px] flex justify-center h-full items-center">
                      <Spinner
                        thickness="4px"
                        speed="0.65s"
                        emptyColor="gray.200"
                        color="blue.500"
                        size="xl"
                      />
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </>
      )}
      {pathname.pathname.includes("teacher") === false && (
        <>
          {!pathname.pathname.includes("assignment") &&
            !pathname.pathname.includes("teacher") &&
            !pathname.pathname.includes("signup/user") && <Navbar />}
          {!loading ? (
            <div className="h-full">
              <Routes>
                {/* <Navbar/> */}
                <Route path="/" element={<Homepage />} />
                <Route path="login" element={<Login />} />
                <Route path="forgetpassword" element={<ForgetPassword />} />
                <Route path="forgetpassword/otp" element={<Otp />} />
                <Route path="signup" element={<Signup />} />
                <Route path="signup/otp" element={<OtpSignup />} />
                <Route path="signup/user" element={<Information />} />
                <Route path="courses" element={<ListCourses />} />
                <Route path="courses/:idcourse" element={<CourseItem />} />
                <Route
                  path="courses/:idcourse/video"
                  element={<VideoCourse />}
                />
                <Route
                  path="courses/:idcourse/assignment"
                  element={<Assingments />}
                />
                <Route path="cart" element={<Cart />} />
                <Route path="/profile/:id" element={<Profile />} />
              </Routes>
            </div>
          ) : (
            <div className="pt-[100px] pb-[60px] px-[24px] flex justify-center h-full items-center">
              <Spinner
                thickness="4px"
                speed="0.65s"
                emptyColor="gray.200"
                color="blue.500"
                size="xl"
              />
            </div>
          )}
          {!pathname.pathname.includes("assignment") &&
            !pathname.pathname.includes("teacher") &&
            !pathname.pathname.includes("login") &&
            !pathname.pathname.includes("signup") &&
            !pathname.pathname.includes("forgetpassword") && (
              <div className="">
                <Footer />
              </div>
            )}
        </>
      )}
    </div>
  );
}

export default App;
