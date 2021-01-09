import React from 'react';
import ReactDOM from 'react-dom';
import App from 'component/App';
import fbase from 'firebase';

console.log(fbase);

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

