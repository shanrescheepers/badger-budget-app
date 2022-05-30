
import './App.css';
import SideNav from './components/sidenav';
import { Route, Routes } from 'react-router-dom';
import Dashboard from './components/dashboard';
import RightPanel from './components/rightpanel';

function App() {
  return (
    <div className="App">
      <SideNav />
      {/* <Header /> */}
      <Routes>
        {/* <Route path="/" element={<signin />} /> */}
        {/* <Route path="/dashboard" element={<Dashboard />} /> */}
        {/* <Route path="/dashboard" element={<editspagr />} /> */}
      </Routes>
      <RightPanel />
    </div>
  );
}

export default App;
