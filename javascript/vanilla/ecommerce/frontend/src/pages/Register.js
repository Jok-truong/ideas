import { register } from "../apis/user.js";
import { getUserInfo, setUserInfo } from "../localStorage.js";
import {
  hideLoading,
  redirectUser,
  showLoading,
  showMessage,
} from "../utils.js";

export const RegisterPage = {
  render: () => {
    const { name } = getUserInfo();
    if (name) {
      redirectUser();
    }
    return `
      <div class="form-container">
      <form id="register-form">
        <ul class="form-items">
          <li>
            <h1>Create Account</h1>
          </li>
          <li>
            <label for="name">Name</label>
            <input type="name" name="name" id="name" />
          </li>
          <li>
            <label for="email">Email</label>
            <input type="email" name="email" id="email" />
          </li>
          <li>
            <label for="password">Password</label>
            <input type="password" name="password" id="password" />
          </li>
          <li>
            <label for="repassword">Re-Enter Password</label>
            <input type="password" name="repassword" id="repassword" />
          </li>
          <li>
            <button type="submit" class="primary">Register</button>
          </li>
          <li>
            <div>
              Already have an account?
              <a href="/#/signin">Sign-In </a>
            </div>
          </li>
        </ul>
      </form>
    </div>
    `;
  },

  after_render: () => {
    const form = document.getElementById("register-form");
    form.addEventListener("submit", onSubmit);
  },
};

async function onSubmit(event) {
  event.preventDefault();

  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  showLoading();
  const data = await register({
    name,
    email,
    password,
  });
  hideLoading();

  if (data.error) {
    showMessage(data.error);
  } else {
    setUserInfo(data);
    redirectUser();
  }
}
