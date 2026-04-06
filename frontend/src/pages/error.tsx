import { useNavigate } from "react-router-dom";
import { SearchX } from "lucide-react";
import "../css/error.css";

export default function Error() {
  const navigate = useNavigate();

  return (
    <div className="notfound">
      <div className="notfound-box">
        <div className="icon">
          <SearchX size={40} />
        </div>

        <h1>404</h1>
        <p className="title">Page not found</p>
        <p className="desc">
          The page you’re looking for doesn’t exist or was moved.
        </p>

        <button onClick={() => navigate("/")}>
          Go back home
        </button>
      </div>
    </div>
  );
}