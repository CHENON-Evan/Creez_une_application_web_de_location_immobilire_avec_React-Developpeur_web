import '../App.css';
import HomePage from "./pages/HomePage";
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import About from "./pages/About";
import Location from "./pages/Location";

function App() {
  return (
      <>
          <Router>
              <Routes>
                  <Route exact path="/" element={<HomePage/>}/>
                  <Route path="/about" element={<About/>}/>ssss
                  <Route path="/location/:id" element={<Location/>}/>
              </Routes>
          </Router>
      </>
  );
}

export default App
