import { ActionType } from "../contants/action-types"

export const setProducts = (products) => {
  return {
    type : ActionType.SET_PRODUCTS, // type ini akan dipanggil oleh reducer dengan membawa state(products) yg dikirim dari ProductListing.js
    payload : products,
    }
}

export const selectedProduct = (product) => {
    return {
      type : ActionType.SELECTED_PRODUCT,
      payload : product,
      }
  }

export const removeSelectedProduct = (product) => {
    return {
      type : ActionType.REMOVE_SELECTED_PRODUCT,
      }
  }

// Kemudian menuju reducer