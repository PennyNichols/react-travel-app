import './App.css';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Main from './components/Main/Main';
import Navbar from './components/Navbar/Navbar';

function App() {
  const data=['new york','boston','philly']
  return (
    <div className="App">
      {/* <ul>
        {data.map(city=><li className='listItems'>{city}</li>)}
      </ul> */}
      <Header title="Are We There Yet?" />
      <Navbar/>
      <Main/>
      <Footer/>
    </div>
  );
}

export default App;
