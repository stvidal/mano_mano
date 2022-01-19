import {
  createContext,
  useContext,
  useState,
  useEffect,
  useMemo,
} from 'react';

const AppContext = createContext(null);

const AppProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [total, setTotal] = useState(0);
  const [user, setUser] = useState(
    localStorage.getItem('user')
      ? JSON.parse(localStorage.getItem('user'))
      : null,
  );

  useEffect(() => {
    setTotal(() => {
      const array = cart.map((article) => article.quantity);
      const reducer = (a, b) => a + b;

      if (cart.length > 0) {
        return array.reduce(reducer);
      }
      return 0;
    });
  }, [cart]);

  useEffect(() => {
    if (user) {
      localStorage.setItem('user', JSON.stringify(user));
    } else {
      localStorage.removeItem('user');
    }
  }, [user]);

  const AppStates = useMemo(() => ({
    cart,
    setCart,
    total,
    setTotal,
    user,
    setUser,
  }), []);

  return (
    <AppContext.Provider value={AppStates}>
      { children }
    </AppContext.Provider>
  );
};

export const useApp = () => useContext(AppContext);

export default AppProvider;
