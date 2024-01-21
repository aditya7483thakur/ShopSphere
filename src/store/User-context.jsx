import { createContext, useState } from "react";

export const UserContext = createContext({
  isAuthenticated: false,
  setIsAuthenticated: () => {},
});

const UserWrapper = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState({});
  const [payment, setPayment] = useState(false);

  return (
    <UserContext.Provider
      value={{
        isAuthenticated,
        setIsAuthenticated,
        setUser,
        user,
        payment,
        setPayment,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export default UserWrapper;
