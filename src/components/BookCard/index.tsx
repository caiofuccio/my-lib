import { Container } from './styles';

export function BookCard() {
  return (
    <Container>
      <li>
        <h3 data-title>A Guerra dos Tronos</h3>
        <h3 data-author>George R. R. Martin</h3>
        <p data-pages>694 páginas</p>
        <input type="checkbox" />
        {/* <Switch onChange={} checked={}/> */}
      </li>
      <li>
        <h3 data-title>A Guerra dos Tronos</h3>
        <h3 data-author>George R. R. Martin</h3>
        <p data-pages>694 páginas</p>
        <input type="checkbox" />
        {/* <Switch onChange={} checked={}/> */}
      </li>
      <li>
        <h3 data-title>A Guerra dos Tronos</h3>
        <h3 data-author>George R. R. Martin</h3>
        <p data-pages>694 páginas</p>
        <input type="checkbox" />
        {/* <Switch onChange={} checked={}/> */}
      </li>
    </Container>
  );
}
