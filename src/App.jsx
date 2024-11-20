import './App.css';

//COMPONENTS
import NavBar from './components/navBar/NavBar';
import Home from './components/pages/Home';
import PJRegister from './components/register/PJRegister';
import Products from './components/pages/Products';
import Register from './components/register/Register';
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
      component = <PJRegister/>;
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
