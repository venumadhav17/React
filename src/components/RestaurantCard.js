import { CDN_URL } from '../utils/constants';

const RestaurantCard = (props) => {
  const { resData } = props;

  //console.log(resData);

  const { cloudinaryImageId, name, cuisines, avgRating, costForTwo, sla } =
    resData?.info;

  //const { deliveryTime } = resData?.info?.sla;
  //console.log(resData);

  return (
    <div className="res-card">
      <h3>{name}</h3>
      <img
        className="res-logo"
        src={CDN_URL + cloudinaryImageId}
        alt="res-logo"
      />
      <h4>{cuisines.join(', ')}</h4> {/* {res.info.cuisines.join(', ')*/}
      <h4>{avgRating}</h4>
      <h4>{costForTwo}</h4>
      <h4>{sla.slaString} minutes</h4>
    </div>
  );
};

export default RestaurantCard;
