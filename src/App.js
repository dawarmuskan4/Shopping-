import './App.css';
import Header from './Components/Header';
import CardComp from './Components/Card';
import Main from './Components/Main';

function App() {
  return (
    <div className="App">
      <Header />
      <Main />
      <CardComp />
      <CardComp />
      <CardComp />
    </div>
  );
}

export default App;
