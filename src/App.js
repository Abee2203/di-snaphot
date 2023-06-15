// import logo from './logo.svg';
import './App.css';
import Header from './components/Header'
import Tags from './components/tags';

function App() {
  return (
    <div>

      <Header title='SnapShot'/>

      <input type='text' placeholder='Search...'/>
      <div>
        {/* <Tags title='Mountain'/>
        <Tags title='Beach'/> */}
        <Tags />
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
