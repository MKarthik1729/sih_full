import './App.css';
import {BrowserRouter as Router, Routes ,Route, Link} from 'react-router-dom'


import Admin from './admin/Admin';
import User from './user/User';
import NewUser from './user/NewUser';
import NewAdmin from './admin/newAdmin';
import Userpage from './user/Userpage';
import GroundArea from './forms/GroundArea';
import AllForms from './forms/AllForms';
import FormsAll from './forms/FormsAll';

function App() {
  return (
    <div>
     <Router>
      <Routes>
      <Route path='/' element={<Home />}/>
        <Route path='admin' element={<Admin />}/>
        <Route path='user' element={<User />}/>
        <Route path='user/newUser' element={<NewUser />}/>
        <Route path='NewAdmin' element={<NewAdmin />}/>
        <Route path='MainUser' element={<Userpage />}/>
        <Route path='ground' element={<GroundArea />}/>
        <Route path='allForm' element={<AllForms/>}/>
        <Route path='formall' element={<FormsAll />} />
      </Routes>
     </Router>
    </div>
  );
}

function Home(){
  return (<div className='home'>
    <div className='test'>
    <button><Link to='/admin'>LOGIN AS ADMIN</Link></button><br /><br/>
    <button><Link to='/user'>LOGIN AS USER</Link></button>
  </div>
  </div>)
}

export default App;
