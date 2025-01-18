import { signin } from "../apis/user.js";
import { setUserInfo } from "../localStorage.js";
import {
  hideLoading,
  redirectUser,
  showLoading,
  showMessage,
} from "../utils.js";

export const SigninPage = {
  render: () => {
    return `
      <div class="form-container">
      <form id="signin-form">
        <ul class="form-items">
          <li>
            <h1>Sign-In</h1>
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
            <button type="submit" class="primary">Signin</button>
          </li>
          <li>
            <div>
              New User?
              <a href="/#/register">Create your account </a>
            </div>
          </li>
        </ul>
      </form>
    </div>
    `;
  },
  after_render: () => {
    const form = document.getElementById("signin-form");

    form.addEventListener("submit", onSubmit);
  },
};
async function onSubmit(event) {
  event.preventDefault();

  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  showLoading();
  const data = await signin({
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
