import buttonImg from '../../assets/add-button.svg';
import { Container } from './styles';

export function LibraryLog() {
  return (
    <Container>
      <header>Seu registro</header>

      <div className="data-container">
        <div className="totalOfBooks">
          <p>Total de livros</p>
          <p>1</p>
        </div>

        <div className="read-books">
          <p>Lidos</p>
          <p>1</p>
        </div>

        <div className="not-read-books">
          <p>Não lidos</p>
          <p>0</p>
        </div>

        <div className="read-pages">
          <p>Páginas lidas</p>
          <p>694</p>
        </div>
      </div>

      <button>
        <img src={buttonImg} alt="Adicionar" />
      </button>
    </Container>
  );
}
