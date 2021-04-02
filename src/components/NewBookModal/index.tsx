import { FormEvent, useContext } from 'react';
import Modal from 'react-modal';
import closeImg from '../../assets/close.svg';
import { BooksContext } from '../../contexts/BooksContext';
import { Container } from './styles';

interface NewBookModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
}

export function NewBookModal({ isOpen, onRequestClose }: NewBookModalProps) {
  const {
    createNewBook,
    title,
    setTitle,
    author,
    setAuthor,
    numberOfPages,
    setNumberOfPages,
    isRead,
    setIsRead,
  } = useContext(BooksContext);

  function handleCreateNewBook(event: FormEvent) {
    if (!title || !author || numberOfPages <= 0) {
      alert('Preencha todos os dados corretamente!');
      return;
    }

    event.preventDefault();

    const newBookInput = {
      title: title,
      author: author,
      numberOfPages: numberOfPages,
      isRead: isRead,
    };

    createNewBook(newBookInput);

    setTitle('');
    setAuthor('');
    setNumberOfPages(0);
    setIsRead(false);

    onRequestClose();
  }

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      overlayClassName="react-modal-overlay"
      className="react-modal-content"
    >
      <button
        type="button"
        onClick={onRequestClose}
        className="react-modal-close"
      >
        <img src={closeImg} alt="Fechar formulário" />
      </button>

      <Container onSubmit={handleCreateNewBook}>
        <h3>Cadastrar livro</h3>

        <label>Título</label>
        <input
          type="text"
          placeholder="Insira aqui o título da obra"
          value={title}
          onChange={(event) => setTitle(event.target.value)}
        />
        <label>Autor(a)</label>
        <input
          type="text"
          placeholder="Insira aqui o nome do autor(a)"
          value={author}
          onChange={(event) => setAuthor(event.target.value)}
        />
        <label>Número de páginas</label>
        <input
          type="number"
          placeholder="Insira aqui a quantidade de páginas"
          value={numberOfPages}
          onChange={(event) => setNumberOfPages(Number(event.target.value))}
        />
        <label className="is-read-label">Já lido?</label>
        <input
          type="checkbox"
          checked={isRead}
          onChange={(event) => setIsRead(event.target.checked)}
        />

        <button type="submit">Cadastrar</button>
      </Container>
    </Modal>
  );
}
