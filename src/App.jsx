import './App.css';

//COMPONENTS
import NavBar from './components/navBar/NavBar';
import Home from './components/pages/home/Home.jsx';
import Pjregister from "./components/pages/register/Pjregister.jsx";
import Products from "./components/pages/product/Products.jsx";
import PfRegister from "./components/pages/register/PfRegister.jsx";
import Footer from './components/footer/Footer';

function App() {
  let component;

  switch (window.location.pathname) {
    case "/":
      component = <Home />;
      break;
    case "/pfregister":
      component = <PfRegister/>;
      break;
    case "/products":
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
