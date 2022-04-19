// import logo from './logo.svg';
import './App.css';
import Header from './components/Header/Header'
import Sidebar from '../src/components/Sidebar/Sidebar'
import Footer from '../src/components/Footer/Footer'
import Main from '../src/components/Main/Main'


function App() {
  return (
    <div className="App">
      <Header />
      <Sidebar />
      <Main />
      <Footer />
    </div>
  );
}

export default App;
