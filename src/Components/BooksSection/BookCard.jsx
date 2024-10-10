import { Link } from "react-router-dom";
import { FaRegStar } from "react-icons/fa6";

const BookCard = ({ book }) => {
  const { bookId, bookName, author, image, rating, category, tags } = book;

  return (
    <div>
      <div className="card bg-base-100 w-96 shadow-xl">
        <Link to={`/bookdetails/${bookId}`}>
          <figure className="bg-stone-200 p-5 m-5">
            <img className="max-w-52 h-40 rounded-lg" src={image} alt="book" />
          </figure>
          <div className="card-body">
            <h2 className="text-[16px] flex gap-2 text-green-600">
              {tags.map((tag, Idx) => (
                <li key={Idx} className="list-none">
                  {tag}
                </li>
              ))}
            </h2>
            <h1 className="text-2xl font-bold">{bookName}</h1>
            <p>By : {author}</p>
            <p className="border border-gray-300 my-2"></p>
            <div className="flex justify-between">
              <h4>{category}</h4>
              <h4 className="flex items-center gap-2">
                {rating} <FaRegStar />
              </h4>
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default BookCard;
