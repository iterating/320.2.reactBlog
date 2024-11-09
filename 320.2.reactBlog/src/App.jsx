import React from 'react';
import Header from './Header';
import NavBar from './NavBar';
import Article from './Article';
import Footer from './Footer';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <NavBar />
      <main>
        <Article
          date="11/12/20"
          title="On the Street in Brooklyn"
          imageUrl="/path/to/your/image1.jpg"
          content="Cray ipsum dolor sit amet consectetur adipisicing elit. Repellat..."
        />
        <Article
          date="11/11/20"
          title="Vintage in Vogue"
          imageUrl="/path/to/your/image2.jpg"
          content="Selfies sunt dolor sit amet consectetur adipisicing elit. Repellat..."
        />
      </main>
      <Footer />
    </div>
  );
}

export default App;
