import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Routes } from 'react-router-dom';
import Header from './Pages/Shared/Header/Header';
import Footer from './Pages/Shared/Footer/Footer';
import About from './Pages/About/About';
import Home from './Pages/Home/Home/Home';
import Login from './Pages/Login/Login';
import Signup from './Pages/Login/Signup';
import ServiceDetail from './Pages/ServiceDetail/ServiceDetail';
import RequireAuth from './Pages/Login/RequireAuth';
import BuyPackage from './Pages/ByePackage/BuyPackage';
import Notfound from './Pages/Shared/Notfound/Notfound';
import Gallery from './Pages/Gallery/Gallery';
import Blogs from './Pages/Blogs/Blogs';

function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/home" element={<Home></Home>}></Route>
        <Route path="/about" element={<About></About>}></Route>
        <Route path="/login" element={<Login></Login>}></Route>
        <Route path="/signup" element={<Signup></Signup>}></Route>
        <Route path="/blogs" element={<Blogs></Blogs>}></Route>
        <Route path='/service/:serviceId' element={<ServiceDetail></ServiceDetail>}></Route>
        <Route path='/buyPackage' element={<RequireAuth>
            <BuyPackage></BuyPackage>
          </RequireAuth>}></Route>
        <Route path='/gallery' element={<RequireAuth><Gallery></Gallery></RequireAuth>}></Route>
        <Route path="*" element={<Notfound></Notfound>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
