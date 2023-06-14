import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
// import 'animate.css/animate.min.css';

// import Navigation from './components/navigation';
import Content from './components/content';
import Footer from './components/footer';

function App() {
  return (
    <div className='background'>
      <Content />
      <Footer />
    </div>
  );
}

export default App;