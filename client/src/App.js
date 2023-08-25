import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Homepage from './pages/Homepage';
import Profile from './pages/Profile';
import Signup from './pages/Signup';
import Dashboard from './pages/Dashboard';

function App() {
  return (
    <Router>
    <div className="App">
    <link href='https://unpkg.com/boxicons@2.1.2/css/boxicons.min.css' rel='stylesheet'></link>
      <Navbar/>
            <Routes>
              <Route 
                path="/"
                element={<Homepage />}
              />
              <Route 
                path="/profile"
                element={<Profile />}
              />
              <Route 
                path="/signup"
                element={<Signup />}
              />
              <Route 
                path="/dashboard"
                element={<Dashboard />}
              />
              </Routes>
    </div>
    </Router>
  );
}

export default App;
