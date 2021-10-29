import { Link } from "react-router-dom";
export default function Footer() {
  return (
    <footer className="footer footer-cent">
      <hr width="100%" />
      <ul className="list list-h">
        <li>
          <Link className="link" to="/about">
            about
          </Link>
        </li>
        &nbsp;
        <li>
          <Link className="link" to="/credits">
            credits
          </Link>
        </li>
      </ul>
    </footer>
  );
}
