import { GET_FOOD_AREA, GET_FOOD_CATEGORY, GET_FOOD_SEARCH } from "../const/action-types";

export const actSelectDishCategory = (data) => {
  return {
    type: GET_FOOD_CATEGORY,
    data,
  };
};
export const actSelectDishArea = (data) => {
    return {
      type: GET_FOOD_AREA,
      data,
    };
};
export const actSearchDish = (data) => {
  return {
    type: GET_FOOD_SEARCH,
    data,
  };
};