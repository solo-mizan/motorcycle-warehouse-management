import './App.css';
import { Route, Routes } from 'react-router-dom';
import Blogs from './components/Blogs/Blogs';
import Login from './components/Login/Login';
import Register from './components/Register/Register';
import NotFound from './components/NotFound/NotFound';
import Header from './components/Shared/Header/Header';
import Footer from './components/Shared/Footer/Footer';
import Home from './components/Home/Home';
import { ToastContainer } from 'react-toastify';
import ManageInventories from './components/ManageInventories/ManageInventories';
import AddItem from './components/AddItem/AddItem';
import ItemDetails from './components/ItemDetails/ItemDetails';
import RequireAuth from './components/RequireAuth/RequireAuth';
import AboutUs from './components/AboutUs/AboutUs';
import MyItem from './components/MyItem/MyItem';
import Charts from './components/Charts/Charts';

function App() {
  return (
    <>
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/blogs' element={<Blogs></Blogs>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/register' element={<Register></Register>}></Route>
        <Route path='/manageinventories' element={<ManageInventories></ManageInventories>}></Route>
        <Route path='/additem' element={<RequireAuth>
          <AddItem></AddItem>
        </RequireAuth>}></Route>
        <Route path='/item/:id' element={<RequireAuth>
          <ItemDetails></ItemDetails>
        </RequireAuth>}></Route>
        <Route path='myitem' element={<MyItem></MyItem>}></Route>
        <Route path='charts' element={<Charts></Charts>}></Route>
        <Route path='/about' element={<AboutUs></AboutUs>}></Route>
        <Route path='*' element={<NotFound></NotFound>}></Route>
      </Routes>
      <Footer></Footer>
      <ToastContainer></ToastContainer>
    </>
  );
}

export default App;
