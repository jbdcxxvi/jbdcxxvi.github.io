import React from 'react';
import './index.css';
import App from './App'; // Import your main application component
import reportWebVitals from './reportWebVitals';
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import TicTacToe from './pages/TicTacToe'; // Import your page/component for Tic Tac Toe

const container = document.getElementById('root')!;
const root = createRoot(container);
root.render(
<React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/pages/TicTacToe" element={<TicTacToe />} />
        {/* Define other routes here */}
      </Routes>
    </Router>
  </React.StrictMode>
);

// ReactDOM.render(
//   <React.StrictMode>
//     <Router>
//       <Routes>
//         <Route path="/" element={<App />} />
//         <Route path="/pages/TicTacToe" element={<TicTacToe />} />
//         {/* Define other routes here */}
//       </Routes>
//     </Router>
//   </React.StrictMode>,
//   document.getElementById('root')
// );

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
