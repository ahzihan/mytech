import './App.css';
import { Routes, Route } from "react-router-dom";
import Home from './Pages/Home/Home';
import Header from './Pages/Share/Header/Header';
import Footer from './Pages/Share/Footer/Footer';
import Services from './Pages/Home/Services/Services';
import About from './Pages/About/About';
import Contact from './Pages/Contact/Contact';
import Login from './Pages/Register/Login';
import Register from './Pages/Register/Register';
import RequireAuth from './Pages/RequireAuth/RequireAuth';
import Portfolio from './Pages/Home/Portfolio/Portfolio';

function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/services' element={<Services></Services>}></Route>
        <Route path='/about' element={<About></About>}></Route>
        <Route path='/contact' element={<Contact></Contact>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/register' element={<Register></Register>}></Route>
        <Route path='/projects' element={<RequireAuth>
          <Portfolio></Portfolio>
        </RequireAuth>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
