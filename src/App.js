import Layout from './components/Layout/Layout';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Home from './views/Home';
import About from './views/About';
import Contact from './views/Contact';
import Portfolio from './views/Portfolio';
import Resume from './views/Resume';

function App() {
  return (
    <>
      <Router>
        <Layout>
          <Routes>
            <Route exact path="/" element={<Home/>}/>
            <Route exact path="/about" element={<About/>}/>
            <Route exact path="/portfolio" element={<Portfolio/>}/>
            <Route exact path="/contact" element={<Contact/>}/>
            <Route exact path="/resume" element={<Resume/>}/>
          </Routes>
        </Layout>
      </Router>
    </>
  );
}

export default App;
