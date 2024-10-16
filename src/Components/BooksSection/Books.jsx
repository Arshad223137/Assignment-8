import { useEffect, useState } from "react";
import BookCard from "./BookCard";

const Books = () => {
  const [books, setBooks] = useState([]);
  const [slice, setSlice] = useState(6);
  useEffect(() => {
    fetch("/fakeData.json")
      .then((res) => res.json())
      .then((data) => setBooks(data));
  }, []);
  return (
    <div className="my-10">
      <h1 className="text-2xl lg:text-5xl font-bold text-center">Books</h1>
      <div className="grid lg:grid-cols-3 grid-cols-1 gap-4">
        {books.slice(0, slice).map((book) => (
          <BookCard key={book.bookId} book={book}></BookCard>
        ))}
      </div>
      <div
        className={`text-center my-5 ${slice === books.length ? "hidden" : ""}`}
      >
        <button
          onClick={() => setSlice(books.length)}
          className="btn bg-green-500 font-bold text-white"
        >
          See All
        </button>
      </div>
    </div>
  );
};

export default Books;
