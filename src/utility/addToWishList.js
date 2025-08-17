const getStoredBookAtWishList = () => {
  const storedBookString = localStorage.getItem("wishList");
//   const storedBookSTR = localStorage.getItem("readList");

  if (storedBookString) {
    const storedBookData = JSON.parse(storedBookString);
    return storedBookData;
  } else {
    return [];
  }
};

const addToStoredWishList = (id) => {
  const storedBookData = getStoredBookAtWishList();

  if (storedBookData.includes(id)) {
    // console.log("hello")
    alert("bhai ei id already wish listay exist ");
  } else {
    storedBookData.push(id);
    const data = JSON.stringify(storedBookData);
    localStorage.setItem("wishList", data);
    // localStorage.setItem("readList", data);
  }
};

export default { addToStoredWishList, getStoredBookAtWishList };
