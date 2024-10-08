import React, { useEffect } from "react";
import { useLoaderData, useParams } from "react-router-dom";

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

  return (
    <div>
      <div className="hero bg-base-200 min-h-screen">
        <div className="hero-content flex-col lg:flex-row lg:gap-10">
          <img src={image} className="max-w-sm rounded-lg shadow-2xl" />
          <div className="space-y-4">
            <h1 className="text-4xl font-bold">{bookName}</h1>
            <h3 className="text-xl">By : {author}</h3>
            <p className="border border-gray-200"></p>
            <h3 className="text-xl">{category}</h3>
            <p className="border border-gray-200"></p>
            <p>
              <span className="font-bold">Review : </span>
              {review}
            </p>
            <h3 className="flex gap-5 ">
              <span className="font-bold mr-10">Tag</span>
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
              <button className="btn bg-green-500 text-white mt-4">Read</button>
              <button className="btn bg-blue-500 text-white mt-4">
                Wishlist
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookDetails;
