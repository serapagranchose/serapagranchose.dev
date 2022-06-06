import { BrowserRouter, Routes, Route } from "react-router-dom";

import Main from './pages/Main'
import About from './pages/About'
import Projects from './pages/Projects'
import Shop from './pages/Shop'

const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Main />} />
          <Route exact path="/about" element={<About />} />
          <Route exact path="/projects" element={<Projects />} />
          <Route exact path="/shop" element={<Shop />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
