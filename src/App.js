
import './App.css';
import SideNav from './components/sidenav';
import { Route, Routes } from 'react-router-dom';
import Dashboard from './components/dashboard';
// import RightPanel from './components/rightpanel';

function App() {
  return (
    <div className="App">
      {/* <SideNav /> */}

      <Routes>


        <Route path="/" element={<Dashboard />} />

      </Routes>

    </div>
  );
}

export default App;
