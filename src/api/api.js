import axios from "axios";

const instance = axios.create({
  baseURL: "https://social-network.samuraijs.com/api/1.0/",
  withCredentials: true,
  headers: {
    "API-KEY": "01df2e06-cfbf-4d1a-ad3e-efea01d64a4f",
  },
});

export const API = {
  UsersAPI: {
    getUsers(currentPage, pageSize) {
      return instance
        .get(`users?page=${currentPage}&count=${pageSize}`)
        .then((response) => response.data);
    },
    createFollow(id) {
      return instance
        .post(`follow/${id}`, {})
        .then((response) => response.data);
    },
    deleteFollow(id) {
      return instance.delete(`follow/${id}`).then((response) => response.data);
    },
  },

  AuthAPI: {
    getMe() {
      return instance.get("auth/me");
    },
    loginMe(email, password, rememberMe = false) {
      return instance.post("auth/login", { email, password, rememberMe });
    },
    logoutMe() {
      return instance.delete("auth/login");
    },
  },

  ProfileAPI: {
    getProfile(userId) {
      return instance
        .get(`profile/${userId}`)
        .then((response) => response.data);
    },
    getStatus(userId) {
      return instance
        .get(`profile/status/${userId}`)
        .then((response) => response.data);
    },
    updateStatus(status) {
      return instance
        .put(`profile/status`, { status })
        .then((response) => response.data);
    },
    savePhoto(file) {
      let formData = new FormData();
      formData.append("image", file);
      return instance
        .put(`profile/photo`, formData)
        .then((response) => response.data);
    },
  },
};
