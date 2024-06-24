import { useState, useEffect } from 'react';
import Shimmer from './Shimmer';
import { useParams } from 'react-router-dom';
import useRestaurantMenu from '../utils/useRestaurantMenu';

const RestaurantMenu = () => {
  //const [resInfo, setResInfo] = useState(null);

  /*const params = useParams();
  console.log(params); // Object with resId */

  const { resId } = useParams();

  const resInfo = useRestaurantMenu(resId);

  /* useEffect(() => {
    fetchMenu();
  }, []);*/

  /*const fetchMenu = async () => {
    const data = await fetch(MENU_API + resId); // '&catalog_qa=undefined&submitAction=ENTER' -> Optional this is used for data to track
    /*const data = await fetch(
      'https://www.swiggy.com/mapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=14.4425987&lng=79.98645599999999&restaurantId=651018&submitAction=ENTER'
    );*/
  /* const json = await data.json();
    //console.log(json);
    setResInfo(json.data);
  }; */

  //if (resInfo.length === 0) return <Shimmer />;
  if (resInfo === null) return <Shimmer />;
  const { name, cuisines, costForTwoMessage } =
    resInfo?.cards[2]?.card?.card?.info;
  console.log(resInfo);

  const { itemCards } =
    resInfo?.cards[5]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card;

  return (
    <div className="menu">
      <h1>{name}</h1>
      <p>
        {cuisines.join(', ')} - {costForTwoMessage}
      </p>
      <h2>Menu</h2>
      <ul>
        {/*<li>{itemCards[0].card.info.name}</li>*/}
        {itemCards.map((item) => (
          <li key={item.card.info.id}>
            {item.card.info.name} -{' Rs '}
            {item.card.info.price / 100 || item.card.info.defaultPrice / 100}
          </li>
        ))}
        {/*<li>Burgers</li>
        <li>Diet Coke</li>*/}
      </ul>
    </div>
  );
};

export default RestaurantMenu;
