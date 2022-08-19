import {BrowserRouter as Router, Routes ,Route, Link} from 'react-router-dom'

// import {StyledButton} from './style/button.styles'

import Admin from './admin/Admin';
import User from './user/User';
import NewUser from './user/NewUser';
import NewAdmin from './admin/newAdmin';
import Userpage from './user/Userpage';
import GroundArea from './forms/GroundArea';
import AllForms from './forms/AllForms';
import FormsAll from './forms/FormsAll';
import { StyledDiv,StyledButton, PositionButton } from './style/button';

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
  return (<StyledDiv>
    <PositionButton >
    <StyledButton><Link to='/admin'>LOGIN AS ADMIN</Link></StyledButton><br /><br/>
    <StyledButton><Link to='/user'>LOGIN AS USER</Link></StyledButton>
  </PositionButton>
  </StyledDiv>
  )
}

export default App;
