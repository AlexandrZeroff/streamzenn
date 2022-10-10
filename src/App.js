import './App.css';
import Navbar from './containers/Navbar';
import Header from './containers/Header';
import Solutions from './containers/Solutions';
import Benefits from './containers/Benefits';
import Features from './containers/Features';
import How from './containers/How';
import Footer from './containers/Footer';

function App() {
  return (
    <div>
      <Navbar/>
      <Header />
      <Solutions />
      <Benefits />
      <Features />
      <How />
      <Footer />
    </div>
  );
}

export default App;
