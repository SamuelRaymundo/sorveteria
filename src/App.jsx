import './App.css';

//COMPONENTS
import NavBar from './components/navBar/NavBar';
import Home from './components/pages/Home';
import Pjregister from './components/register/Pjregister.jsx';
import Products from './components/pages/Products';
import Register from "./components/pages/Register.jsx";
import Footer from './components/footer/Footer';

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
      component = <Pjregister/>;
      break;
  }

  return (
    <div className="app">
      <NavBar/>
      {component}
      <Footer/>
    </div>
  );
}

export default App;
