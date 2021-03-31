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
  createNewBook: (bookInput: BookInput) => void;
}

export const BooksContext = createContext<BooksContextData>(
  {} as BooksContextData
);

export function BooksProvider({ children }: BooksProviderProps) {
  const [library, setLibrary] = useState<Book[]>([]);

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
    <BooksContext.Provider value={{ library, createNewBook }}>
      {children}
    </BooksContext.Provider>
  );
}
