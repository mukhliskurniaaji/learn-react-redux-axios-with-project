import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './containers/Header';
import ProductcDetail from './containers/ProductDetail';
import ProductListing from './containers/ProductListing';


function App() {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" exact element={<ProductListing />} />
          <Route path="/product/:productId" exact element={<ProductcDetail />} />
          <Route>404 Not Found</Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
