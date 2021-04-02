import { createContext, ReactNode, useState } from 'react';

interface Book {
  id: number;
  title: string;
  author: string;
  numberOfPages: number;
  isRead: boolean;
}

type BookInput = Omit<Book, 'id'>;

interface BooksProviderProps {
  children: ReactNode;
}

interface BooksContextData {
  library: Book[];
  setLibrary: (library: Book[]) => void;
  createNewBook: (bookInput: BookInput) => void;
  title: string;
  setTitle: (title: string) => void;
  author: string;
  setAuthor: (title: string) => void;
  numberOfPages: number;
  setNumberOfPages: (number: number) => void;
  isRead: boolean;
  setIsRead: (read: boolean) => void;
}

export const BooksContext = createContext<BooksContextData>(
  {} as BooksContextData
);

export function BooksProvider({ children }: BooksProviderProps) {
  const [library, setLibrary] = useState<Book[]>([]);

  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [numberOfPages, setNumberOfPages] = useState(0);
  const [isRead, setIsRead] = useState(false);

  let randomNumbers: number[] = [];

  function createNewBook(bookInput: BookInput) {
    function getNonRepeatRandomNumber() {
      let newRandomNumber: number = Math.floor(Math.random() * 1000);

      while (randomNumbers.includes(newRandomNumber)) {
        newRandomNumber = Math.floor(Math.random() * 1000);
      }

      randomNumbers.push(newRandomNumber);
      return newRandomNumber;
    }

    const newBook = {
      ...bookInput,
      id: getNonRepeatRandomNumber(),
    };

    setLibrary((prevState) => [...prevState, newBook]);
  }

  return (
    <BooksContext.Provider
      value={{
        library,
        setLibrary,
        createNewBook,
        title,
        setTitle,
        author,
        setAuthor,
        numberOfPages,
        setNumberOfPages,
        isRead,
        setIsRead,
      }}
    >
      {children}
    </BooksContext.Provider>
  );
}
