import { Route, Routes } from 'react-router-dom';
import './App.css';
import About from './components/About/About';
import Contact from './components/Contact/Contact';
import Skills from './components/Skills/Skills';
import Footer from './components/Footer/Footer';
import Home from './components/Home/Home'
import Projects from './components/Projects/Projects';
import Services from './components/Services/Services';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
import Header from './components/Header/Header';
import Blogs from './components/Blogs/Blogs';
import ProjectDetail from './components/ProjectDetail/ProjectDetail';

function App() {
  useEffect(() => {
    AOS.init();
  }, [])
  return (

    <div className="">
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/skills' element={<Skills></Skills>}></Route>
        <Route path='/services' element={<Services></Services>}></Route>
        <Route path='/projects' element={<Projects></Projects>}></Route>
        <Route path='/projects/:id' element={<ProjectDetail></ProjectDetail>}></Route>
        <Route path='/blogs' element={<Blogs></Blogs>}></Route>
        <Route path='/contact' element={<Contact></Contact>}></Route>
        <Route path='/about' element={<About></About>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
