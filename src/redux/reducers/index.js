import { combineReducers } from "redux";
import { productReducer, selectedProductReducer} from "./productReducer";

const reducers = combineReducers({
    allProdacts : productReducer,
    product : selectedProductReducer,
})

export default reducers;