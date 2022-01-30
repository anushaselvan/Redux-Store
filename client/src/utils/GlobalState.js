import React, {  useContext } from "react ";
import { Provider } from 'react-redux';
import Redux from "redux";
import { useProductReducer } from './reducers'
import reducer  from './reducers'


//const StoreContext = createContext();
//const { Provider } = StoreContext;
const store = Redux.createStore(reducer);

const StoreProvider = ({ value = [], ...props }) => {
  const [state, dispatch] = useProductReducer({
    products: [],
    cart: [],
    cartOpen: false,
    categories: [],
    currentCategory: '',
  });

  return <Provider value={[state, dispatch]} {...props} />;
};

const useStoreContext = () => {
  return useContext(StoreContext);
};

export { StoreProvider, useStoreContext };
