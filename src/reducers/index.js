import { combineReducers } from "redux";
import DishArea from "./DishArea";
import DishCategory from "./DishCategory";
import DishSearch from "./DishSearch";

export default combineReducers({
  dish_cate: DishCategory,
  dish_area: DishArea,
  dish_search: DishSearch
});
