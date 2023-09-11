import { Route, Routes} from 'react-router-dom';
import Homepage from './pages/Homepage/Homepage';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import Login from './pages/Login/Login';
import ForgetPassword from './pages/ForgetPassword/ForgetPassword';
import Otp from './pages/ForgetPassword/Otp';
import OtpSignup from './pages/Signup/Otp';
import Signup from './pages/Signup/Signup';
import Information from './pages/Signup/Information';
import ListCourses from './pages/ListCourses/ListCourses';
import CourseItem from './pages/CourseItem/CourseItem';
import VideoCourse from './pages/VideoCourse/VideoCourse';
function App() {
  return (
    <div>
      <Navbar/>
      <Routes>
        {/* <Navbar/> */}
        <Route path='/' element={<Homepage/>}/>
        <Route path='login' element={<Login/>}/>
        <Route path='forgetpassword' element={<ForgetPassword/>}/>
        <Route path='forgetpassword/otp' element={<Otp/>}/>
        <Route path='signup' element={<Signup/>}/>
        <Route path='signup/otp' element={<OtpSignup/>}/>
        <Route path='signup/user' element={<Information/>}/>
        <Route path='courses' element={<ListCourses/>}/>
        <Route path='courses/:idcourse' element={<CourseItem/>}/>
        <Route path='courses/:idcourse/video' element={<VideoCourse/>}/>
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
