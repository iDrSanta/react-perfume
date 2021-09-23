import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import axios from 'axios';

import Header from './components/Header';
import MainPage from './pages/MainPage';
import CartPage from './pages/CartPage';
import FavoritesPage from './pages/FavoritesPage';
import { setProducts, setAllProducts } from './redux/actions/products';

function App() {
  const dispatch = useDispatch();

  React.useEffect(() => {
    axios.get(`http://localhost:3000/data.json`).then(({ data }) => {
      dispatch(setProducts(data));
      dispatch(setAllProducts());
    });
  }, [dispatch]);

  return (
    <Router>
      <div className="App clear container">
        <Header />
        <Route exact path="/" component={MainPage} />
        <Route path="/cart" component={CartPage} />
        <Route path="/favorites" component={FavoritesPage} />
      </div>
    </Router>
  );
}

export default App;
