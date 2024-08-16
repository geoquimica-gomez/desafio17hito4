import './App.css'
import { Routes, Route } from 'react-router-dom';
import 'react-toastify/dist/ReactToastify.css';
//Componentes importados
import NavbarApp from './components/Navbar';
import Footer from './components/Footer';

// Vistas importadas
import Home from './views/Home';
import RegisterPage from './views/RegisterPage';
import LoginPage from './views/LoginPage';
import Cart from './views/Cart';
import Pizza from './views/Pizza';

function App() {
  return (
    <div className='appGrid'>
      <header>
        <NavbarApp />
      </header>

      <main>
        <Routes>
          <Route
            path="/"
            element={<Home />}
          />
          <Route
            path="/register"
            element={<RegisterPage />}
          />
          <Route
            path="/login"
            element={<LoginPage />}
          />
          <Route
            path='cartShooping'
            element={<Cart />}
          />
          <Route
            path="/pizza/:id"
            element={<Pizza />} />
        </Routes>
      </main>

      <footer>
        <Footer />
      </footer>
    </div>
  )
}

export default App
