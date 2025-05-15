import { Link, Outlet } from 'react-router-dom';
import './App.css';
import type { JSX } from 'react';

function App(): JSX.Element {
  return (
    <div className="container px-6">
      <header className="App-header">
        <Outlet />
      </header>
    </div>
  );
}

export default App;