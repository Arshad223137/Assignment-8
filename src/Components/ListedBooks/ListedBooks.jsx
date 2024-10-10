import ListedBooksCard from "./ListedBooksCard";
import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { findBooks, findWishLists } from "../../../public/LocalStorage";
import WishListCard from "./WishListCard";
import { RxDropdownMenu } from "react-icons/rx";

const ListedBooks = () => {
  const [reads, setRead] = useState([]);
  const [wishs, setWish] = useState([]);
  const [readsort, setReadSort] = useState([]);
  const [wishsort, setWishSort] = useState([]);
  const [isOn, setIson] = useState(false);
  const [textFilter, setTextFilter] = useState("All");
  const data = useLoaderData();
  const id = findBooks();
  const wId = findWishLists();
  useEffect(() => {
    const match = data.filter((book) => id.includes(book.bookId));
    setRead(match);
    setReadSort(match);
    const find = data.filter((book) => wId.includes(book.bookId));
    setWish(find);
    setWishSort(find);
  }, []);

  const sortHandle = (filter) => {
    if (filter === "all") {
      setReadSort(reads);
      setWishSort(wishs);
      setTextFilter("ALL");
    } else if (filter === "fiction") {
      const findRead = reads.filter(
        (read) =>
          read.category === "Fiction" ||
          read.category === "Historical Fiction" ||
          read.category === "Science Fiction"
      );
      const findWish = wishs.filter(
        (wish) =>
          wish.category === "Fiction" ||
          wish.category === "Historical Fiction" ||
          wish.category === "Science Fiction"
      );
      setReadSort(findRead);
      setWishSort(findWish);
      setTextFilter("Fiction");
    } else if (filter === "fantasy") {
      const findRead = reads.filter((read) => read.category === "Fantasy");
      const findWish = wishs.filter((wish) => wish.category === "Fantasy");
      setReadSort(findRead);
      setWishSort(findWish);
      setTextFilter("Fantasy");
    } else if (filter === "memoir") {
      const findRead = reads.filter((read) => read.category === "Memoir");
      const findWish = wishs.filter((wish) => wish.category === "Memoir");
      setReadSort(findRead);
      setWishSort(findWish);
      setTextFilter("Memoir");
    }
    setIson(false);
  };
  const HandleToggel = () => {
    setIson(!false);
  };

  return (
    <div>
      <div className="p-10 w-full text-center bg-gray-200 text-3xl font-bold rounded-lg">
        <h1>Books</h1>
      </div>
      <div className=" flex justify-center my-5">
        {!isOn && (
          <summary onClick={() => HandleToggel()} className="btn m-1">
            {textFilter} <RxDropdownMenu className="text-xl"></RxDropdownMenu>
          </summary>
        )}
        {isOn && (
          <ul className="menu dropdown-content bg-base-100 rounded-box z-[1] w-52 p-2 shadow">
            <li onClick={() => sortHandle("all")}>
              <a>All</a>
            </li>
            <li onClick={() => sortHandle("fiction")}>
              <a>Fiction</a>
            </li>
            <li onClick={() => sortHandle("fantasy")}>
              <a>Fantasy</a>
            </li>
            <li onClick={() => sortHandle("memoir")}>
              <a>Memoir</a>
            </li>
          </ul>
        )}
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
            {readsort.map((read) => (
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
            {wishsort.map((wish) => (
              <WishListCard key={wish.bookId} wish={wish}></WishListCard>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ListedBooks;
