import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";
import api from "../api/axios";
import { clearTokens, getAccess, setTokens } from "../utils/auth";

const AuthContext = createContext(null);
const WRITE_ROLES = ["admin", "teacher"];

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  // true only while we verify an existing token on page load
  const [initializing, setInitializing] = useState(Boolean(getAccess()));

  useEffect(() => {
    if (!getAccess()) return;
    let cancelled = false;

    api
      .get("/auth/me/")
      .then((res) => {
        if (!cancelled) setUser(res.data);
      })
      .catch(() => {})
      .finally(() => {
        if (!cancelled) setInitializing(false);
      });

    return () => {
      cancelled = true;
    };
  }, []);

  // fired by the axios interceptor when the session can't be renewed
  useEffect(() => {
    const onLogout = () => setUser(null);
    window.addEventListener("auth:logout", onLogout);
    return () => window.removeEventListener("auth:logout", onLogout);
  }, []);

  const login = useCallback(async (username, password) => {
    const res = await api.post("/auth/login/", { username, password });
    setTokens({ access: res.data.access, refresh: res.data.refresh });
    setUser(res.data.user);
    return res.data.user;
  }, []);

  const logout = useCallback(() => {
    clearTokens();
    setUser(null);
  }, []);

  const value = useMemo(
    () => ({
      user,
      initializing,
      login,
      logout,
      canWrite: !!user && WRITE_ROLES.includes(user.role),
    }),
    [user, initializing, login, logout]
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export const useAuth = () => useContext(AuthContext);