import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function NoProducts() {
  return (
    <div className="no-products py-5">
      <div className="container px-lg-5 text-center">
        <FontAwesomeIcon
          icon="fa-solid fa-bag-shopping"
          style={{ fontSize: "60px", color: "#a749ff" }}
        />
        <p
          className="mb-0 mt-3"
          style={{ fontSize: "25px", fontWeight: "600" }}
        >
          No Items to Show!
        </p>
      </div>
    </div>
  );
}
