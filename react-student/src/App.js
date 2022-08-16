import './App.css';
import {  Routes ,Route} from 'react-router-dom'
import GetAll from './Components/GetAll'
import Create from './Components/Create'
import Edit from './Components/Edit'

function App() {
  return (
    <div className="App">
          <Routes>
            <Route exact path="/" element={<GetAll />} />
            <Route exact path="/GetAll" element={<GetAll />} />
            <Route exact path="/Create" element={<Create />} />
            <Route exact path="/Edit" element={<Edit />} />
          </Routes>
    </div>
  );
}

export default App;
