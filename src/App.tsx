import { useState } from 'react';
import Modal from 'react-modal';
import { BookShelf } from './components/Bookshelf';
import { Footer } from './components/Footer';
import { Header } from './components/Header';
import { LibraryLog } from './components/LibraryLog';
import { NewBookModal } from './components/NewBookModal';
import { GlobalStyle } from './styles/global';

Modal.setAppElement('#root');

export function App() {
  const [isNewBookModalOpen, setIsNewBookModalOpen] = useState(false);

  function handleOpenNewBookModal() {
    setIsNewBookModalOpen(true);
  }

  function handleCloseBookModal() {
    setIsNewBookModalOpen(false);
  }

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
        <LibraryLog onOpenNewBookModal={handleOpenNewBookModal} />
      </div>

      <Footer />
      <NewBookModal
        isOpen={isNewBookModalOpen}
        onRequestClose={handleCloseBookModal}
      />

      <GlobalStyle />
    </>
  );
}

export default App;
