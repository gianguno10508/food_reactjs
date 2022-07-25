import Slider from 'react-slick';
import { actSelectDishArea, actSelectDishCategory } from '../../actions';
import Data from '../../api/GetData';
import '../../styles/starter_style.css';
import { connect } from "react-redux";
import { useEffect, useState } from 'react';

function Area(props) {
        const [dishes, setDishes] = useState([]);
        const settings = {
          dots: false,
          infinite: true,
          speed: 500,
          slidesToShow: 3,
          slidesToScroll: 1,
          arrows: true,
          autoplay: true,
          autoplaySpeed: 3000,
      };
        useEffect(() => {
            const fetchDataStarter = async () => {
              try {
                const responseDataFood = await Data.getAll(
                  "https://www.themealdb.com/api/json/v1/1/filter.php?a=" + props.select_area
                );
                setDishes(responseDataFood.meals);
              } catch (error) {
                console.log(error);
              }
            };
            fetchDataStarter();
        }, [props.select_area]);
        return (
            <div>
                {(Array.isArray(dishes) && dishes != "") ? 
                        <div className="all-food">
                        <div className='container'>
                            <div className='starter'>
                            <h2>{Array.isArray(dishes) && dishes != "" ? props.select_area : props.select_area}</h2>
                            <div className='row-starter'>
                              <Slider {...settings}>
                                {dishes.map((d, index) => (
                                  <div
                                    className='col-starter'
                                    key={d.idMeal}
                                  >
                                    <div className="content pt-4">
                                      <h4>{d.strMeal}</h4>
                                    </div>
                                    <div className="icon">
                                      <img src={d.strMealThumb}/>
                                    </div>
                                  </div>
                                ))}
                              </Slider>
                            </div>
                          </div>
                        </div>
                      </div> : ""
                }
            </div>
        );
}
const mapDispatchToProps = (dispatch) => {
    return {
      chooseDishCategory: (data) => {
        dispatch(actSelectDishCategory(data));
      },
      chooseDishArea: (data) => {
        dispatch(actSelectDishArea(data));
      }
    };
};
const mapStateToProps = (state, ownProps) => {
  return {
    select_category: state.dish_cate,
    select_area: state.dish_area
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Area);