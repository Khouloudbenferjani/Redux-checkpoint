import { Route, Routes } from 'react-router';
import './App.css';
import Home from './component/Home';
import ListTask from './component/ListTask';

function App() {
  return (
    <div >
      <Routes>
        <Route  path="/" element={<Home/>} />
        <Route  path="/TaskList/:name" element={<ListTask/>}/>
      </Routes>
    </div>
  );
}

export default App;