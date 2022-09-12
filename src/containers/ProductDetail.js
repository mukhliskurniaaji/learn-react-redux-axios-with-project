import axios from 'axios';
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { selectedProduct, removeSelectedProduct } from '../redux/actions/productActions';

const ProductcDetail = () => {
  const {productId} =useParams(); //productId didapat dari <Link> yg dikirim dari ProductComponent
  const dispacth = useDispatch();
  const product = useSelector((state) => state.product); //memanggil product dari store recucer (global)
  const {id, title, price, description, image, category, rating} = product;

  const fetchProductDetail = async() => {
    const response = await axios
      .get(`https://fakestoreapi.com/products/${productId}`)
      .catch((err)=>{
        console.log("Error", err);
      });
    dispacth(selectedProduct(response.data)); // mendispacth(mengirim) response.data ke Action selectedProduct
  };

  useEffect(()=>{
    if (productId && productId !== "") {
      fetchProductDetail();
    }
    return ()=> {
      dispacth(removeSelectedProduct()) // mendispacth(mengirim) perintah ke Action removeSelectedProduct
    }
  },[productId])

  return (
    <div className='ui grid container'>
        {Object.keys(product).length === 0 ? (
          <div>...Loading</div>
        ) : (
          <div className='ui placeholder segment'>
            <div className='ui two column stackable center aligned grid'>
              <div className='ui vertival dvider'>AND</div>
              <div className='muddle aligned row'>
                <div className='column lp'>
                  <img className='ui fluid image' src={image}/>
                </div>
                <div className='column rp'>
                  <h1>{title}</h1>
                  <h2>
                    <a className='ui teal tag table'>${price}</a>
                  </h2>
                  <h3 className='ui brown block header'>{category}</h3>
                  <p>{description}</p>
                  <div className='ui vertival animated button' tabIndex="0">
                    <div className='hidden content'>
                      <i className='shop icon'></i>
                    </div>
                    <div className='visble content'>Add to Card</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
    </div>
  )
}

export default ProductcDetail;