import githubImg from '../../assets/github-logo.svg';
import { Container } from './styles';

export function Footer() {
  return (
    <Container>
      <div>
        <p>Criado por Caio Fuccio</p>
        <a
          href="https://github.com/caiofuccio"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={githubImg} alt="Caio Fuccio Github" />
        </a>
      </div>

      <span>2021</span>
    </Container>
  );
}
