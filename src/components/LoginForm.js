import React, { useState} from "react";

function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    fetch("http://localhost:4000/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        user: {
          email: email,
          password: password,
        },
      }),
    })
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error("No Account please sign up");
        }
      })
      .then((data) => {
        localStorage.setItem("jwt", data.jwt);
        window.location.href = "/home";
      })
      .catch((error) => {
        alert(error.message);
      });

  };

  

    return (
      <div className="">
        {/* <!-- Section: Design Block --> */}
        <section className="vh-100" style={{ backgroundColor: "#003333" }}>
          <div class="container py-5 h-100">
            <div class="row d-flex justify-content-center align-items-center h-100">
              <div class="col col-xl-10">
                <div class="card" style={{ borderRadius: "1rem" }}>
                  <div class="row g-0">
                    <div class="col-md-6 col-lg-5 d-none d-md-block">
                      <img
                        src="https://wallpapercave.com/wp/wp4328787.jpg"
                        alt="login form"
                        class="img-fluid"
                        style={{ borderRadius: "1rem 0 0 1rem" }}
                      />
                    </div>
                    <div class="col-md-6 col-lg-7 d-flex align-items-center">
                      <div
                        className="card-body p-4 p-lg-5 text-black"
                        style={{ backgroundImage: "" }}
                      >
                        <form onSubmit={handleSubmit}>
                          <div class="d-flex align-items-center mb-3 pb-1">
                            <i
                              class="fas fa-cubes fa-2x me-3"
                              style={{ color: "#ff6219" }}
                            ></i>
                            <span className="h1 fw-bold mb-0">Login</span>
                          </div>

                          <h5
                            class="fw-normal mb-3 pb-3"
                            style={{ letterSpacing: "1px" }}
                          >
                            Sign into your account
                          </h5>

                          <div class="form-outline mb-4">
                            <label className="form-label" for="form2Example17">
                              Email address
                            </label>
                            <input
                              type="email"
                              id="form2Example17"
                              class="form-control form-control-lg"
                              name="email"
                              value={email}
                              onChange={handleEmailChange}
                            />
                          </div>

                          <div class="form-outline mb-4">
                            <label className="form-label" for="form2Example27">
                              Password
                            </label>
                            <input
                              type="password"
                              id="form2Example27"
                              class="form-control form-control-lg"
                              name="password"
                              value={password}
                              onChange={handlePasswordChange}
                            />
                          </div>

                          <div class="pt-1 mb-4">
                            <button
                              className="btn btn-dark btn-lg btn-block"
                              type="submit"
                            >
                              Login
                            </button>
                          </div>

                          <p
                            class="mt-3 mb-0 text-center"
                            style={{ fontSize: "15px" }}
                          >
                            Don't have an account?{" "}
                            <a href="/signup" style={{ color: "#ff6219" }}>
                              Sign up
                            </a>
                          </p>
                        </form>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }


export default LoginForm;

// import React, { useState } from "react";

// function LoginForm() {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");

//   const handleEmailChange = (event) => {
//     setEmail(event.target.value);
//   };

//   const handlePasswordChange = (event) => {
//     setPassword(event.target.value);
//   };

//   const handleSubmit = (event) => {
//     event.preventDefault();
//     fetch("http://localhost:4000/api/v1/login", {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify({
//         user: {
//           email: email,
//           password: password,
//         },
//       }),
//     })
//       .then((response) => {
//         if (response.ok) {
//           return response.json();
//         } else {
//           throw new Error("No Account please sign up");
//         }
//       })
//       .then((data) => {
//         localStorage.setItem("jwt", data.jwt);
//         window.location.href = "/";
//       })
//       .catch((error) => {
//         alert(error.message);
//       });

//   };

//   render () {

//   return (

//   }
// }

// export default LoginForm;
