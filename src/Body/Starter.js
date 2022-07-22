import { useEffect, useState } from 'react';
import Slider from 'react-slick';
import Data from '../api/GetData';
import '../styles/starter_style.css';

function Starter() {
    const [dishSelected, setDishSelected] = useState(-1);
    const [dishes, setDishes] = useState([]);
    const [value, setValue] = useState("chicken");
    const handleItemClick = (event, index) => {
      setDishSelected(index);
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
              "https://www.themealdb.com/api/json/v1/1/search.php?s=" + value
            );
            setDishes(responseDataFood.meals);
            console.log(responseDataFood.meals);
          } catch (error) {
            console.log(error);
          }
        };
        fetchDataStarter();
      }, [value]);
    return (
      <div className="all-food">
          <div className='searchBox'>
            <input type="text" placeholder="Tell me what food do you want?" onKeyPress={(event) => {
              if (event.key === "Enter") {
                setValue(event.target.value);
              }
            }} />
          </div>
        <div className='container'>
            <div className='starter'>
            <h2>{Array.isArray(dishes) && dishes != "" ? dishes[0].strCategory: value}</h2>
            <div className='row-starter'>
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
            </div>
            {dishSelected != -1 ?
              <div className='detail'>
                <h2>{dishes[dishSelected].strMeal}</h2> 
                <div className='row'>
                    <div className='col col-md-6'><img src={dishes[dishSelected].strMealThumb} /></div>
                    <div className='col col-md-6'>
                      <div className='cate'>
                        <h3>Category</h3>
                        <a href='test'>{dishes[dishSelected].strCategory}</a>
                      </div>
                      <div className='area'>
                        <h3>Area</h3>
                        <a href='test'>{dishes[dishSelected].strArea}</a>
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
      </div>
    );
}
  
export default Starter;