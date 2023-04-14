import Home from './Home/Home';
import 'bootstrap/dist/css/bootstrap.min.css';
import Login from './Login/Login';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
       <Router>
        <Routes>
        <Route path="/" element={<Login/>} />
        <Route path="/home" element={<Home/>} />
        </Routes>
       </Router>
  
  );
}

export default App;
