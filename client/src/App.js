import './App.css';

import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Home from './components/Home'
import Admin from './components/Admin'
import PageNotFound from './components/PageNotFound'
import Request from './components/Request';

function App() {
  return (
    <div className="App">
      
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/admin" element={<Admin/>} />
          <Route path="/user/request" element={<Request/>} />
          <Route path="*" element={<PageNotFound/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
