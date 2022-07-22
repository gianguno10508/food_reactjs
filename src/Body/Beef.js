import { useEffect, useState } from 'react';
import Slider from 'react-slick';
import Data from '../api/GetData';
import '../styles/beef_styles.css';


function Beef() {
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
    const [dishes, setDishes] = useState([]);
    useEffect(() => {
      const fetchDataBeef = async () => {
        try {
          const responseDataFood = await Data.getAll(
            "https://www.themealdb.com/api/json/v1/1/filter.php?c=Beef"
          );
          setDishes(responseDataFood.meals);
        } catch (error) {
          console.log(error);
        }
      };
      fetchDataBeef();
    }, []);
    return (
    <div className="all-food">
        <div className='container'>
          <div className="beef">
            <h2>Beef</h2>
            <div className='row-beef'>
              <Slider {...settings}>
              {dishes.map((d, index) => (
                <div
                  className='col-beef'
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
      </div>
    );
}
  
export default Beef;