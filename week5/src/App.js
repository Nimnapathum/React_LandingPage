import './App.css';
import { BrowserRouter as Router, Route, Routes, NavLink } from 'react-router-dom';
import ButtonCustom from './components/ButtonCustom';
import FormComponent from './components/FormComponent';
import InputComponent from './components/InputComponent';
import RegistrationForm from './components/RegistrationForm';

function App() {
  return (
    <Router>
      <div className='App'>
        <nav className='navbar'>
          <NavLink to='/' className='nav-link' activeClassName='active-link' end>Custom Button</NavLink>
          <NavLink to='/about' className='nav-link' activeClassName='active-link'>Forms</NavLink>
          <NavLink to='/contact' className='nav-link' activeClassName='active-link'>Input</NavLink>
          <NavLink to='/comp1' className='nav-link' activeClassName='active-link'>Register</NavLink>
        </nav>
        <Routes>
          <Route path='/' element={<ButtonCustom />} />
          <Route path='/about' element={<FormComponent />} />
          <Route path='/contact' element={<InputComponent />} />
          <Route path='/comp1' element={<RegistrationForm />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
