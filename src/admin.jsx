import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
// import "./Admin.css";

const API_URL = import.meta.env.VITE_API_URL;

function Admin() {
  const navigate = useNavigate();

  const [password, setPassword] = useState("");
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const [contacts, setContacts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [loginLoading, setLoginLoading] = useState(false);

  const [error, setError] = useState("");

  useEffect(() => {
    const token = localStorage.getItem("adminToken");

    if (token) {
      setIsAuthenticated(true);
      fetchContacts(token);
    }
  }, []);

  const handleLogin = async (e) => {
    e.preventDefault();

    setError("");
    setLoginLoading(true);

    try {
      const response = await fetch(`${API_URL}/admin/login`, {
        method: "POST",

        headers: {
          "Content-Type": "application/json",
        },

        body: JSON.stringify({
          password,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Login failed.");
      }

      localStorage.setItem("adminToken", data.token);

      setIsAuthenticated(true);
      setPassword("");

      fetchContacts(data.token);
    } catch (error) {
      setError(error.message);
    } finally {
      setLoginLoading(false);
    }
  };

  const fetchContacts = async (token) => {
    setLoading(true);

    try {
      const response = await fetch(`${API_URL}/admin/contacts`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      const data = await response.json();

      if (response.status === 401) {
        handleLogout();
        return;
      }

      if (!response.ok) {
        throw new Error(data.message || "Failed to load contacts.");
      }

      setContacts(data.contacts);
    } catch (error) {
      console.error(error);
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (id) => {
    const confirmed = window.confirm(
      "Are you sure you want to delete this message?",
    );

    if (!confirmed) return;

    const token = localStorage.getItem("adminToken");

    try {
      const response = await fetch(`${API_URL}/admin/contacts/${id}`, {
        method: "DELETE",

        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      const data = await response.json();

      if (response.status === 401) {
        handleLogout();
        return;
      }

      if (!response.ok) {
        throw new Error(data.message || "Failed to delete message.");
      }

      setContacts((previous) =>
        previous.filter((contact) => contact._id !== id),
      );
    } catch (error) {
      alert(error.message);
    }
  };

  const handleLogout = () => {
    localStorage.removeItem("adminToken");

    setIsAuthenticated(false);
    setContacts([]);
  };

  // =========================
  // LOGIN SCREEN
  // =========================

  if (!isAuthenticated) {
    return (
      <div className="adm-page">
        <div className="adm-login-card">
          <div className="adm-logo">
            <span></span>
            DanjiTech
          </div>

          <div className="adm-login-heading">
            <span className="adm-label">ADMIN PORTAL</span>

            <h1>Welcome back.</h1>

            <p>Enter your administrator password to access your dashboard.</p>
          </div>

          <form onSubmit={handleLogin}>
            <label>Password</label>

            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter your password"
              required
            />

            {error && <div className="adm-error">{error}</div>}

            <button
              type="submit"
              className="adm-login-button"
              disabled={loginLoading}
            >
              {loginLoading ? (
                "Signing in..."
              ) : (
                <>
                  Sign in
                  <span>→</span>
                </>
              )}
            </button>
          </form>

          <button className="adm-back" onClick={() => navigate("/")}>
            ← Back to website
          </button>
        </div>
      </div>
    );
  }

  // =========================
  // ADMIN DASHBOARD
  // =========================

  return (
    <div className="adm-dashboard">
      <header className="adm-header">
        <div className="adm-brand">
          <span></span>
          DanjiTech
        </div>

        <div className="adm-header-right">
          <div className="adm-status">
            <span></span>
            Admin
          </div>

          <button className="adm-logout" onClick={handleLogout}>
            Logout
          </button>
        </div>
      </header>

      <main className="adm-main">
        <div className="adm-title-row">
          <div>
            <span className="adm-label">DASHBOARD</span>

            <h1>Customer Messages</h1>

            <p>View and manage inquiries submitted through your website.</p>
          </div>

          <div className="adm-stat">
            <span>{contacts.length}</span>
            <small>{contacts.length === 1 ? "Message" : "Messages"}</small>
          </div>
        </div>

        <section className="adm-table-card">
          <div className="adm-table-header">
            <h2>Recent inquiries</h2>

            <button
              className="adm-refresh"
              onClick={() => fetchContacts(localStorage.getItem("adminToken"))}
            >
              ↻ Refresh
            </button>
          </div>

          {loading ? (
            <div className="adm-empty">
              <div className="adm-loader"></div>
              <p>Loading messages...</p>
            </div>
          ) : contacts.length === 0 ? (
            <div className="adm-empty">
              <div className="adm-empty-icon">○</div>

              <h3>No messages yet</h3>

              <p>Customer inquiries will appear here.</p>
            </div>
          ) : (
            <div className="adm-table-wrapper">
              <table className="adm-table">
                <thead>
                  <tr>
                    <th>Customer</th>
                    <th>Contact</th>
                    <th>Service</th>
                    <th>Budget</th>
                    <th>Message</th>
                    <th>Date</th>
                    <th></th>
                  </tr>
                </thead>

                <tbody>
                  {contacts.map((contact) => (
                    <tr key={contact._id}>
                      <td>
                        <div className="adm-customer">
                          <div className="adm-avatar">
                            {contact.name?.charAt(0)?.toUpperCase()}
                          </div>

                          <div>
                            <strong>{contact.name}</strong>

                            <small>{contact.company || "Individual"}</small>
                          </div>
                        </div>
                      </td>

                      <td>
                        <div className="adm-contact">
                          <span>{contact.email}</span>

                          {contact.phone && <small>{contact.phone}</small>}
                        </div>
                      </td>

                      <td>
                        <span className="adm-service">{contact.service}</span>
                      </td>

                      <td>{contact.budget || "—"}</td>

                      <td>
                        <div className="adm-message-wrapper">
                          <div className="adm-message">{contact.message}</div>

                          <div className="adm-message-tooltip">
                            {contact.message}
                          </div>
                        </div>
                      </td>

                      <td>
                        <span className="adm-date">
                          {contact.createdAt
                            ? new Date(contact.createdAt).toLocaleDateString()
                            : "—"}
                        </span>
                      </td>

                      <td>
                        <button
                          className="adm-delete"
                          onClick={() => handleDelete(contact._id)}
                        >
                          Delete
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </section>
      </main>
    </div>
  );
}

export default Admin;
