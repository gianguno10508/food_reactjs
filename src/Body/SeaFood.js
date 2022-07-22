import { useEffect, useState } from 'react';
import Data from '../api/GetData';
import '../styles/seafood_styles.css';

function SeaFood() {
    const [dishes, setDishes] = useState([]);
    useEffect(() => {
      const fetchDataSeaFood = async () => {
        try {
          const responseDataFood = await Data.getAll(
            "https://www.themealdb.com/api/json/v1/1/filter.php?c=SeaFood"
          );
          setDishes(responseDataFood.meals);
        } catch (error) {
          console.log(error);
        }
      };
      fetchDataSeaFood();
    }, []);
    return (
      <div className="all-food">
        <div className='container'>
          <div className="sea-food">
            <h2>Sea Food</h2>
            <div className='row'>
              {dishes.map((d, index) => (
                <div
                  className='col col-md-4'
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
            </div>
          </div>
        </div>
      </div>
    );
}
  
export default SeaFood;