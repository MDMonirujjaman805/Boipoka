// import { useEffect, useState } from "react";
// import { useLoaderData } from "react-router";
// import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
// import "react-tabs/style/react-tabs.css";
// import { getStoredBook } from "../utility/addToDB";
// import Book from "./Book";

// const WishList = () => {
//   // worst case
//   const [wishList, setWishList] = useState([]);
//   const [sort, setSort] = useState("");

//   const data = useLoaderData();

//   useEffect(() => {
//     const storedBookData = getStoredBook();
//     const ConvertedStoredBooks = storedBookData.map((id) => parseInt(id));
//     const myWishList = data.filter((book) =>
//       ConvertedStoredBooks.includes(book.bookId)
//     );
//     setWishList(myWishList);
//   }, []);

//   const handleSort = (type) => {
//     setSort(type);
//     if (type === "pages") {
//       const sortedByPage = [...wishList].sort(
//         (a, b) => a.totalPages - b.totalPages
//       );
//       setWishList(sortedByPage);
//       // console.log(sortedByPage)
//     }
//     if (type === "ratings") {
//       const sortedByrating = [...wishList].sort((a, b) => a.rating - b.rating);
//       setWishList(sortedByrating);
//     }
//   };

//   return (
//     <div>
//       <details className="dropdown ">
//         <summary className="btn m-1">sort by : {sort ? sort : ""}</summary>
//         <ul className="menu dropdown-content bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm">
//           <li>
//             <a onClick={() => handleSort("pages")}>pages</a>
//           </li>
//           <li>
//             <a onClick={() => handleSort("ratings")}>ratings</a>
//           </li>
//         </ul>
//       </details>
//       <Tabs>
//         <TabList>
//           <Tab>Read Book List</Tab>
//           <Tab>My Wish List</Tab>
//         </TabList>

//         <TabPanel>
//           {/* {wishList.map((book) => (
//             <Book key={book.bookId} book={book}></Book>
//           ))} */}
//         </TabPanel>
//         <TabPanel>
//           {wishList.map((book) => (
//             <Book key={book.bookId} book={book}></Book>
//           ))}
//         </TabPanel>
//       </Tabs>
//     </div>
//   );
// };

// export default WishList;
