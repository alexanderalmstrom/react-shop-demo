import Cookies from "js-cookie";

export const getToken = () => {
  return Cookies.get("token");
};

export const setToken = (token) => {
  Cookies.set("token", token);
};

export const getUser = () => {
  return window.localStorage.getItem("user")
    ? JSON.parse(window.localStorage.getItem("user"))
    : {};
};

export const setUser = (user) => {
  window.localStorage.setItem("user", JSON.stringify(user));
};

export const userRoutes = {
  GUEST: ["/login"],
  ADMIN: ["/user"],
  USER: ["/user"],
};

export const getRoute = () => {
  const { role = "GUEST", name } = getUser();

  if (name) {
    return userRoutes[role][0] + `/${name}`;
  } else {
    return userRoutes[role][0];
  }
};

export const isLoggedIn = () => {
  const user = getUser();

  return !!user.email;
};
