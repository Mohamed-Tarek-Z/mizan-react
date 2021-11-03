//import logo from './logo.svg';
import { Navbar, NavbarBrand } from 'reactstrap';
import './App.css';
import Menu from './components/MenuComponent';

function App() {
  return (
    <div className="App">
      <Navbar dark color="primary">
        <div className="container">
          <NavbarBrand href="/">الصفا و المروة للغزل</NavbarBrand>
        </div>
      </Navbar>
      <Menu/>
    </div>
  );
}
export default App;