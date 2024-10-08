import ListedBooksCard from "./ListedBooksCard";
import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { findBooks, findWishLists } from "../../../public/LocalStorage";
import WishListCard from "./WishListCard";

const ListedBooks = () => {
  const [reads, setRead] = useState([]);
  const [wishs, setWish] = useState([]);
  const data = useLoaderData();
  const id = findBooks();
  const wId = findWishLists();
  useEffect(() => {
    const match = data.filter((book) => id.includes(book.bookId));
    setRead(match);
    const find = data.filter((book) => wId.includes(book.bookId));
    setWish(find);
  }, []);
  return (
    <div>
      <div className="p-10 w-full text-center bg-gray-200 text-xl font-bold rounded-lg">
        <h1>Books</h1>
      </div>
      <div className="text-center my-5">
        <details className="dropdown">
          <summary className="btn m-1">open or close</summary>
          <ul className="menu dropdown-content bg-base-100 rounded-box z-[1] w-52 p-2 shadow">
            <li>
              <a>Item 1</a>
            </li>
            <li>
              <a>Item 2</a>
            </li>
          </ul>
        </details>
      </div>
      <div role="tablist" className="tabs tabs-lifted">
        <input
          type="radio"
          name="my_tabs_2"
          role="tab"
          className="tab"
          aria-label="Read Books"
          defaultChecked
        />
        <div
          role="tabpanel"
          className="tab-content bg-base-100 border-base-300 rounded-box p-6"
        >
          <div>
            {reads.map((read) => (
              <ListedBooksCard key={read.bookId} read={read}></ListedBooksCard>
            ))}
          </div>
        </div>

        <input
          type="radio"
          name="my_tabs_2"
          role="tab"
          className="tab"
          aria-label="Wishlist Books"
        />
        <div
          role="tabpanel"
          className="tab-content bg-base-100 border-base-300 rounded-box p-6"
        >
          <div>
            {wishs.map((wish) => (
              <WishListCard key={wish.bookId} wish={wish}></WishListCard>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ListedBooks;
