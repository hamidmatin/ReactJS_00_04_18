import { createContext, useReducer, useContext } from 'react';

import { rootReducer } from './rootReducer';

const initState = {
  test: 'Redux Test',
  cartList: [],
};

export const MyContext = createContext();

export const MyContextProider = ({ children }) => {
  const [myState, dispatch] = useReducer(rootReducer, initState);

  return <MyContext.Provider value={{ myState, dispatch }}>{children}</MyContext.Provider>;
};

export const useMyContext = () => useContext(MyContext);
