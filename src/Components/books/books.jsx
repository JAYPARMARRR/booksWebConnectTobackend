import "./books.css";
import imageUrl1 from "./arrival_10.jpg";
import imageUrl2 from "./arrival_6.jpg";

const BookCollection = () => {

  const books = [
    {
      title: "Percy Jackson",
      author: "Parmar Jayu",
      imageUrl:imageUrl1,
    },
    {
      title: "Percy Jackson",
      author: "Parmar Jayu",
      imageUrl:imageUrl1,
    },
    {
      title: "Percy Jackson",
      author: "Parmar Jayu",
      imageUrl:imageUrl1,
    },
    {
      title: "Percy Jackson",
      author: "Parmar Jayu",
      imageUrl:imageUrl1,
    },
    {
      title: "Percy Jackson",
      author: "Parmar Jayu",
      imageUrl:imageUrl1,
    },
    {
      title: "Percy Jackson",
      author: "Parmar Jayu",
      imageUrl:imageUrl2,
   
    },
    {
      title: "Percy Jackson",
      author: "Parmar Jayu",
      imageUrl:imageUrl2,
   
    },
    {
      title: "Percy Jackson",
      author: "Parmar Jayu",
      imageUrl:imageUrl2,
   
    },
    {
      title: "Percy Jackson",
      author: "Parmar Jayu",
      imageUrl:imageUrl2,
   
    },
    {
      title: "Percy Jackson",
      author: "Parmar Jayu",
      imageUrl:imageUrl2,
   
    },
    {
      title: "Percy Jackson",
      author: "Parmar Jayu",
      imageUrl:imageUrl2,
   
    },
  ];

  return (
    <div className="book-collection">
      <h1>Collected Books</h1>

<div className="two">

      {books?.map((book, index) => {
          return (
              <>
            <div key={index} className="book">

             <div className="bookkk" >
              <img src={book?.imageUrl} alt={book.title}/>
              </div>
              <h2>{book.title}</h2>
              <p>Author: {book.author}</p>
            </div>

          </>
        );
    })}
    </div>
    </div>
  );
};

export default BookCollection;
