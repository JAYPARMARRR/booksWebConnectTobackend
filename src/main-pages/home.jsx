import { useState } from "react";
import "./Home.css";
import axios from "axios";
const Home = () => {
  const [booksData, setBooksData] = useState([]);
  //   const token = localStorage.getItem("book_library");

  const exploreBooks = () => {
    // let config = {
    //   headers: {
    //     authorization: token,
    //   },
    // };

    axios
      .get("http://192.168.1.104:2030/books/getAllBooks")
      .then((response) => {
        setBooksData(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="home">
      {booksData.length > 0 ? (
        <>
          {booksData.map((e) => {
            return (
              // eslint-disable-next-line react/jsx-key
              <div>
                <p>{e.title}</p>
                <span>{e.author}</span>
              </div>
            )
          })}
        </>
      ) : (
        <>
          <h1>Welcome to the Books</h1>
          <p>Discover a world of books and indulge in your reading passion.</p>

          <button className="explore-button" onClick={exploreBooks}>
            Explore Books
          </button>
        </>
      )}
    </div>
  );
};

export default Home;

   


