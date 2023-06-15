import logo from './logo.svg';
import './App.css';
import Header from './components/Header'

function App() {
  return (
    <div>
      <Header title='SnapShot'/>
      <input type='text' placeholder='Search...'/>
      <div>
        <button>Mountain</button>
        <button>Beaches</button>
      </div>
      <div>
        <h1>Food pictures</h1>
        <div>
          <img width='100px' height='100px' src=''/>
          <img width='100px' height='100px' src=''/>
          <img width='100px' height='100px' src=''/>
          <img width='100px' height='100px' src=''/>
          <img width='100px' height='100px' src=''/>
          <img width='100px' height='100px' src=''/>
        </div>
      </div>
    </div>
  );
}

export default App;
