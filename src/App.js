import React from 'react';
import './App.css';
import ProductList from './Components/ProductList';
import ProductCard from './Components/ProductCard';
import { BrowserRouter ,Routes,  Route } from "react-router-dom";
import SingleProductPage from './Components/SingleProductPage';

function App() {

return (
  
       <div>
       <BrowserRouter>
       <Routes>
       <Route index element={<ProductList />} />
       <Route path="/product" element={<ProductCard />} />
       <Route path="/singleproductpage/:productId" element={<SingleProductPage />} /> 
       </Routes> 
       <ProductList />
      </BrowserRouter> 
        
     </div>
  );

};

export default App;