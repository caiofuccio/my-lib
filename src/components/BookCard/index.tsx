import { useContext, useState } from 'react';
import { BooksContext } from '../../BooksContext';
import { Switch } from '../Switch';
import { Container } from './styles';

export function BookCard() {
  const { library } = useContext(BooksContext);

  const [isToggled, setIsToggled] = useState(false);

  return (
    <Container>
      {library.map((book) => (
        <li key={book.id}>
          <h3 data-title>{book.title}</h3>
          <h3 data-author>{book.author}</h3>
          <p data-pages>{book.numberOfPages}</p>
          <Switch
            isToggled={isToggled}
            onToggle={() => setIsToggled(!isToggled)}
          />
        </li>
      ))}
    </Container>
  );
}
