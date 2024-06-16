import RestaurantCard from "./RestaurantCard";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";

const Body = () => {
  const [listOfRestaurants, setListOfRestaurants] = useState([]);
  const [filteredRestaurant, setFilteredRestaurant] = useState([]);
  const [searchText, setSearchText] = useState("");

  // whenever state variables update, react triggers a reconciliation cycle(re-renders the component)
  useEffect(() => {
    fetchData();
  }, []);

  // use .then(), try catch blocks
  // It will resolve promise
  const fetchData = async () => {
    // const data = await fetch(
    //   'https://www.swiggy.com/mapi/homepage/getCards?lat=14.44840&lng=79.98880'
    // );

    //adding new API wrt restaurant cards...
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=14.44840&lng=79.98880&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    // console.log(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
    setListOfRestaurants(
      // Optional Chaining
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants
    );
    setFilteredRestaurant(
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants
    );
  };

  // Conditional Rendering
  /* if (listOfRestaurants.length === 0) {
    return <Shimmer />;
  } */

  // return listOfRestaurants.length === 0 ? (
  //   <Shimmer />
  // ) :  
  return (
    <div className="body">
      <div className="filter">
        <div className="search">
          <input
            type="text"
            className="search-box"
            value={searchText}
            onChange={(e) => {
            setSearchText(e.target.value);
            }}
          />
          <button
            onClick={() => {
              /*const filteredRestaurant = listOfRestaurants.filter(
                (res) => res.data.name === searchText
              );*/
              const filteredRestaurant = listOfRestaurants.filter((res) =>
                res.info.name.toLowerCase().includes(searchText.toLowerCase())
              );

              // setListOfRestaurants(filteredRestaurant);
              setFilteredRestaurant(filteredRestaurant);
            }}
          >
            Search
          </button>
        </div>
        <button
          className="filter-btn"
          onClick={() => {
            const filteredList = listOfRestaurants.filter(
              (res) => res.info.avgRating >= 4
            );
            // console.log(filteredList)
            setFilteredRestaurant(filteredList);
          }}
        >
          Top Rated Restaurants
        </button>
      </div>
      <div className="res-container">
        {/*{listOfRestaurants.map((restaurant) => (
          <RestaurantCard key={restaurant.info.id} resData={restaurant} />
        ))} */}
        {filteredRestaurant.map((restaurant) => (
          <RestaurantCard key={restaurant.info.id} resData={restaurant} />
        ))}
      </div>
    </div>
  );
};

export default Body;
