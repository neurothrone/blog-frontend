import { useEffect, useState } from "react";
import { getAuth, onAuthStateChanged, User } from "firebase/auth";

const useUser = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    // Unsubscribe from auth state changes
    return onAuthStateChanged(getAuth(), (user) => {
      setUser(user);
      setIsLoading(false);
    });
  }, []);

  return { isLoading, user };
}

export default useUser;
