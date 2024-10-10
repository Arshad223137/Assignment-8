import { useEffect, useState } from "react";
import React from "react";

import SnapBarChart from "./SnapBarChart";
import { useLoaderData } from "react-router-dom";
import { findBooks } from "../../../public/LocalStorage";

const PagesRead = () => {
  const [reads, setReads] = useState([]);
  const data = useLoaderData();
  const id = findBooks();

  useEffect(() => {
    const match = data.filter((book) => id.includes(book.bookId));
    setReads(match);
  }, []);
  return (
    <div>
      <div className="p-10 w-full text-center bg-gray-200 text-3xl font-bold rounded-lg">
        <h2>Snap Bar Chart</h2>
      </div>
      <div className="flex justify-center my-5">
        <SnapBarChart reads={reads}></SnapBarChart>
      </div>
    </div>
  );
};

export default PagesRead;
