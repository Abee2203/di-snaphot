// import logo from './logo.svg';
import './App.css';
import Header from './components/Header'
import Tags from './components/tags';
import Search from './components/search';



var tag_items = [
  {
    key : 'mountain',
    name: 'Mountain'
  },
  {
    key : 'beaches',
    name: 'Beaches'
  }
]

function App() {

  return (
    <div>

      <Header title='SnapShot'/>

      <Search/>

      <div>
        <Tags items={tag_items}/>
      </div>
      <div>
        <h1>Food pictures</h1>
        <div>
          <img width='100px' height='100px' src='https://images.pexels.com/photos/2880507/pexels-photo-2880507.jpeg' alt='n'/>
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
