import { GET_FOOD_AREA, GET_FOOD_CATEGORY } from "../const/action-types";

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
