import { useLoaderData, useParams } from "react-router-dom";
import {
  findBooks,
  findWishLists,
  saveBooks,
  saveWishLists,
} from "../../../public/LocalStorage";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const BookDetails = () => {
  const data = useLoaderData();
  const { bookId } = useParams();
  const idInt = parseInt(bookId);
  const find = data.find((book) => book.bookId === idInt);
  const {
    bookName,
    author,
    image,
    review,
    totalPages,
    rating,
    category,
    tags,
    publisher,
    yearOfPublishing,
  } = find;
  const handleWishlist = () => {
    const id = findBooks();
    const wid = findWishLists();
    saveWishLists(idInt);
    if (!id.includes(idInt)) {
      if (!wid.includes(idInt)) {
        toast.success("Added to your wish list!");
      } else {
        toast.warn("Already in your wish list!");
      }
    } else {
      toast.warn("Book already read!");
    }
  };
  const handleBook = () => {
    const id = findBooks();
    saveBooks(idInt);
    if (!id.includes(idInt)) {
      toast.success("Awesome! You read this easily!");
    } else {
      toast.warn("Book already read!");
    }
  };

  return (
    <div>
      <div className="hero bg-base-200 min-h-screen">
        <div className="hero-content flex-col lg:flex-row lg:gap-10">
          <img
            src={image}
            className="w-72 lg:max-w-sm lg:max-h-svh h-80 rounded-lg shadow-2xl"
          />
          <div className="space-y-4">
            <h1 className=" text-xl lg:text-4xl font-bold">{bookName}</h1>
            <h3 className="text-xl">By : {author}</h3>
            <p className="border border-gray-200"></p>
            <h3 className="text-xl">{category}</h3>
            <p className="border border-gray-200"></p>
            <p>
              <span className="font-bold">Review : </span>
              {review}
            </p>
            <h3 className="flex gap-2 lg:gap-5 ">
              <span className="font-bold lg:mr-10">Tag</span>
              {tags.map((tag, Idx) => (
                <li key={Idx} className="list-none text-green-500">
                  #{tag}
                </li>
              ))}
            </h3>
            <p className="border border-gray-200"></p>
            <div className="flex gap-5">
              <div>
                <p>Number of Pages: </p>
                <p>Publisher: </p>
                <p>Year of Publishing: </p>
                <p>Rating: </p>
              </div>
              <div className="font-semibold">
                <h2>{totalPages}</h2>
                <h2>{publisher}</h2>
                <h2>{yearOfPublishing}</h2>
                <h2>{rating}</h2>
              </div>
            </div>
            <div className="flex gap-5">
              <button
                onClick={() => handleBook(idInt)}
                className="btn bg-green-500 text-white mt-4"
              >
                Read
              </button>
              <button
                onClick={() => handleWishlist(idInt)}
                className="btn bg-blue-500 text-white mt-4"
              >
                Wishlist
              </button>
            </div>
          </div>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default BookDetails;
