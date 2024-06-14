import RestaurantCard from './RestaurantCard';
import resList from '../../utils/mockdata';
import { useState } from 'react';

const Body = () => {
  console.log(useState());
  // Local State Variable - Super powerful variable - It is written Inside the component
  // Hook is a normal Js function given by React
  /*const [listOfRestaurants, setListOfRestaurants] = useState([
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
  ]); */

  const [listOfRestaurants, setListOfRestaurants] = useState(resList);

  {
    /*const arr = useState(resList);
const [listOfRestaurants, setListOfRestaurants] = arr

const listOfRestaurants = arr[0];
const setListOfRestaurants = arr[1]; */
  }

  // //Normal Js Variable
  // let listOfRestaurants = [];

  // Normal Js Variable
  /* let listOfRestaurants = [
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
  ]; */

  return (
    <div className="body">
      <div className="filter">
        <button
          className="filter-btn"
          onClick={() => {
            const filteredList = listOfRestaurants.filter(
              (res) => res.info.avgRating >= 4.6
            );
            setListOfRestaurants(filteredList);
            //console.log('Button Clicked');
            /* listOfRestaurants = listOfRestaurants.filter(
              (res) => res.info.avgRating >= 4.6
            );
            console.log(listOfRestaurants); */
          }}
        >
          Top Rated Restaurants
        </button>
      </div>
      <div className="res-container">
        {/*{resList.map((restaurant) => (
          <RestaurantCard key={restaurant.info.id} resData={restaurant} />
        ))} */}
        {listOfRestaurants.map((restaurant) => (
          <RestaurantCard key={restaurant.info.id} resData={restaurant} />
        ))}
      </div>
    </div>
  );
};

export default Body;
