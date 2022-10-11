import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Main from './components/Main/Main';
import Navbar from './components/Navbar/Navbar';
import './styles.scss'


function App() {
  return (
    <div className="App">
      {/* <ul>
        {data.map(city=><li className='listItems'>{city}</li>)}
      </ul> */}
      <Header title="Are We There Yet?" />
      <Navbar/>
      <Main className='main'/>
      <Footer/>
    </div>
  );
}

export default App;
