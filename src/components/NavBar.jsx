import { Link } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext"; 
import { useState } from "react";

export default function NavBar() {
  const { user, logout } = useAuth();
  const [loading, setLoading] = useState(false);

  async function handleLogout() {
    try {
      setLoading(true);
      await logout();
    } catch (error) {
      console.error("Failed to log out:", error);
    } finally {
      setLoading(false);
    }
  }

  return (
    <nav className="bg-cyan-500 text-white py-4 shadow-md">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-4 sm:px-6 lg:px-8">
        <Link to="/" className="text-2xl font-bold">
          Agenda App
        </Link>
        <div>
          {user ? (
            <>
              <span className="mr-4">{user.email}</span>
              <button
                onClick={handleLogout}
                disabled={loading}
                className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-md text-sm font-medium"
              >
                {loading ? "Logging out..." : "Log out"}
              </button>
            </>
          ) : null}
        </div>
      </div>
    </nav>
  );
}
