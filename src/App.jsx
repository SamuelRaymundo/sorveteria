import './App.css';
import NavBar from './components/navBar/NavBar';
import Home from './components/pages/Home';
import LogIn from './components/logIn/Register';
import PJRegister from './components/logIn/PJRegister';
import Products from './components/pages/Products';
import Register from './components/logIn/Register';

function App() {
  let component;

  switch (window.location.pathname) {
    case "/":
      component = <Home />;
      break;
    case "/register":
      component = <Register/>;
      break;
    case "/product":
      component = <Products />;
      break;
    case "/pjregister":
      component = <PJRegister/>;
      break;  
  }

  return (
    <div className="app">
      <NavBar/>
      {component}
    </div>
  );
}

export default App;
