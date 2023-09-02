import { Route, Routes} from 'react-router-dom';
import Homepage from './pages/Homepage/Homepage';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import Login from './pages/Login/Login';
function App() {
  return (
    <div>
      <Navbar/>
      <Routes>
        {/* <Navbar/> */}
        <Route path='/' element={<Homepage/>}/>
        <Route path='/login' element={<Login/>}/>
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
