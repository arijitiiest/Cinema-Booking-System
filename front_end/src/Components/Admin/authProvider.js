export const authprovider = {
  login: ({ username, password }) => {
    const formData = new URLSearchParams();
    formData.append("username", username);
    formData.append("password", password);
    const request = new Request("http://localhost:5000/auth/admin-login", {
      method: "POST",
      body: formData,
      headers: new Headers({
        "Content-Type": "application/x-www-form-urlencoded",
      }),
    });
    return fetch(request)
      .then((response) => {
        console.log(response);
        if (response.status >= 300) {
          throw new Error(response.statusText);
        }
        return response.json();
      })
      .then((auth) => {
        console.log(auth);
        localStorage.setItem("auth", JSON.stringify(auth));
      });
  },
  getIdentity: () => {
    const { username } = JSON.parse(localStorage.getItem("auth"));
    return { id: 1, fullName: username, avatar: "/media/me.jpg" };
  },
  logout: () => {
    localStorage.removeItem("auth");
    return Promise.resolve();
  },
  checkError: (error) => {
    const status = error.status;
    if (status === 401 || status === 403) {
      localStorage.removeItem("auth");
      return Promise.reject();
    }
    return Promise.resolve();
  },
  checkAuth: () =>
    localStorage.getItem("auth") ? Promise.resolve() : Promise.reject(),
  getPermissions: (params) => Promise.resolve(),
};
