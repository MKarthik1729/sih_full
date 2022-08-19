import {BrowserRouter as Router, Routes ,Route, Link, useNavigate} from 'react-router-dom'

// import {StyledButton} from './style/button.styles'

import Admin from './admin/Admin';
import User from './user/User';
import NewUser from './user/NewUser';
import NewAdmin from './admin/newAdmin';
import Userpage from './user/Userpage';
import GroundArea from './forms/GroundArea';
import FormsAll from './forms/FormsAll';
import { StyledDiv,StyledButton, PositionButton } from './style/button';
import UserInterface from './user/UserInterface';
import AdminInterface from './admin/AdminInterface';

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
        <Route path='formall' element={<FormsAll />} />
        <Route path='userInterface' element={<UserInterface/>}/>
        <Route path='adminInterface' element={<AdminInterface />}/>
        <Route path='*' element={<ErrorPage />} />
      </Routes>
     </Router>
    </div>
  );
}

function Home(){
  const navigate = useNavigate()
  return (<StyledDiv>
    <PositionButton >
    <StyledButton onClick={()=>navigate('/admin')}>LOGIN AS ADMIN</StyledButton><br /><br/>
    <StyledButton onClick={()=>navigate('/user')}>LOGIN AS USER</StyledButton>
  </PositionButton>
  </StyledDiv>
  )
}

export default App;

function ErrorPage() {
  return(
    <>
    <h1>Error 404</h1>
    <Link to='/'>Click to redirect to home</Link>
    </>
  )
}
