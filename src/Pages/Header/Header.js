import { useEffect, useState } from "react";
import { Link } from "react-router-dom"
import Data from "../../api/GetData";
import '../../styles/header_styles.css';
import Select from "./Select";
import { connect } from "react-redux";

function Header(props) {
    const [listMeal, setListMeal] = useState([]);
    const [categorySelected, setCategorySelected] = useState("Breakfast");
    useEffect(() => {
      const fetchDataList = async () => {
        try {
          const responseDataList = await Data.getAll(
            "https://www.themealdb.com/api/json/v1/1/list.php?c=list"
          );
          setListMeal(responseDataList.meals);
        } catch (error) {
          console.log(error);
        }
      };
      fetchDataList();
    }, []);
    const handleItemClick = (event, index) => {
        setCategorySelected(listMeal[index].strCategory);
    };
    return (
        <div className="content">
            <div className="header">
                <div className='menu'>
                    <nav className="navbar navbar-expand-lg">
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav mr-auto">
                                <li className="nav-item active">
                                    <Link className="nav-link" to="/">Home</Link>
                                </li>
                                <li className="nav-item dropdown">
                                    <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    Categories
                                    </a>
                                    <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                                        {listMeal.map((d, index) => (
                                            <Link className="dropdown-item" onClick={(event) => handleItemClick(event, index)} key={index} to="/">{d.strCategory}</Link>
                                        ))}
                                    </div>
                                </li>
                                <li className="nav-item logo-page">
                                    <Link className="nav-link" to="/">BambooFood</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/">Contact</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/">About</Link>
                                </li>
                                <li className="nav-item">
                                </li>
                            </ul>
                            <div className='searchBox'>
                                <input type="text" placeholder="Tell me what food do you want?" onKeyPress={(event) => {
                                    if (event.key === "Enter") {
                                        setCategorySelected(event.target.value);
                                    }
                                }} />
                            </div>                            
                        </div>
                    </nav>    
                </div>
                <div className='textBanner'>
                    <h2>Delicious</h2>
                    <h2>Healthy</h2>
                    <h3>Clean and Fresh</h3>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                    <button><a href='test'>Feature Food</a></button>
                </div>
            </div>
            <div className="main-search">
                <Select dataFromSelect={categorySelected} />
            </div>
        </div>
    );
}
const mapStateToProps = (state, ownProps) => {
    return {
        select_category: state.dish_cate,
        select_area: state.dish_area
    };
};
  
export default connect(mapStateToProps)(Header);  