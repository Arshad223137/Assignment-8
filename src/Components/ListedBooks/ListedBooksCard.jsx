import { LuMapPin } from "react-icons/lu";
import { GoPeople } from "react-icons/go";
import { SlBookOpen } from "react-icons/sl";
import { Link } from "react-router-dom";

const ListedBooksCard = ({ read }) => {
  const {
    bookId,
    bookName,
    author,
    image,
    totalPages,
    rating,
    category,
    tags,
    publisher,
    yearOfPublishing,
  } = read;
  return (
    <div className="my-5">
      <div className="card card-side bg-base-100 shadow-xl">
        <figure>
          <img className="w-72 h-48  rounded-xl m-5" src={image} alt="image" />
        </figure>
        <div className="card-body">
          <h2 className="text-2xl font-bold">{bookName}</h2>
          <p className="xl">By : {author}</p>
          <div className="flex items-center gap-5">
            <span className="font-bold">Tag</span>
            <h2 className="text-[16px] flex gap-2 text-green-600">
              {tags.map((tag, Idx) => (
                <li
                  key={Idx}
                  className="list-none p-2 bg-green-100 rounded-full"
                >
                  #{tag}
                </li>
              ))}
            </h2>
            <p
              className="flex
            items-center gap-2"
            >
              <LuMapPin></LuMapPin> Year of Publishing: {yearOfPublishing}
            </p>
          </div>
          <div className="flex gap-5">
            <p className="flex items-center gap-2">
              <GoPeople></GoPeople> Publisher: {publisher}
            </p>
            <p className="flex items-center gap-2">
              <SlBookOpen></SlBookOpen> Page: {totalPages}
            </p>
          </div>
          <p className="border border-gray-200"></p>
          <div className="flex items-center gap-5">
            <h4 className="p-2 bg-blue-300 font-bold rounded-full">
              Category : {category}
            </h4>
            <h4 className="p-2 bg-orange-200 font-bold rounded-full">
              Rating : {rating}
            </h4>
            <Link to={`/bookdetails/${bookId}`}>
              <button className="btn bg-green-500 rounded-full text-white">
                View Details
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ListedBooksCard;
