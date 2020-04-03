import React from 'react';
import HelloWorld from './Components/HelloWorld'
import Header from './Components/Header'
import Footer from './Components/Footer'

function App() {
  return (
    <div className="bg-white min-h-screen relative">
      <Header />

      <div className="container mx-auto my-3 px-3">
        <HelloWorld name="Quentin"/>
      </div>

      <Footer />
    </div>
  );
}

export default App;
