import React from "react";
import { useLoaderData, useParams } from "react-router";
import { addToStoredDB } from "../utility/addToDB";

const BookDetails = () => {
  const { bookId } = useParams();
  const id = parseInt(bookId);
  const data = useLoaderData();
  const book = data.find((book) => book.bookId === id);

  const {
    image,
    bookName,
    review,
    author,
    category,
    tags,
    totalPages,
    rating,
    publisher,
    yearOfPublishing,
  } = book;

  const handleMarkAsRead = (id)=> {

    addToStoredDB(id)
  }

  const handleAddToWishList = (id)=> {
    addToStoredDB(id)
  }

  return (
    <div className=" flex flex-col md:flex-row lg:flex-row my-10 space-y-4">
      <div className="w-5/12 mx-auto ">
        <img className="object-cover" src={image} alt={bookName} />
      </div>
      <div className="w-5/12 mx-auto">
        <h1 className="text-4xl font-bold">{bookName}</h1>
        <h6 className="text-xl">By: {author}</h6>
        <hr />
        <p>{category}</p>
        <hr />
        <p>Review: {review}</p>
        <p>Tags: {tags}</p>
        <hr />
        <div>
          <p>Total Pages: {totalPages}</p>
          <p>Publisher: {publisher}</p>
          <p>Year Of Public: {yearOfPublishing}</p>
          <p>Rating: {rating}</p>
        </div>
        <div className="flex space-x-5">
          <button onClick={()=> handleMarkAsRead(addToStoredDB(bookId))} className="btn btn-outline btn-accent">Mark As Read</button>
          <button onClick={()=> handleAddToWishList(addToStoredDB(bookId)) } className="btn btn-info">Add To WishList</button>
        </div>
      </div>
    </div>
  );
};

export default BookDetails;

//   const book = data.find(book => book.bookId === bookId)
//   console.log(typeof bookId);
//   console.log(typeof id );
//   console.log(data);

//    <div className="card lg:card-side bg-base-100 shadow-sm">
//         <figure>
//           <img
//           className="object-cover bg-[#13131326]"
//             src={image}
//             alt={bookName}
//           />
//         </figure>
//         <div className="card-body">
//           <h2 className="card-title">{bookName}</h2>
//           <p className="line-clamp-6">{review}</p>
//           <div className="card-actions justify-end">
//             <button className="btn btn-primary">Listen</button>
//           </div>
//         </div>
//       </div>
