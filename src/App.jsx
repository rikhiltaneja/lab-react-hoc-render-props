import './App.css';
import LikeImage from './components/Project-2/LikeImage';
import LikePost from './components/Project-2/LikePost';



function App() {
  return (
    <div >

      <div className='container1' > 
        <h1>Some Blogs using HOC</h1>
        <LikePost/>
        <LikeImage/>
      </div>
    </div>
  );
}

export default App;
