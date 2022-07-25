import { combineReducers } from "redux";
import DishArea from "./DishArea";
import DishCategory from "./DishCategory";

export default combineReducers({
  dish_cate: DishCategory,
  dish_area: DishArea,
});
