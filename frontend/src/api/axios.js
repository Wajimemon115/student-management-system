import axios from "axios";
import { clearTokens, getAccess, getRefresh, setTokens } from "../utils/auth";

const baseURL = import.meta.env.VITE_API_URL;
const api = axios.create({
  baseURL,
  timeout: 60000, // free hosting can take ~1 minute to wake up
});

api.interceptors.request.use((config) => {
  const token = getAccess();
  if (token) config.headers.Authorization = `Bearer ${token}`;
  return config;
});

// One shared refresh call, so parallel 401s don't refresh several times
let refreshing = null;

function refreshAccessToken() {
  if (!refreshing) {
    refreshing = axios
      .post(`${baseURL}/auth/refresh/`, { refresh: getRefresh() })
      .then((res) => {
        setTokens({ access: res.data.access, refresh: res.data.refresh });
        return res.data.access;
      })
      .finally(() => {
        refreshing = null;
      });
  }
  return refreshing;
}

const forceLogout = () => {
  clearTokens();
  window.dispatchEvent(new Event("auth:logout"));
};

api.interceptors.response.use(
  (res) => res,
  async (error) => {
    const original = error.config;
    const status = error.response?.status;
    const isLoginOrRefresh = ["/auth/login/", "/auth/refresh/"].some((p) =>
      original?.url?.includes(p)
    );

    if (status === 401 && original && !isLoginOrRefresh) {
      if (!original._retry && getRefresh()) {
        original._retry = true;
        try {
          const access = await refreshAccessToken();
          original.headers.Authorization = `Bearer ${access}`;
          return api(original);
        } catch {
          forceLogout();
        }
      } else {
        forceLogout();
      }
    }
    return Promise.reject(error);
  }
);

export default api;