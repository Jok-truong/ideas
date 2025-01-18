export const setUserInfo = ({
  _id = "",
  name = "",
  email = "",
  password = "",
  isAdmin = false,
}) => {
  localStorage.setItem(
    "userInfo",
    JSON.stringify({
      _id,
      name,
      email,
      password,
      isAdmin,
    })
  );
};

export const getUserInfo = () => {
  return JSON.parse(localStorage.getItem("userInfo"));
};
