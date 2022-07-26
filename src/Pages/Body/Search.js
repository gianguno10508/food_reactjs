import Slider from 'react-slick';
import { actSelectDishArea, actSelectDishCategory } from '../../actions';
import Data from '../../api/GetData';
import '../../styles/starter_style.css';
import { connect } from "react-redux";
import { useEffect, useState } from 'react';

function Search(props) {
        const [dishes, setDishes] = useState([]);
        const [dishSelected, setDishSelected] = useState(-1);
        const handleItemClick = (event, index) => {
          setDishSelected(index);
        };
        const handleItemClickCategory = (event) => {
          props.chooseDishCategory(event.target.innerText);
        };
        const handleItemClickArea = (e) => {
          props.chooseDishArea(e.target.innerText);
        };
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
                  "https://www.themealdb.com/api/json/v1/1/search.php?s=" + props.search_data
                );
                setDishes(responseDataFood.meals);
              } catch (error) {
                console.log(error);
              }
            };
            fetchDataStarter();
        }, [props.search_data]);
        return (
            <div>
                {(Array.isArray(dishes) && dishes != "") ? 
                    <div className="all-food">
                        <div className='container'>
                            <div className='starter'>
                            <h2>{Array.isArray(dishes) && dishes !== "" ? 
                                dishes[0].strCategory !== undefined ? 
                                    dishes[0].strCategory
                                    : props.search_data
                                : props.search_data}</h2>
                            <div className='row-starter'>
                            {Array.isArray(dishes) && dishes != "" ? 
                                <Slider {...settings}>
                                  {dishes.map((d, index) => (
                                    <div
                                      className='col-starter'
                                      onClick={(event) => handleItemClick(event, index)}
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
                              : ""}
                            </div>
                            {dishSelected != -1 ?
                              <div className='detail'>
                                <h2>{dishes[dishSelected].strMeal}</h2> 
                                <div className='row'>
                                    <div className='col col-md-6'><img src={dishes[dishSelected].strMealThumb} /></div>
                                    <div className='col col-md-6'>
                                      <div className='cate'>
                                        <h3>Category</h3>
                                          <div
                                            onClick={(event) => handleItemClickCategory(event)}
                                          >
                                            {dishes[dishSelected].strCategory}
                                          </div>
                                      </div>
                                      <div className='area'>
                                        <h3>Area</h3>
                                        <div
                                          onClick={(event) => handleItemClickArea(event)}
                                        >
                                          {dishes[dishSelected].strArea}
                                        </div>
                                      </div>
                                      <div className='intro'>
                                        <h3>Introduce</h3>
                                        <p>{dishes[dishSelected].strInstructions}</p>
                                      </div>
                                    </div>
                                </div>
                              </div>
                              : ""
                            }
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
        select_area: state.dish_area,
        search_data: state.dish_search
    };
};
export default connect(mapStateToProps, mapDispatchToProps)(Search);