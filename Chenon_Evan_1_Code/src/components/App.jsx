import '../styles/App.css';
import HomePage from "./pages/HomePage";

import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import About from "./pages/About";
import Location from "./pages/Location";
import Error from "./pages/Error";

function App() {
  return (
      <>
          <Router>
              <Routes>
                  <Route exact path="/" element={<HomePage/>}/>
                  <Route path="/about" element={<About/>}/>
                  <Route path="/location/:id" element={<Location/>}/>
                  <Route path="*" element={<Error/>}/>
              </Routes>
          </Router>
      </>
  );
}

export default App