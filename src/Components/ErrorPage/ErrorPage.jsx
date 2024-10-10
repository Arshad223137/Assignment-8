import React from "react";
import { Link, useRouteError } from "react-router-dom";

const ErrorPage = () => {
  const error = useRouteError();
  return (
    <div className="flex justify-center items-center min-h-screen">
      <div className="space-y-5 text-center">
        <h1 className="text-4xl font-bold">Oops!!!</h1>
        <p className="text-xl">Sorry, an unexpected error has occurred.</p>
        <p className="font-semibold">
          <i>{error.statusText || error.message}</i>
        </p>
        <Link to={"/"}>
          <button className="btn bg-blue-500 text-white mt-4">Go Back !</button>
        </Link>
      </div>
    </div>
  );
};

export default ErrorPage;
