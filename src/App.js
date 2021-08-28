// Importing styles:
import './App.css';
import './cards/Cards.css';
import './navbar/Nav.css';

// Importing the Components:
import Cards from './cards/Cards'
import Nav from './navbar/Nav';


function App() {
  return (
    <div className="App">
      <Nav />
      <Cards />
    </div>
  );
}

export default App;
