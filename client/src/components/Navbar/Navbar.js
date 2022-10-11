import React, { useState } from "react";
import "./Navbar.scss";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { UserContext } from "../../App";
import { useNavigate } from "react-router-dom";

function Navbar() {
  const { state, dispatch } = useContext(UserContext);
  const [activeRoute, setActiveRoute] = useState("home");
  const navigate = useNavigate();

  const routeHandler = (route) => {
    setActiveRoute(route);
  };

  const renderNav = () => {
    if (state) {
      return (
        <>
          <li>
            <Link to="/" onClick={() => routeHandler("home")}>
              <i
                className={`fa-${
                  activeRoute === "home" ? "solid" : "regular"
                } fa-house`}
              ></i>
            </Link>
          </li>
          <li>
            <Link to="/profile" onClick={() => routeHandler("profile")}>
              <i
                className={`fa-${
                  activeRoute === "profile" ? "solid" : "regular"
                } fa-user`}
              ></i>
            </Link>
          </li>
          <li>
            <Link to="/createpost" onClick={() => routeHandler("createpost")}>
              <i
                className={`fa-${
                  activeRoute === "createpost" ? "solid" : "regular"
                } fa-square-plus`}
              ></i>
            </Link>
          </li>
          <li>
            <button
              className="logout-btn"
              onClick={() => {
                routeHandler("home");
                localStorage.clear();
                dispatch({ type: "CLEAR" });
                navigate("/login#login");
              }}
            >
              <i className="fa-solid fa-right-from-bracket"></i>
            </button>
          </li>
        </>
      );
    } else {
      return (
        <>
          <li>
            <Link to="/login#register">
              <i className="fa-solid fa-right-to-bracket"></i>
            </Link>
          </li>
        </>
      );
    }
  };

  return (
    <div>
      <nav>
        <div className="nav-wrapper container">
          <section className="top-nav">
            <Link
              to={state ? "/" : "/login#login"}
              className="logo"
              onClick={() => routeHandler("home")}
            >
              MernGram
            </Link>
            <input id="menu-toggle" type="checkbox" />
            <ul className="menu">{renderNav()}</ul>
          </section>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
