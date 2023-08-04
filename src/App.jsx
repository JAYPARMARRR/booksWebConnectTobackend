import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import RegistrationForm from "./Components/Form Validation/FormValidation";
import NavbarWithSearchBox from "./Components/Navbar/navbar";
import BookstoreSearchBar from "./main-pages/home";
import About from "./Components/about/about";
import BookCollection from "./Components/books/books";
import Footer from "./Components/footer/footer";

const App = () => {
  const isLogin = localStorage.getItem("book_library");

  return (
    <>
      <NavbarWithSearchBox/>
      <BrowserRouter>
        <Routes>
          <Route index element={<RegistrationForm />} />
          <Route
            path="/BookstoreSearchBar"
            element={isLogin ? <BookstoreSearchBar /> : <Navigate to={"/"} />}
          />
        </Routes>
        <About />
        <BookCollection />
        <Footer />
      </BrowserRouter>
    </>
  );
};

export default App;
