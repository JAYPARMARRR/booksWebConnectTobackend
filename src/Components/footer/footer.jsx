import './Footer.css';

const Footer = () => {
  const currentDate = new Date().getFullYear();
  const companyName = "Your Company Name";

  return (
    <footer className="footer">
      <div className="footer-top">
        <div className="footer-left">
          <h3>Contact Us</h3>
          <p> surendaranagar</p>
          <p>State, Country</p>
          <p>Phone: 95109223353</p>
          <p>Email: jaykumarvinodbhi@gmail.com</p>
        </div>
        <div className="footer-right">
          <h3>Subscribe to Books</h3>
          <form className="subscription-form">
            <input type="email" placeholder="Enter your email" />
            <button type="submit">Subscribe</button>
          </form>
        </div>
      </div>
      <div className="footer-bottom">
        <div className="social-links">
          <a href="#"><i className="fab fa-facebook-f"></i></a>
          <a href="#"><i className="fab fa-twitter"></i></a>
          <a href="#"><i className="fab fa-instagram"></i></a>
        </div>
        <p>&copy; {currentDate} {companyName}. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
