import React from "react";

const BookCard = ({ book }) => {
  const {
    bookId,
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
  } = book;
  return (
    <div>
      <div className="card bg-base-100 w-96 shadow-xl">
        <figure className="bg-stone-200 p-5 m-5">
          <img
            className="max-w-52 h-40 rounded-lg "
            src={image}
            alt="book"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">
            { tags}
          </h2>
          <p>If a dog chews shoes whose shoes does he choose?</p>
          <div className="card-actions justify-end">
            <div className="badge badge-outline">Fashion</div>
            <div className="badge badge-outline">Products</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookCard;
