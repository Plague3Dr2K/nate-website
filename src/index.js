import React from 'react';
import ReactDOM from 'react-dom/client';
import './scss/index.scss';
import Top from './components/App';
import reportWebVitals from './reportWebVitals';
import NavBar from './components/navbar'
import Cred from './components/credentials'
import Pros from './components/projects'
import Cons from './components/contacts'


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      
        <NavBar />
        <Top />
        <h3 className='title'>Certificates</h3>
        <Cred />
        <h3 className='title'>Projects</h3>
        <Pros />
        <h3 className='title'>Contacts</h3>
        <Cons />
        

      

  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
