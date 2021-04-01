import { useContext } from 'react';
import Switch from 'react-switch';
import { BooksContext } from '../../BooksContext';
import { Container } from './styles';

export function BookCard() {
  const { library, setLibrary } = useContext(BooksContext);

  function handleToggleBookReadStatus(id: number) {
    const newLibrary = library.map((book) => {
      if (book.id === id) {
        return {
          ...book,
          isRead: !book.isRead,
        };
      } else {
        return book;
      }
    });

    setLibrary(newLibrary);
  }

  return (
    <Container>
      {library.map((book) => (
        <li key={book.id}>
          <h3 data-title>{book.title}</h3>
          <h3 data-author>{book.author}</h3>
          <p data-pages>{book.numberOfPages} páginas</p>
          <Switch
            checked={book.isRead}
            onChange={() => handleToggleBookReadStatus(book.id)}
            className="switch-button"
          />
        </li>
      ))}
    </Container>
  );
}
