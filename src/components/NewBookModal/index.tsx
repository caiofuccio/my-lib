import { FormEvent, useContext, useState } from 'react';
import Modal from 'react-modal';
import closeImg from '../../assets/close.svg';
import { BooksContext } from '../../BooksContext';
import { Container } from './styles';

interface NewBookModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
}

export function NewBookModal({ isOpen, onRequestClose }: NewBookModalProps) {
  const { createNewBook } = useContext(BooksContext);

  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [numberOfPages, setNumberOfPages] = useState(0);

  function handleCreateNewBook(event: FormEvent) {
    if (!title || !author || !numberOfPages || numberOfPages === 0) {
      throw new Error('Preencha todos os dados corretamente!');
    }

    event.preventDefault();

    const newBookInput = {
      title: title,
      author: author,
      numberOfPages: numberOfPages,
      isRead: false,
    };

    createNewBook(newBookInput);

    setTitle('');
    setAuthor('');
    setNumberOfPages(0);

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

        <input
          type="text"
          placeholder="Título"
          value={title}
          onChange={(event) => setTitle(event.target.value)}
        />
        <input
          type="text"
          placeholder="Autor(a)"
          value={author}
          onChange={(event) => setAuthor(event.target.value)}
        />
        <input
          type="number"
          placeholder="Número de páginas"
          value={numberOfPages}
          onChange={(event) => setNumberOfPages(Number(event.target.value))}
        />

        <button type="submit">Cadastrar</button>
      </Container>
    </Modal>
  );
}
