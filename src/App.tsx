import React from 'react';
import { BookShelf } from './components/Bookshelf';
import { Footer } from './components/Footer';
import { Header } from './components/Header';
import { LibraryLog } from './components/LibraryLog';
import { GlobalStyle } from './styles/global';

function App() {
  return (
    <>
      <Header />

      <div
        style={{
          display: 'grid',
          gridTemplateColumns: '3fr 1fr',
          gap: '1rem',
        }}
      >
        <BookShelf />
        <LibraryLog />
      </div>

      <Footer />

      <GlobalStyle />
    </>
  );
}

export default App;
