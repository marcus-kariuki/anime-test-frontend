import React, { Component } from "react";
import axios from "axios";
import './SingleAnime.css'

class SignupForm extends Component {
  state = {
    username: "",
    email: "",
    password: "",
    confirm_password: "",
    errors: "",
  };

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({
      [name]: value,
    });
  };

  handleSubmit = (event) => {
    event.preventDefault(); // Prevents the default form submission behaviour

    const { username, email, password, confirm_password } = this.state;

    axios
      .post("http://localhost:4000/signup", {
        user: {
          username: username,
          email: email,
          password: password,
          password_confirmation: confirm_password, // The name of the parameter should be 'password_confirmation'
        },
      })
      .then((response) => {
        const user = response.data;
        console.log(`Signed up as ${user.username}`);
        // Handle success case
      })
      .catch((error) => {
        const errors = error.response.data;
        console.log(error);
        // Handle error case
      });
  };

  render() {
    const { username, email, password, confirm_password } = this.state;
    return (
      <section
        class="vh-100 bg-image"
        style={{
          backgroundImage:
            "url('https://images4.alphacoders.com/116/1165712.jpg')",
        }}
      >
        <div class="mask d-flex align-items-center h-100 gradient-custom-3">
          <div class="container h-100">
            <div class="row d-flex justify-content-center align-items-center h-100">
              <div class="col-12 col-md-9 col-lg-7 col-xl-6">
                <div
                  class="card"
                  style={{ borderRadius: "15px", background: "#eee" }}
                >
                  <div class="card-body p-5">
                    <h2 class="text-uppercase text-center mb-5">
                      Create an account
                    </h2>

                    <form method="Post" onSubmit={this.handleSubmit}>
                      <div class="form-outline mb-4">
                        <label class="form-label" for="form3Example1cg">
                          Username
                        </label>
                        <input
                          type="text"
                          id="form3Example1cg"
                          name="username"
                          value={username}
                          class="form-control form-control-lg"
                          onChange={this.handleChange}
                          required
                        />
                      </div>

                      <div class="form-outline mb-4">
                        <label class="form-label" for="form3Example3cg">
                          Your Email
                        </label>
                        <input
                          type="email"
                          id="form3Example3cg"
                          name="email"
                          value={email}
                          class="form-control form-control-lg"
                          onChange={this.handleChange}
                          required
                        />
                      </div>

                      <div class="form-outline mb-4">
                        <label class="form-label" for="form3Example4cg">
                          Password
                        </label>
                        <input
                          type="password"
                          id="form3Example4cg"
                          name="password"
                          value={password}
                          class="form-control form-control-lg"
                          onChange={this.handleChange}
                          required
                        />
                      </div>

                      <div class="form-outline mb-4">
                        <label class="form-label" for="form3Example4cdg">
                          Confirm Password
                        </label>
                        <input
                          type="password"
                          id="form3Example4cdg"
                          name="confirm_password"
                          value={confirm_password}
                          class="form-control form-control-lg"
                          onChange={this.handleChange}
                          required
                        />
                      </div>

                      <div class="form-check d-flex justify-content-center mb-5">
                        <input
                          class="form-check-input me-2"
                          type="checkbox"
                          value=""
                          id="form2Example3cg"
                        />
                        <label class="form-check-label" for="form2Example3g">
                          I agree all statements in{" "}
                          <a href="#!" style={{ color: "#ff6219" }}>
                            Terms of service
                          </a>
                        </label>
                      </div>

                      <div class="d-flex justify-content-center">
                        <button
                          type="submit"
                          class="btn btn-dark btn-lg btn-block"
                        >
                          Register
                        </button>
                      </div>

                      <p class="text-center text-muted mt-5 mb-0">
                        Have already an account?{" "}
                        <a href="/login" style={{ color: "#ff6219" }}>
                          Login
                        </a>
                      </p>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default SignupForm;
