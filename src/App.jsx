import './App.css'
import { BrowserRouter as Router, Routes, Route } from "react-router";
import PageWrapper from './layout/PageWrapper';
import Home from './pages/Home';
import Products from './pages/Products';
import ProductDetails from './pages/ProductDetails';
import NotFound from './pages/NotFound';

function App() {

  return (
    <>
      <Router>
        <PageWrapper>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/products" element={<Products />} />
            <Route path="/products/:id" element={<ProductDetails />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </PageWrapper>
      </Router>

    </>
  )
}

export default App
