import { useState } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { useToast } from "../context/ToastContext";
import FormInput from "../components/FormInput";
import Button from "../components/Button";

export default function Login() {
  const { user, initializing, login } = useAuth();
  const notify = useToast();
  const location = useLocation();

  const [form, setForm] = useState({ username: "", password: "" });
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const from = location.state?.from || "/";

  if (initializing) return <div className="splash">Loading...</div>;
  if (user) return <Navigate to={from} replace />;

  const handleChange = (e) => {
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));
    setError("");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!form.username.trim() || !form.password) {
      setError("Enter your username and password");
      return;
    }

    setLoading(true);
    setError("");
    try {
      const loggedIn = await login(form.username.trim(), form.password);
      notify(`Welcome back, ${loggedIn.full_name}`);
      // the redirect happens automatically because `user` is now set
    } catch (err) {
      setError(
        err.response?.status === 401
          ? "Incorrect username or password"
          : "Could not reach the server. If it was idle it may take up to a minute to wake up, so please try again."      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="login-page">
      <div className="login-card">
        <div className="login-brand">
          <div className="brand-logo">S</div>
          <div>
            <div className="login-title">StudentHub</div>
            <div className="login-sub">Management System</div>
          </div>
        </div>

        <h2 className="login-heading">Sign in</h2>
        <p className="login-hint">Enter your account details to continue.</p>

        {error && <div className="login-error">{error}</div>}

        <form onSubmit={handleSubmit} noValidate>
          <FormInput
            label="Username"
            name="username"
            value={form.username}
            onChange={handleChange}
            autoComplete="username"
            autoFocus
          />
          <FormInput
            label="Password"
            name="password"
            type="password"
            value={form.password}
            onChange={handleChange}
            autoComplete="current-password"
          />
          <Button type="submit" disabled={loading} style={{ width: "100%", padding: 13 }}>
            {loading ? "Signing in..." : "Sign in"}
          </Button>
        </form>
      </div>
    </div>
  );
}