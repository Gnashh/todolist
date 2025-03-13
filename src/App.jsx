import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { AuthProvider } from './contexts/AuthContext';
import PrivateRoute from './components/PrivateRoute';
import Home from './components/Home'; // Ensure the correct path
import Login from './components/Login';
import Signup from './components/Signup';
import TodoList from './components/TodoList';
import NavBar from "./components/NavBar";


function App() {
  return (
    <Router>
      <AuthProvider>
      <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/todo" element={<PrivateRoute><TodoList /></PrivateRoute>} />
        </Routes>
      </AuthProvider>
    </Router>
  );
}


export default App;
