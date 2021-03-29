import { useState } from 'react';
import { Switch } from '../Switch';
import { Container } from './styles';

export function BookCard() {
  const [isToggled, setIsToggled] = useState(false);

  return (
    <Container>
      <li>
        <h3 data-title>A Guerra dos Tronos</h3>
        <h3 data-author>George R. R. Martin</h3>
        <p data-pages>694 páginas</p>
        <Switch
          isToggled={isToggled}
          onToggle={() => setIsToggled(!isToggled)}
        />
      </li>
    </Container>
  );
}
