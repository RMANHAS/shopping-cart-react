import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <>
      <div className="footer-item">
        <h5>
          <Link to="/about" style={{margin:'15px',paddingRight:'5px',borderRight:"1px solid"}}>About</Link>
          <Link to="/contact">Contact</Link>
        </h5>
      </div>
    </>
  );
}
