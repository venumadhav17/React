import React from 'react';
import ReactDOM from 'react-dom/client';

/*
* Header
  - Logo
  - Nav Items(Home)
* Body
   - Search(Input)
   - RestaurantContainer
      - RestaurantCard
        - Img
        - Name of Res, Star Rating, Cuisine, Delivery Time 
* Footer
   - Copyright
   - Links
   - Address
   - Contact
*/

const Header = () => {
  return (
    <div className="header">
      <div className="logo-container">
        <img
          className="logo"
          alt="logo"
          src="https://d2n9ha3hrkss16.cloudfront.net/uploads/stage/stage_image/109028/optimized_product_thumb_stage.jpg"
        />
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Contact Us</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};

// const RestaurantCard = ({resName, cuisine}) -> Destructuring in Javascript
//const RestaurantCard = ({ resName = 'Hi', cuisine = 'Hello' }) => {
const RestaurantCard = (props) => {
  //const { resName, cuisine } = props;
  const { resData } = props;
  //console.log(props);
  const { cloudinaryImageId, name, cuisines, avgRating, costForTwo } =
    resData?.info;
  const { deliveryTime } = resData?.info?.sla;
  return (
    <div className="res-card">
      <h3>{name}</h3>
      <img
        className="res-logo"
        src={
          'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/' +
          cloudinaryImageId
        }
        alt="res-logo"
      />
      <h4>{cuisines.join(', ')}</h4> {/* {res.info.cuisines.join(', ')*/}
      <h4>{avgRating}</h4>
      <h4>{costForTwo}</h4>
      <h4>{deliveryTime} minutes</h4>
    </div>
  );
};

/* const resObj = {
} */

const resList = [
  {
    info: {
      id: '103738',
      name: 'Muralikrishna Ghee Sweets',
      cloudinaryImageId: 'lgnytmjd5s4scagmdbbd',
      locality: 'Madras Busstand',
      areaName: 'Nellore Area',
      costForTwo: '₹450 for two',
      cuisines: ['Sweets', 'Bakery'],
      avgRating: 4.6,
      veg: true,
      parentId: '472783',
      avgRatingString: '4.6',
      totalRatingsString: '10K+',
      promoted: true,
      adTrackingId:
        'cid=14404679~p=0~adgrpid=14404679#ag1~mp=SWIGGY_IN~bl=FOOD~aet=RESTAURANT~aeid=103738~eid=636c6106-d99f-4503-bd00-e938369d56bb~srvts=1718345437117~collid=45995',
      sla: {
        deliveryTime: 17,
        lastMileTravel: 2,
        serviceability: 'SERVICEABLE',
        slaString: '15-20 mins',
        lastMileTravelString: '2.0 km',
        iconType: 'ICON_TYPE_EMPTY',
      },
      availability: {
        nextCloseTime: '2024-06-14 21:40:00',
        opened: true,
      },
      badges: {
        imageBadges: [
          {
            imageId: 'Rxawards/_CATEGORY-Mithai.png',
            description: 'Delivery!',
          },
          {
            imageId: 'v1690360529/Ratnesh_Badges/Only_on_swiggy_badge_4x.png',
            description: 'OnlyOnSwiggy',
          },
          {
            imageId: 'v1695133679/badges/Pure_Veg111.png',
            description: 'pureveg',
          },
        ],
      },
      isOpen: true,
      aggregatedDiscountInfoV2: {},
      type: 'F',
      badgesV2: {
        entityBadges: {
          textBased: {},
          imageBased: {
            badgeObject: [
              {
                attributes: {
                  imageId: 'Rxawards/_CATEGORY-Mithai.png',
                  description: 'Delivery!',
                },
              },
              {
                attributes: {
                  imageId:
                    'v1690360529/Ratnesh_Badges/Only_on_swiggy_badge_4x.png',
                  description: 'OnlyOnSwiggy',
                },
              },
              {
                attributes: {
                  imageId: 'v1695133679/badges/Pure_Veg111.png',
                  description: 'pureveg',
                },
              },
            ],
          },
          textExtendedBadges: {},
        },
      },
      differentiatedUi: {
        displayType: 'ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT',
        differentiatedUiMediaDetails: {
          mediaType: 'ADS_MEDIA_ENUM_IMAGE',
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: 'RESTAURANT_DISPLAY_TYPE_DEFAULT',
      restaurantOfferPresentationInfo: {},
      externalRatings: {
        aggregatedRating: {
          rating: '--',
        },
      },
      ratingsDisplayPreference: 'RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY',
    },
    analytics: {},
    cta: {
      link: 'swiggy://menu?restaurant_id=103738',
      text: 'RESTAURANT_MENU',
      type: 'DEEPLINK',
    },
  },
  {
    info: {
      id: '651018',
      name: 'Pizza Hut',
      cloudinaryImageId: '2b4f62d606d1b2bfba9ba9e5386fabb7',
      locality: 'Mini bypass',
      areaName: 'Nellore',
      costForTwo: '₹350 for two',
      cuisines: ['Pizzas'],
      avgRating: 4.2,
      parentId: '721',
      avgRatingString: '4.2',
      totalRatingsString: '1K+',
      sla: {
        deliveryTime: 32,
        lastMileTravel: 1.1,
        serviceability: 'SERVICEABLE',
        slaString: '30-35 mins',
        lastMileTravelString: '1.1 km',
        iconType: 'ICON_TYPE_EMPTY',
      },
      availability: {
        nextCloseTime: '2024-06-14 23:00:00',
        opened: true,
      },
      badges: {
        imageBadges: [
          {
            imageId: 'Rxawards/_CATEGORY-Pizza.png',
            description: 'Delivery!',
          },
        ],
      },
      isOpen: true,
      type: 'F',
      badgesV2: {
        entityBadges: {
          textBased: {},
          imageBased: {
            badgeObject: [
              {
                attributes: {
                  imageId: 'Rxawards/_CATEGORY-Pizza.png',
                  description: 'Delivery!',
                },
              },
            ],
          },
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: '50% OFF',
        subHeader: 'UPTO ₹100',
      },
      differentiatedUi: {
        displayType: 'ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT',
        differentiatedUiMediaDetails: {
          mediaType: 'ADS_MEDIA_ENUM_IMAGE',
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: 'RESTAURANT_DISPLAY_TYPE_DEFAULT',
      restaurantOfferPresentationInfo: {},
      externalRatings: {
        aggregatedRating: {
          rating: '--',
        },
      },
      ratingsDisplayPreference: 'RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY',
    },
    analytics: {},
    cta: {
      link: 'swiggy://menu?restaurant_id=651018',
      text: 'RESTAURANT_MENU',
      type: 'DEEPLINK',
    },
  },
  {
    info: {
      id: '386133',
      name: 'The Belgian Waffle Co.',
      cloudinaryImageId: '5116a385bac0548e06c33c08350fbf11',
      locality: 'MGB Mall',
      areaName: 'Nellore',
      costForTwo: '₹200 for two',
      cuisines: ['Waffle', 'Desserts', 'Ice Cream'],
      avgRating: 4.6,
      veg: true,
      parentId: '2233',
      avgRatingString: '4.6',
      totalRatingsString: '1K+',
      sla: {
        deliveryTime: 40,
        lastMileTravel: 4.6,
        serviceability: 'SERVICEABLE',
        slaString: '35-40 mins',
        lastMileTravelString: '4.6 km',
        iconType: 'ICON_TYPE_EMPTY',
      },
      availability: {
        nextCloseTime: '2024-06-14 22:15:00',
        opened: true,
      },
      badges: {
        imageBadges: [
          {
            imageId: 'v1695133679/badges/Pure_Veg111.png',
            description: 'pureveg',
          },
        ],
      },
      isOpen: true,
      type: 'F',
      badgesV2: {
        entityBadges: {
          textExtendedBadges: {},
          textBased: {},
          imageBased: {
            badgeObject: [
              {
                attributes: {
                  imageId: 'v1695133679/badges/Pure_Veg111.png',
                  description: 'pureveg',
                },
              },
            ],
          },
        },
      },
      aggregatedDiscountInfoV3: {
        header: '20% OFF',
        subHeader: 'UPTO ₹50',
      },
      differentiatedUi: {
        displayType: 'ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT',
        differentiatedUiMediaDetails: {
          mediaType: 'ADS_MEDIA_ENUM_IMAGE',
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: 'RESTAURANT_DISPLAY_TYPE_DEFAULT',
      restaurantOfferPresentationInfo: {},
      externalRatings: {
        aggregatedRating: {
          rating: '--',
        },
      },
      ratingsDisplayPreference: 'RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY',
    },
    analytics: {},
    cta: {
      link: 'swiggy://menu?restaurant_id=386133',
      text: 'RESTAURANT_MENU',
      type: 'DEEPLINK',
    },
  },
  {
    info: {
      id: '103740',
      name: 'Muralikrishna Veg',
      cloudinaryImageId: 'aroxt9etv0xhtzwtbi4l',
      locality: 'Madras Busstand',
      areaName: 'Nellore Area',
      costForTwo: '₹750 for two',
      cuisines: ['South Indian', 'Andhra', 'Chinese'],
      avgRating: 4.4,
      veg: true,
      parentId: '12661',
      avgRatingString: '4.4',
      totalRatingsString: '10K+',
      sla: {
        deliveryTime: 25,
        lastMileTravel: 2,
        serviceability: 'SERVICEABLE',
        slaString: '25-30 mins',
        lastMileTravelString: '2.0 km',
        iconType: 'ICON_TYPE_EMPTY',
      },
      availability: {
        nextCloseTime: '2024-06-14 22:30:00',
        opened: true,
      },
      badges: {
        imageBadges: [
          {
            imageId: 'Rxawards/_CATEGORY-South%20Indian.png',
            description: 'Delivery!',
          },
          {
            imageId: 'v1690360529/Ratnesh_Badges/Only_on_swiggy_badge_4x.png',
            description: 'OnlyOnSwiggy',
          },
          {
            imageId: 'v1695133679/badges/Pure_Veg111.png',
            description: 'pureveg',
          },
        ],
      },
      isOpen: true,
      aggregatedDiscountInfoV2: {},
      type: 'F',
      badgesV2: {
        entityBadges: {
          textBased: {},
          imageBased: {
            badgeObject: [
              {
                attributes: {
                  imageId: 'Rxawards/_CATEGORY-South%20Indian.png',
                  description: 'Delivery!',
                },
              },
              {
                attributes: {
                  imageId:
                    'v1690360529/Ratnesh_Badges/Only_on_swiggy_badge_4x.png',
                  description: 'OnlyOnSwiggy',
                },
              },
              {
                attributes: {
                  imageId: 'v1695133679/badges/Pure_Veg111.png',
                  description: 'pureveg',
                },
              },
            ],
          },
          textExtendedBadges: {},
        },
      },
      differentiatedUi: {
        displayType: 'ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT',
        differentiatedUiMediaDetails: {
          mediaType: 'ADS_MEDIA_ENUM_IMAGE',
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: 'RESTAURANT_DISPLAY_TYPE_DEFAULT',
      restaurantOfferPresentationInfo: {},
      externalRatings: {
        aggregatedRating: {
          rating: '--',
        },
      },
      ratingsDisplayPreference: 'RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY',
    },
    analytics: {},
    cta: {
      link: 'swiggy://menu?restaurant_id=103740',
      text: 'RESTAURANT_MENU',
      type: 'DEEPLINK',
    },
  },
  {
    info: {
      id: '488165',
      name: 'CakeZone Patisserie',
      cloudinaryImageId:
        'RX_THUMBNAIL/IMAGES/VENDOR/2024/5/14/dd13dbe6-077d-43df-b9d3-3ac15b09802d_488165.jpg',
      locality: 'SUBEDARPET ROAD',
      areaName: 'Grand Trunk Road',
      costForTwo: '₹200 for two',
      cuisines: ['Bakery', 'Desserts', 'Sweets', 'Ice Cream'],
      avgRating: 4.3,
      parentId: '7003',
      avgRatingString: '4.3',
      totalRatingsString: '1K+',
      promoted: true,
      adTrackingId:
        'cid=13952556~p=1~adgrpid=13952556#ag1~mp=SWIGGY_IN~bl=FOOD~aet=RESTAURANT~aeid=488165~eid=835453be-fad6-4de5-8a7e-f1a39b0a0318~srvts=1718345437117~collid=45995',
      sla: {
        deliveryTime: 34,
        lastMileTravel: 1.9,
        serviceability: 'SERVICEABLE',
        slaString: '30-35 mins',
        lastMileTravelString: '1.9 km',
        iconType: 'ICON_TYPE_EMPTY',
      },
      availability: {
        nextCloseTime: '2024-06-15 00:00:00',
        opened: true,
      },
      badges: {},
      isOpen: true,
      type: 'F',
      badgesV2: {
        entityBadges: {
          textExtendedBadges: {},
          textBased: {},
          imageBased: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: '60% OFF',
        subHeader: 'UPTO ₹120',
      },
      differentiatedUi: {
        displayType: 'ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT',
        differentiatedUiMediaDetails: {
          mediaType: 'ADS_MEDIA_ENUM_IMAGE',
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: 'RESTAURANT_DISPLAY_TYPE_DEFAULT',
      restaurantOfferPresentationInfo: {},
      externalRatings: {
        aggregatedRating: {
          rating: '--',
        },
      },
      ratingsDisplayPreference: 'RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY',
    },
    analytics: {},
    cta: {
      link: 'swiggy://menu?restaurant_id=488165',
      text: 'RESTAURANT_MENU',
      type: 'DEEPLINK',
    },
  },
  {
    info: {
      id: '103739',
      name: 'Muralikrishna 70',
      cloudinaryImageId: 'i48ftw0wyi48wlfkei3a',
      locality: 'Madras Busstand',
      areaName: 'Nellore Area',
      costForTwo: '₹1000 for two',
      cuisines: [
        'North Indian',
        'South Indian',
        'Chinese',
        'Tandoor',
        'Biryani',
      ],
      avgRating: 4.3,
      parentId: '472782',
      avgRatingString: '4.3',
      totalRatingsString: '10K+',
      sla: {
        deliveryTime: 19,
        lastMileTravel: 2,
        serviceability: 'SERVICEABLE',
        slaString: '15-20 mins',
        lastMileTravelString: '2.0 km',
        iconType: 'ICON_TYPE_EMPTY',
      },
      availability: {
        nextCloseTime: '2024-06-14 23:00:00',
        opened: true,
      },
      badges: {
        imageBadges: [
          {
            imageId: 'v1690360529/Ratnesh_Badges/Only_on_swiggy_badge_4x.png',
            description: 'OnlyOnSwiggy',
          },
        ],
      },
      isOpen: true,
      aggregatedDiscountInfoV2: {},
      type: 'F',
      badgesV2: {
        entityBadges: {
          textBased: {},
          imageBased: {
            badgeObject: [
              {
                attributes: {
                  description: 'OnlyOnSwiggy',
                  imageId:
                    'v1690360529/Ratnesh_Badges/Only_on_swiggy_badge_4x.png',
                },
              },
            ],
          },
          textExtendedBadges: {},
        },
      },
      differentiatedUi: {
        displayType: 'ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT',
        differentiatedUiMediaDetails: {
          mediaType: 'ADS_MEDIA_ENUM_IMAGE',
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: 'RESTAURANT_DISPLAY_TYPE_DEFAULT',
      restaurantOfferPresentationInfo: {},
      externalRatings: {
        aggregatedRating: {
          rating: '--',
        },
      },
      ratingsDisplayPreference: 'RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY',
    },
    analytics: {},
    cta: {
      link: 'swiggy://menu?restaurant_id=103739',
      text: 'RESTAURANT_MENU',
      type: 'DEEPLINK',
    },
  },
  {
    info: {
      id: '552041',
      name: 'Hotel Riyaz Pot Biryani',
      cloudinaryImageId: 'vpsyzclzfojf3bgpi2mo',
      locality: 'Achari Street',
      areaName: 'Achari Street',
      costForTwo: '₹300 for two',
      cuisines: ['Biryani', 'Kebabs'],
      avgRating: 4.1,
      parentId: '12665',
      avgRatingString: '4.1',
      totalRatingsString: '1K+',
      sla: {
        deliveryTime: 21,
        lastMileTravel: 2.4,
        serviceability: 'SERVICEABLE',
        slaString: '20-25 mins',
        lastMileTravelString: '2.4 km',
        iconType: 'ICON_TYPE_EMPTY',
      },
      availability: {
        nextCloseTime: '2024-06-14 17:45:00',
        opened: true,
      },
      badges: {
        imageBadges: [
          {
            imageId: 'Rxawards/_CATEGORY-Biryani.png',
            description: 'Delivery!',
          },
          {
            imageId: 'v1690360529/Ratnesh_Badges/Only_on_swiggy_badge_4x.png',
            description: 'OnlyOnSwiggy',
          },
        ],
      },
      isOpen: true,
      aggregatedDiscountInfoV2: {},
      type: 'F',
      badgesV2: {
        entityBadges: {
          textExtendedBadges: {},
          textBased: {},
          imageBased: {
            badgeObject: [
              {
                attributes: {
                  imageId: 'Rxawards/_CATEGORY-Biryani.png',
                  description: 'Delivery!',
                },
              },
              {
                attributes: {
                  imageId:
                    'v1690360529/Ratnesh_Badges/Only_on_swiggy_badge_4x.png',
                  description: 'OnlyOnSwiggy',
                },
              },
            ],
          },
        },
      },
      differentiatedUi: {
        displayType: 'ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT',
        differentiatedUiMediaDetails: {
          mediaType: 'ADS_MEDIA_ENUM_IMAGE',
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: 'RESTAURANT_DISPLAY_TYPE_DEFAULT',
      restaurantOfferPresentationInfo: {},
      externalRatings: {
        aggregatedRating: {
          rating: '--',
        },
      },
      ratingsDisplayPreference: 'RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY',
    },
    analytics: {},
    cta: {
      link: 'swiggy://menu?restaurant_id=552041',
      text: 'RESTAURANT_MENU',
      type: 'DEEPLINK',
    },
  },
  {
    info: {
      id: '193960',
      name: 'Hotel Rayalaseema',
      cloudinaryImageId: 'bf7ad7f7c59e9855fb74174f41445412',
      locality: 'Grand Trunk Road',
      areaName: 'Nellore Area',
      costForTwo: '₹200 for two',
      cuisines: ['South Indian', 'Biryani', 'Home Food'],
      avgRating: 4.3,
      parentId: '247293',
      avgRatingString: '4.3',
      totalRatingsString: '10K+',
      sla: {
        deliveryTime: 17,
        lastMileTravel: 1.5,
        serviceability: 'SERVICEABLE',
        slaString: '15-20 mins',
        lastMileTravelString: '1.5 km',
        iconType: 'ICON_TYPE_EMPTY',
      },
      availability: {
        nextCloseTime: '2024-06-14 23:59:00',
        opened: true,
      },
      badges: {
        imageBadges: [
          {
            imageId: 'Rxawards/_CATEGORY-Biryani.png',
            description: 'Delivery!',
          },
        ],
      },
      isOpen: true,
      type: 'F',
      badgesV2: {
        entityBadges: {
          textBased: {},
          imageBased: {
            badgeObject: [
              {
                attributes: {
                  imageId: 'Rxawards/_CATEGORY-Biryani.png',
                  description: 'Delivery!',
                },
              },
            ],
          },
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: '₹125 OFF',
        subHeader: 'ABOVE ₹299',
        discountTag: 'FLAT DEAL',
      },
      differentiatedUi: {
        displayType: 'ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT',
        differentiatedUiMediaDetails: {
          mediaType: 'ADS_MEDIA_ENUM_IMAGE',
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: 'RESTAURANT_DISPLAY_TYPE_DEFAULT',
      restaurantOfferPresentationInfo: {},
      externalRatings: {
        aggregatedRating: {
          rating: '--',
        },
      },
      ratingsDisplayPreference: 'RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY',
    },
    analytics: {},
    cta: {
      link: 'swiggy://menu?restaurant_id=193960',
      text: 'RESTAURANT_MENU',
      type: 'DEEPLINK',
    },
  },
  {
    info: {
      id: '834567',
      name: 'Padmavathi Family Dhaba and Restaurant',
      cloudinaryImageId: '15450ca42ab13a71759820def30853a7',
      locality: 'Nellore Area',
      areaName: 'Nellore Area',
      costForTwo: '₹349 for two',
      cuisines: ['Indian'],
      avgRating: 4,
      parentId: '495942',
      avgRatingString: '4.0',
      totalRatingsString: '100+',
      promoted: true,
      adTrackingId:
        'cid=14404825~p=3~adgrpid=14404825#ag1~mp=SWIGGY_IN~bl=FOOD~aet=RESTAURANT~aeid=834567~eid=f87dde1a-172a-4286-8530-3ed3f3bcb3b7~srvts=1718345437117~collid=45995',
      sla: {
        deliveryTime: 32,
        lastMileTravel: 3,
        serviceability: 'SERVICEABLE',
        slaString: '30-35 mins',
        lastMileTravelString: '3.0 km',
        iconType: 'ICON_TYPE_EMPTY',
      },
      availability: {
        nextCloseTime: '2024-06-14 23:00:00',
        opened: true,
      },
      badges: {},
      isOpen: true,
      type: 'F',
      badgesV2: {
        entityBadges: {
          textBased: {},
          imageBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: '60% OFF',
        subHeader: 'UPTO ₹120',
      },
      differentiatedUi: {
        displayType: 'ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT',
        differentiatedUiMediaDetails: {
          mediaType: 'ADS_MEDIA_ENUM_IMAGE',
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: 'RESTAURANT_DISPLAY_TYPE_DEFAULT',
      isNewlyOnboarded: true,
      restaurantOfferPresentationInfo: {},
      externalRatings: {
        aggregatedRating: {
          rating: '--',
        },
      },
      ratingsDisplayPreference: 'RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY',
    },
    analytics: {},
    cta: {
      link: 'swiggy://menu?restaurant_id=834567',
      text: 'RESTAURANT_MENU',
      type: 'DEEPLINK',
    },
  },
  {
    info: {
      id: '98469',
      name: 'Salma Biryani',
      cloudinaryImageId: 'kpsrdwxugz7fktpjnmbi',
      locality: 'Masjid Center',
      areaName: 'Balaji Nagar',
      costForTwo: '₹200 for two',
      cuisines: ['Biryani', 'Tandoor', 'Kebabs', 'Grill'],
      avgRating: 4.2,
      parentId: '12707',
      avgRatingString: '4.2',
      totalRatingsString: '5K+',
      sla: {
        deliveryTime: 28,
        lastMileTravel: 0.6,
        serviceability: 'SERVICEABLE',
        slaString: '25-30 mins',
        lastMileTravelString: '0.6 km',
        iconType: 'ICON_TYPE_EMPTY',
      },
      availability: {
        nextCloseTime: '2024-06-14 23:59:00',
        opened: true,
      },
      badges: {},
      isOpen: true,
      type: 'F',
      badgesV2: {
        entityBadges: {
          textBased: {},
          imageBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: '₹50 OFF',
        subHeader: 'ABOVE ₹249',
        discountTag: 'FLAT DEAL',
      },
      differentiatedUi: {
        displayType: 'ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT',
        differentiatedUiMediaDetails: {
          mediaType: 'ADS_MEDIA_ENUM_IMAGE',
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: 'RESTAURANT_DISPLAY_TYPE_DEFAULT',
      restaurantOfferPresentationInfo: {},
      externalRatings: {
        aggregatedRating: {
          rating: '--',
        },
      },
      ratingsDisplayPreference: 'RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY',
    },
    analytics: {},
    cta: {
      link: 'swiggy://menu?restaurant_id=98469',
      text: 'RESTAURANT_MENU',
      type: 'DEEPLINK',
    },
  },
  {
    info: {
      id: '109746',
      name: 'Madhura Sweets',
      cloudinaryImageId: 'sjarddkwnbvboif3mzol',
      locality: 'Santhapet Road',
      areaName: 'Santhapet Road',
      costForTwo: '₹200 for two',
      cuisines: ['Sweets', 'Bakery'],
      avgRating: 4.6,
      parentId: '12656',
      avgRatingString: '4.6',
      totalRatingsString: '10K+',
      sla: {
        deliveryTime: 24,
        lastMileTravel: 1.5,
        serviceability: 'SERVICEABLE',
        slaString: '20-25 mins',
        lastMileTravelString: '1.5 km',
        iconType: 'ICON_TYPE_EMPTY',
      },
      availability: {
        nextCloseTime: '2024-06-14 22:00:00',
        opened: true,
      },
      badges: {
        imageBadges: [
          {
            imageId: 'Rxawards/_CATEGORY-Mithai.png',
            description: 'Delivery!',
          },
          {
            imageId: 'v1690360529/Ratnesh_Badges/Only_on_swiggy_badge_4x.png',
            description: 'OnlyOnSwiggy',
          },
        ],
      },
      isOpen: true,
      type: 'F',
      badgesV2: {
        entityBadges: {
          textBased: {},
          imageBased: {
            badgeObject: [
              {
                attributes: {
                  imageId: 'Rxawards/_CATEGORY-Mithai.png',
                  description: 'Delivery!',
                },
              },
              {
                attributes: {
                  imageId:
                    'v1690360529/Ratnesh_Badges/Only_on_swiggy_badge_4x.png',
                  description: 'OnlyOnSwiggy',
                },
              },
            ],
          },
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: '10% OFF',
        subHeader: 'ABOVE ₹149',
        discountTag: 'FLAT DEAL',
      },
      differentiatedUi: {
        displayType: 'ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT',
        differentiatedUiMediaDetails: {
          mediaType: 'ADS_MEDIA_ENUM_IMAGE',
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: 'RESTAURANT_DISPLAY_TYPE_DEFAULT',
      restaurantOfferPresentationInfo: {},
      externalRatings: {
        aggregatedRating: {
          rating: '--',
        },
      },
      ratingsDisplayPreference: 'RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY',
    },
    analytics: {},
    cta: {
      link: 'swiggy://menu?restaurant_id=109746',
      text: 'RESTAURANT_MENU',
      type: 'DEEPLINK',
    },
  },
  {
    info: {
      id: '188477',
      name: 'Babu Ice Creams',
      cloudinaryImageId: 'jvixzyppc1upbarunceh',
      locality: 'Ramji Nagar',
      areaName: 'Nellore Area',
      costForTwo: '₹200 for two',
      cuisines: ['Ice Cream'],
      avgRating: 4.5,
      veg: true,
      parentId: '12574',
      avgRatingString: '4.5',
      totalRatingsString: '1K+',
      sla: {
        deliveryTime: 22,
        lastMileTravel: 1.8,
        serviceability: 'SERVICEABLE',
        slaString: '20-25 mins',
        lastMileTravelString: '1.8 km',
        iconType: 'ICON_TYPE_EMPTY',
      },
      availability: {
        nextCloseTime: '2024-06-14 22:30:00',
        opened: true,
      },
      badges: {
        imageBadges: [
          {
            imageId: 'v1690360529/Ratnesh_Badges/Only_on_swiggy_badge_4x.png',
            description: 'OnlyOnSwiggy',
          },
          {
            imageId: 'v1695133679/badges/Pure_Veg111.png',
            description: 'pureveg',
          },
        ],
      },
      isOpen: true,
      aggregatedDiscountInfoV2: {},
      type: 'F',
      badgesV2: {
        entityBadges: {
          imageBased: {
            badgeObject: [
              {
                attributes: {
                  description: 'OnlyOnSwiggy',
                  imageId:
                    'v1690360529/Ratnesh_Badges/Only_on_swiggy_badge_4x.png',
                },
              },
              {
                attributes: {
                  imageId: 'v1695133679/badges/Pure_Veg111.png',
                  description: 'pureveg',
                },
              },
            ],
          },
          textExtendedBadges: {},
          textBased: {},
        },
      },
      differentiatedUi: {
        displayType: 'ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT',
        differentiatedUiMediaDetails: {
          mediaType: 'ADS_MEDIA_ENUM_IMAGE',
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: 'RESTAURANT_DISPLAY_TYPE_DEFAULT',
      restaurantOfferPresentationInfo: {},
      externalRatings: {
        aggregatedRating: {
          rating: '--',
        },
      },
      ratingsDisplayPreference: 'RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY',
    },
    analytics: {},
    cta: {
      link: 'swiggy://menu?restaurant_id=188477',
      text: 'RESTAURANT_MENU',
      type: 'DEEPLINK',
    },
  },
  {
    info: {
      id: '744983',
      name: 'Kwality Walls Frozen Dessert and Ice Cream Shop',
      cloudinaryImageId:
        'RX_THUMBNAIL/IMAGES/VENDOR/2024/6/13/a2fbdd94-b3af-4fab-89c8-6fd240cd6951_744983.JPG',
      locality: 'BALAJI NAGAR',
      areaName: 'Nellore Area',
      costForTwo: '₹200 for two',
      cuisines: ['Ice Cream', 'Desserts', 'Ice Cream Cakes'],
      avgRating: 4.5,
      veg: true,
      parentId: '582',
      avgRatingString: '4.5',
      totalRatingsString: '500+',
      promoted: true,
      adTrackingId:
        'cid=14378840~p=4~adgrpid=14378840#ag1~mp=SWIGGY_IN~bl=FOOD~aet=RESTAURANT~aeid=744983~eid=34c8e934-d273-4b38-95dd-e6c05b9617c4~srvts=1718345437117~collid=45995',
      sla: {
        deliveryTime: 18,
        lastMileTravel: 0.2,
        serviceability: 'SERVICEABLE',
        slaString: '15-20 mins',
        lastMileTravelString: '0.2 km',
        iconType: 'ICON_TYPE_EMPTY',
      },
      availability: {
        nextCloseTime: '2024-06-14 22:00:00',
        opened: true,
      },
      badges: {
        imageBadges: [
          {
            imageId: 'v1695133679/badges/Pure_Veg111.png',
            description: 'pureveg',
          },
        ],
      },
      isOpen: true,
      type: 'F',
      badgesV2: {
        entityBadges: {
          imageBased: {
            badgeObject: [
              {
                attributes: {
                  imageId: 'v1695133679/badges/Pure_Veg111.png',
                  description: 'pureveg',
                },
              },
            ],
          },
          textExtendedBadges: {},
          textBased: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: '50% OFF',
        subHeader: 'UPTO ₹100',
      },
      differentiatedUi: {
        displayType: 'ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT',
        differentiatedUiMediaDetails: {
          mediaType: 'ADS_MEDIA_ENUM_IMAGE',
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: 'RESTAURANT_DISPLAY_TYPE_DEFAULT',
      restaurantOfferPresentationInfo: {},
      externalRatings: {
        aggregatedRating: {
          rating: '--',
        },
      },
      ratingsDisplayPreference: 'RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY',
    },
    analytics: {},
    cta: {
      link: 'swiggy://menu?restaurant_id=744983',
      text: 'RESTAURANT_MENU',
      type: 'DEEPLINK',
    },
  },
  {
    info: {
      id: '588424',
      name: 'Hotel Sri Durga',
      cloudinaryImageId: 'o54wtgsj7jiwr2v9ch4d',
      locality: 'James Garden',
      areaName: 'NEAR ATMAKUR BUS STAND',
      costForTwo: '₹200 for two',
      cuisines: ['South Indian', 'Andhra', 'Fast Food'],
      avgRating: 4.4,
      veg: true,
      parentId: '102625',
      avgRatingString: '4.4',
      totalRatingsString: '1K+',
      sla: {
        deliveryTime: 25,
        lastMileTravel: 1.1,
        serviceability: 'SERVICEABLE',
        slaString: '25-30 mins',
        lastMileTravelString: '1.1 km',
        iconType: 'ICON_TYPE_EMPTY',
      },
      availability: {
        nextCloseTime: '2024-06-14 23:30:00',
        opened: true,
      },
      badges: {
        imageBadges: [
          {
            imageId: 'v1695133679/badges/Pure_Veg111.png',
            description: 'pureveg',
          },
        ],
      },
      isOpen: true,
      aggregatedDiscountInfoV2: {},
      type: 'F',
      badgesV2: {
        entityBadges: {
          imageBased: {
            badgeObject: [
              {
                attributes: {
                  imageId: 'v1695133679/badges/Pure_Veg111.png',
                  description: 'pureveg',
                },
              },
            ],
          },
          textExtendedBadges: {},
          textBased: {},
        },
      },
      differentiatedUi: {
        displayType: 'ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT',
        differentiatedUiMediaDetails: {
          mediaType: 'ADS_MEDIA_ENUM_IMAGE',
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: 'RESTAURANT_DISPLAY_TYPE_DEFAULT',
      restaurantOfferPresentationInfo: {},
      externalRatings: {
        aggregatedRating: {
          rating: '--',
        },
      },
      ratingsDisplayPreference: 'RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY',
    },
    analytics: {},
    cta: {
      link: 'swiggy://menu?restaurant_id=588424',
      text: 'RESTAURANT_MENU',
      type: 'DEEPLINK',
    },
  },
  {
    info: {
      id: '414670',
      name: 'Bahubali restaurant',
      cloudinaryImageId: 'n1tzkh01myqc1opj2bc4',
      locality: 'Children park road',
      areaName: 'Children park road',
      costForTwo: '₹300 for two',
      cuisines: ['Biryani', 'North Indian', 'Chinese', 'Tandoor', 'Kebabs'],
      avgRating: 4.3,
      parentId: '241603',
      avgRatingString: '4.3',
      totalRatingsString: '1K+',
      sla: {
        deliveryTime: 20,
        lastMileTravel: 1.2,
        serviceability: 'SERVICEABLE',
        slaString: '20-25 mins',
        lastMileTravelString: '1.2 km',
        iconType: 'ICON_TYPE_EMPTY',
      },
      availability: {
        nextCloseTime: '2024-06-14 15:25:00',
        opened: true,
      },
      badges: {},
      isOpen: true,
      aggregatedDiscountInfoV2: {},
      type: 'F',
      badgesV2: {
        entityBadges: {
          textBased: {},
          imageBased: {},
          textExtendedBadges: {},
        },
      },
      differentiatedUi: {
        displayType: 'ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT',
        differentiatedUiMediaDetails: {
          mediaType: 'ADS_MEDIA_ENUM_IMAGE',
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: 'RESTAURANT_DISPLAY_TYPE_DEFAULT',
      restaurantOfferPresentationInfo: {},
      externalRatings: {
        aggregatedRating: {
          rating: '--',
        },
      },
      ratingsDisplayPreference: 'RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY',
    },
    analytics: {},
    cta: {
      link: 'swiggy://menu?restaurant_id=414670',
      text: 'RESTAURANT_MENU',
      type: 'DEEPLINK',
    },
  },
  {
    info: {
      id: '870008',
      name: 'Sri Vengamamba Punjabi Family Dhaba',
      cloudinaryImageId:
        'RX_THUMBNAIL/IMAGES/VENDOR/2024/4/13/502de8b1-c692-4a97-9b40-fbd83357f8ab_870008.JPG',
      locality: 'Nellore Area',
      areaName: 'Nellore Area',
      costForTwo: '₹500 for two',
      cuisines: ['Biryani', 'Beverages', 'Tandoor', 'Kebabs'],
      avgRating: 4.3,
      parentId: '12646',
      avgRatingString: '4.3',
      totalRatingsString: '20+',
      sla: {
        deliveryTime: 28,
        lastMileTravel: 1.7,
        serviceability: 'SERVICEABLE',
        slaString: '25-30 mins',
        lastMileTravelString: '1.7 km',
        iconType: 'ICON_TYPE_EMPTY',
      },
      availability: {
        nextCloseTime: '2024-06-14 23:00:00',
        opened: true,
      },
      badges: {},
      isOpen: true,
      aggregatedDiscountInfoV2: {},
      type: 'F',
      badgesV2: {
        entityBadges: {
          textBased: {},
          imageBased: {},
          textExtendedBadges: {},
        },
      },
      differentiatedUi: {
        displayType: 'ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT',
        differentiatedUiMediaDetails: {
          mediaType: 'ADS_MEDIA_ENUM_IMAGE',
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: 'RESTAURANT_DISPLAY_TYPE_DEFAULT',
      isNewlyOnboarded: true,
      restaurantOfferPresentationInfo: {},
      externalRatings: {
        aggregatedRating: {
          rating: '--',
        },
      },
      ratingsDisplayPreference: 'RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY',
    },
    analytics: {},
    cta: {
      link: 'swiggy://menu?restaurant_id=870008',
      text: 'RESTAURANT_MENU',
      type: 'DEEPLINK',
    },
  },
];

const Body = () => {
  return (
    <div className="body">
      <div className="search">Search</div>
      <div className="res-container">
        {/* <RestaurantCard resData={resList[1]}/> */}
        {resList.map((restaurant) => (
          <RestaurantCard key={restaurant.info.id} resData={restaurant} />
        ))}
      </div>
    </div>
  );
};

// All things inside
const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Body />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<AppLayout />);
