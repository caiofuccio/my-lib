import { BookShelf } from './components/Bookshelf';
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

      <GlobalStyle />
    </>
  );
}

export default App;
