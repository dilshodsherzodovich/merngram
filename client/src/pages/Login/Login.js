import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
// import { useHistory } from "react-router-dom";
import "./Login.scss";
import Peach from "../../components/Spline/Peach";
import Room from "../../components/Spline/Room";
import M from "materialize-css";
import { useContext } from "react";
import { UserContext } from "../../App";

function Login() {
  const navigate = useNavigate();
  const { state, dispatch } = useContext(UserContext);
  const [regName, setRegName] = useState("");
  const [regEmail, setRegEmail] = useState("");
  const [regPassword, setRegPassword] = useState("");
  const [logEmail, setLogEmail] = useState("");
  const [logPassword, setLogPassword] = useState("");
  const [form, setForm] = useState(false);
  const [passErr, setPassErr] = useState(null);

  const toggleForm = () => {
    return setForm((prev) => !prev);
  };

  const postData = () => {
    if (!/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/.test(regPassword)) {
      return setPassErr(
        "Your password should contain minimum eight characters, at least one letter and one number"
      );
    }
    fetch("http://localhost:5000/signup", {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      mode: "cors",
      body: JSON.stringify({
        name: regName,
        email: regEmail,
        password: regPassword,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.err) {
          M.toast({ html: data.err, classes: "errNotification" });
        } else {
          M.toast({ html: data.msg, classes: "okNotifiaction" });
          setRegName("");
          setRegEmail("");
          setRegPassword("");
          setForm((prev) => !prev);
          setPassErr(null);
        }
      });
  };

  const signIn = () => {
    fetch("http://localhost:5000/signin", {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      mode: "cors",
      body: JSON.stringify({ email: logEmail, password: logPassword }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.err) {
          M.toast({ html: data.err, classes: "errNotification" });
        } else {
          M.toast({
            html: "You are successfully logged in",
            classes: "okNotifiaction",
          });
          localStorage.setItem("jwt", data.token);
          localStorage.setItem("user", JSON.stringify(data.user));
          dispatch({ type: "USER", payload: data.user });
          setLogEmail("");
          setLogPassword("");
          navigate("/");
        }
      })
      .catch((err) => console.log(err));
  };

  return (
    <div>
      <section>
        <div className={`container ${form ? "" : "active"}`}>
          <div className="user signinBx">
            <div className="imgBx">
              <Peach />
            </div>
            <div className="formBx">
              <form action="" onSubmit={() => false}>
                <h2>MernGram</h2>
                <input
                  onChange={(e) => {
                    setLogEmail(e.target.value);
                  }}
                  type="email"
                  value={logEmail}
                  placeholder="Enter your email"
                />
                <input
                  onChange={(e) => {
                    setLogPassword(e.target.value);
                  }}
                  type="password"
                  value={logPassword}
                  placeholder="Password"
                />
                <input
                  onClick={(e) => {
                    e.preventDefault();
                    signIn();
                  }}
                  type="submit"
                  value="Login"
                />
                <p className="signup">
                  Don't have an account ?
                  <a href="#register" onClick={toggleForm}>
                    Sign Up.
                  </a>
                </p>
              </form>
            </div>
          </div>
          <div className="user signupBx">
            <div className="formBx">
              <form action="" onSubmit={() => false}>
                <h2>Create an account</h2>
                <input
                  onChange={(e) => {
                    setRegName(e.target.value);
                  }}
                  type="text"
                  value={regName}
                  placeholder="Username"
                />
                <input
                  onChange={(e) => {
                    setRegEmail(e.target.value);
                  }}
                  type="email"
                  value={regEmail}
                  placeholder="Email Address"
                />
                <input
                  onChange={(e) => {
                    setRegPassword(e.target.value);
                  }}
                  type="password"
                  value={regPassword}
                  placeholder="Create Password"
                />
                {passErr ? (
                  <div className="passErr">
                    <p>{passErr}</p>
                  </div>
                ) : null}
                <input
                  onClick={(e) => {
                    e.preventDefault();
                    postData();
                  }}
                  type="submit"
                  value="Sign Up"
                />
                <p className="signup">
                  Already have an account ?
                  <a href="#login" onClick={toggleForm}>
                    Sign in.
                  </a>
                </p>
              </form>
            </div>
            <div className="imgBx">
              <Room />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Login;
