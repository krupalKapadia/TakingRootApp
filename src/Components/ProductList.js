import React , {useState, useEffect} from 'react';
import { Outlet , Link } from 'react-router-dom';
import { getProducts } from '../api/axios';
import SearchBar from './SearchBar';
import ProductCard from './ProductCard';

const ProductList = () => {

const [products, setProducts] = useState([]);
const [searchResults, setSearchResults] = useState([]);
  
    useEffect(() => {
       const fetchProducts = async () => {
          const products = await getProducts()
          setProducts(products)
          setSearchResults(products)
      };    
      fetchProducts()
  }, []);
  
    const results = searchResults.map(product => 
    <ProductCard key={product.id} product={product} />)
   
    const content = results?.length ? results :
     <article>
        <p>No Matching Products</p>
     </article>

    return ( 
        <div>
          <h2> Our Exclusive List </h2>
          <SearchBar products={products} setSearchResults={setSearchResults} />
           <main>{content}</main>  
        </div>
                 
    )
   
}
export default ProductList;