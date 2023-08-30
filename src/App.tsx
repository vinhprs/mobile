import { Route, Routes} from 'react-router-dom';
import Homepage from './pages/Homepage/Homepage';
import Navbar from './components/Navbar/Navbar';
function App() {
  return (
    <div>
      <Navbar/>
      <Routes>
        {/* <Navbar/> */}
        <Route path='/' element={<Homepage/>}/>
      </Routes>
    </div>
  );
}

export default App;
