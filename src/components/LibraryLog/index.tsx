import { useContext } from 'react';
import buttonImg from '../../assets/add-button.svg';
import { BooksContext } from '../../contexts/BooksContext';
import { Container } from './styles';

interface LibraryLogProps {
  onOpenNewBookModal: () => void;
}

export function LibraryLog({ onOpenNewBookModal }: LibraryLogProps) {
  const { library } = useContext(BooksContext);

  const libraryLog = library.reduce(
    (acc, book) => {
      acc.totalBooks += 1;

      if (book.isRead === true) {
        acc.readBooks += 1;
        acc.totalPages += book.numberOfPages;
      } else {
        acc.unreadBooks += 1;
      }

      return acc;
    },
    {
      totalBooks: 0,
      readBooks: 0,
      unreadBooks: 0,
      totalPages: 0,
    }
  );

  return (
    <Container>
      <header>Seu registro</header>

      <div className="data-container">
        <div className="totalOfBooks">
          <p>Total de livros</p>
          <p>{libraryLog.totalBooks}</p>
        </div>

        <div className="read-books">
          <p>Lidos</p>
          <p>{libraryLog.readBooks}</p>
        </div>

        <div className="not-read-books">
          <p>Não lidos</p>
          <p>{libraryLog.unreadBooks}</p>
        </div>

        <div className="read-pages">
          <p>Páginas lidas</p>
          <p>{libraryLog.totalPages}</p>
        </div>
      </div>

      <button onClick={onOpenNewBookModal}>
        <img src={buttonImg} alt="Adicionar" />
      </button>
    </Container>
  );
}
