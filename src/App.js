import React from 'react';
import './App.css';
import Header from './components/Header/Header'
import routes from './routes'
import Footer from './components/Footer'

function App() {
  return (
    <div style={{margin:0,padding:0,maxWidth:'100vw',width:'100%',overflow:'hidden'}}>
      <Header />
      {routes}
      <Footer />
    </div>
  );
}

export default App;
