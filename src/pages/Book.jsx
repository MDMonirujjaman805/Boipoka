import { Link } from "react-router";

const Book = ({ book }) => {
  //   console.log(book);
  const { image, bookName, author, category, rating, bookId } = book;
  return (
    <Link to={`/books/${bookId}`}>
      <div className="card bg-base-100 shadow-2xl mt-5 p-6 rounded-2xl">
        <figure className="bg-[#13131326] ">
          <img
            src={image}
            className=" object-cover h-[166px] py-8"
            alt={bookName}
          />
        </figure>
        <div className="card-body ">
          <div className="card-actions justify-around items-center btn btn-soft btn-success">
            <div className="badge badge-outline">Fashion</div>
            <div className="badge badge-outline">Products</div>
          </div>
          <h2 className="card-title line-clamp-1">{bookName}</h2>
          <h4>By : {author}</h4>
          <hr />
          <div className="flex justify-between ">
            <p>Category: {category}</p>
            <div className="flex items-center gap-2.5">
              <p>Rating: {rating}</p>
              <div className="rating">
                <div
                  className="mask mask-star"
                  aria-label="1 star"
                  aria-current="true"
                ></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default Book;

/* <div class="mask mask-star" aria-label="1 star"></div> */

/* <div className="badge badge-secondary">NEW</div> */

// min-h-[400px] max-h-[700px] overflow-hidden
