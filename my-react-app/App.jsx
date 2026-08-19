
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Home from './src/components/aula10/Home';
import Login from './src/components/aula10/Login';
import PrivateRoute from './src/components/aula10/PrivateRoute';
import User from './src/components/aula10/User';
import About from './src/components/aula10/About';
import './App.css';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/home" element={ <PrivateRoute><Home /></PrivateRoute>} />
        <Route path="/" element={<Navigate to="/login" replace />} />
        <Route path="/login" element={<Login />} />
        <Route path="/user/:id" element={<User />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
