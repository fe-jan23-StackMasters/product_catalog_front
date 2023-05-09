import React, { useState } from 'react';
import './App.scss';
import { Pagination } from './components/Pagination';

function App() {
  const items = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16];
  const [amout, setAmout] = useState(4);

  return (
    // <div className="App">
    //   <header className="App-header">
    //     <p>
    //       Edit <code>src/App.tsx</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
    <>
      <div style={{ backgroundColor: 'white' }}>
        <div style={{ color: 'red' }} onClick={() => setAmout(4)}>{'4'}</div>
        <div style={{ color: 'red' }} onClick={() => setAmout(8)}>{'8'}</div>
        <div style={{ color: 'red' }} onClick={() => setAmout(16)}>{'16'}</div>
      </div>
      <Pagination itemsPerPage={amout} items={items}/>
    </>
  );
}

export default App;
