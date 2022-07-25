import { GET_FOOD_AREA } from "../const/action-types";

const DishArea = (state = [], action) => {
    if (action.type === GET_FOOD_AREA) {
      state = action.data;
    }
  
    return state;
  };
  
  export default DishArea;
  