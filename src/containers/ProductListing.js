import axios from 'axios';
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import ProductComponent from './ProductComponent';
import { setProducts } from '../redux/actions/productActions';

const ProductListing = () => {
  const products = useSelector((state) => state); //memanggil product dari store recucer
  const dispacth = useDispatch();

  const fetchProducts = async () => {
    const response = await axios
      .get('https://fakestoreapi.com/products')
      .catch((err) => {
        console.log("Err", err);
      });
      dispacth(setProducts(response.data)); //mendispacth isi state yng telah ditangkap dari API ke actions (setProducts)
  }

  useEffect(() => {
    fetchProducts();
  }, []);
  
  return (
    <div className='ui grid container'>
        <ProductComponent />
    </div>
  )
}

export default ProductListing;