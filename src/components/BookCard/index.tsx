import { useContext } from 'react';
import Switch from 'react-switch';
import deleteImg from '../../assets/close.svg';
import { BooksContext } from '../../contexts/BooksContext';
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

  function handleBookDelete(id: number, title: string) {
    if (window.confirm(`Você tem certeza que deseja apagar ${title}?`)) {
      const filteredLibrary = library.filter((book) => book.id !== id);

      setLibrary(filteredLibrary);
    } else return;
  }

  return (
    <Container>
      {library.map((book) => (
        <li key={book.id}>
          <button
            type="button"
            onClick={() => handleBookDelete(book.id, book.title)}
            className="delete-book"
          >
            <img src={deleteImg} alt="Deletar" />
          </button>
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
