import logo from './logo.svg';
import './App.css';
import PostForm from './postform';
import AllPost from './allpost';

const App = () => {
  return (
    <div className="App">
      <header className="App-header">
       <p>Ai is now easy</p>
       <div className="App">
       <PostForm/>
       <AllPost/>
       </div>
      </header>
    </div>
  );
}

export default App;
