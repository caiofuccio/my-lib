import Modal from 'react-modal';
import { Container } from './styles';

interface NewBookModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
}

export function NewBookModal({ isOpen, onRequestClose }: NewBookModalProps) {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      overlayClassName="react-modal-overlay"
      className="react-modal-content"
    >
      <Container>
        <h3>Cadastrar livro</h3>

        <input type="text" placeholder="Título" />
        <input type="text" placeholder="Autor" />
        <input type="number" placeholder="Número de páginas" />

        <button type="submit">Cadastrar</button>
      </Container>
    </Modal>
  );
}
