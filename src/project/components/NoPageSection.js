import { Link } from "react-router-dom";
import "./styling/no-page.scss";
export default function NoPageSection() {
  return (
    <div className="no-page py-5">
      <div className="container px-lg-5 py-3">
        <div className="error text-center">
          <h1>404</h1>
          <h3>OPPS! PAGE NOT FOUND</h3>
          <p>
            Sorry but the page you are looking for does not exist, have been
            removed, name changed or is temporarity unavailable.
          </p>
          <Link to="/">Back to Home</Link>
        </div>
      </div>
    </div>
  );
}
