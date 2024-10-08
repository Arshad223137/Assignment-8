const findBooks = () => {
  const findBook = localStorage.getItem("RWBooks");
  if (findBook) {
    return JSON.parse(findBook);
  }
  return [];
};

const findWishLists = () => {
  const findWishlist = localStorage.getItem("WLBooks");
  if (findWishlist) {
    return JSON.parse(findWishlist);
  }
  return [];
};

const saveBooks = (id) => {
  const findBook = findBooks();
  const wishList = findWishLists();
  const findId = findBook.find((jobID) => jobID === id);
  if (!findId) {
    findBook.push(id);
    localStorage.setItem("RWBooks", JSON.stringify(findBook));
    const wishListFind = wishList.filter((bookId) => bookId !== id);
    localStorage.setItem("WLBooks", JSON.stringify(wishListFind));
  }
};

const saveWishLists = (id) => {
  const wishList = findWishLists();
  const findBook = findBooks();

  const find = findBook.find((bookId) => bookId === id);
  if (!find) {
    const find = wishList.find((bookId) => bookId === id);
    if (!find) {
      wishList.push(id);
      localStorage.setItem("WLBooks", JSON.stringify(wishList));
    }
  }
};

export { saveBooks, findBooks, saveWishLists, findWishLists };
