import { createContext, useContext, useState, useEffect, useMemo } from 'react';
import { 
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged
} from 'firebase/auth';
import { auth } from '../firebase';

const AuthContext = createContext();

// Custom hook to use Auth context
export function useAuth() {
  return useContext(AuthContext);
}

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  // Listen for authentication changes
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });

    return unsubscribe; // Cleanup on unmount
  }, []);

  // Sign up function with error handling
  const signup = async (email, password) => {
    try {
      return await createUserWithEmailAndPassword(auth, email, password);
    } catch (error) {
      console.error('Signup error:', error);
      throw error; // Rethrow for UI to handle
    }
  };

  // Login function with error handling
  const login = async (email, password) => {
    try {
      return await signInWithEmailAndPassword(auth, email, password);
    } catch (error) {
      console.error('Login error:', error);
      throw error;
    }
  };

  // Logout function with error handling
  const logout = async () => {
    try {
      await signOut(auth);
      setUser(null);
    } catch (error) {
      console.error('Logout error:', error);
      throw error;
    }
  };

  // Memoized value to avoid unnecessary re-renders
  const value = useMemo(() => ({ user, signup, login, logout }), [user]);

  return (
    <AuthContext.Provider value={value}>
      {!loading ? children : <p className="text-center mt-10">Loading...</p>}
    </AuthContext.Provider>
  );
}
