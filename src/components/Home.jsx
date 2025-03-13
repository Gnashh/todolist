import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-red-200 to-orange-200">
      <h1 className="text-4xl font-bold text-neutral-800 mb-6">Welcome to the Agenda App</h1>
      <p className="text-lg text-neutral-900 mb-8">Organize your tasks efficiently.</p>
      
      <div className="flex space-x-4">
        <Link
          to="/login"
          className="px-6 py-3 bg-orange-400 text-white rounded-lg shadow-md hover:bg-orange-600 transition"
        >
          Log In
        </Link>
        <Link
          to="/signup"
          className="px-6 py-3 bg-red-400 text-white rounded-lg shadow-md hover:bg-red-600 transition"
        >
          Sign Up
        </Link>
      </div>
    </div>
  );
}
