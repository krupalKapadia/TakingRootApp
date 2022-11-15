import React , {useState, useEffect} from 'react';
import { useParams} from 'react-router-dom';
import axios from 'axios';

const SingleProductPage = () => { 
  const {productId} = useParams();
  const [sp ,setSp] = useState([]);

  useEffect(() => {
    const p = async() => {
      const s = await axios.get(`https://dummyjson.com/products?id=${productId}`)
      setSp(s.data.products[productId-1])
    }
    p();
  }, [productId])
   
  return (
    <div>
      <p>This is the product details page</p>
      <p>Fetched Id: {sp.id}</p>
      <p>Title: {sp.title}</p>
      <p>Rating: {sp.rating}</p>
      <p>Product Details Page Ends here</p>
    </div>
  )
}
export default SingleProductPage;

