import React, { Fragment, useEffect, useState } from 'react';
import './App.css';
import SearchBar from './SearchBar';
import Header from './Header';

function App() {

  const [displayImage, setDisplayImage] = useState('');
  const [displayItem, setDisplayItem] = useState('');


  const maps = [
    {
      mapName: "camp",
      pictures: [
        {
          image: "camp-spot-1.jpg",
          items: [
            {
              itemName: "throwing axe",
              cost: 50,
              xy: [18, 59]
            },
            {
              itemName: "targe",
              cost: 50,
              xy: [31, 55]
            },
            {
              itemName: "wooden mallet",
              cost: 25,
              xy: [42, 50]
            },
            {
              itemName: "toolbox",
              cost: 250,
              xy: [76, 52]
            },
            {
              itemName: "hoe",
              cost: 15,
              xy: [77, 41]
            },
            {
              itemName: "arming sword",
              cost: 60,
              xy: [46, 63]
            },
            {
              itemName: "bandage",
              cost: 20,
              xy: [70, 50]
            },
            {
              itemName: "medic bag",
              cost: 100,
              xy: [70, 50]
            },
            {
              itemName: "dagger",
              cost: 20,
              xy: [50, 40]
            },
            {
              itemName: "axe",
              cost: 20,
              xy: [50, 34]
            },
            {
              itemName: "dagger",
              cost: 20,
              xy: [50, 40]
            },
            {
              itemName: "light helmet",
              cost: 30,
              xy: [54, 37]
            },
            {
              itemName: "light chest",
              cost: 50,
              xy: [54, 37]
            },
            {
              itemName: "blacksmith hammer",
              cost: 30,
              xy: [63, 38]
            },
            {
              itemName: "short sword",
              cost: 30,
              xy: [63, 38]
            },
            {
              itemName: "war hammer",
              cost: 70,
              xy: [63, 38]
            },
            {
              itemName: "recurve bow",
              cost: 100,
              xy: [68, 47]
            },
            {
              itemName: "recurve bow ammo",
              cost: 10,
              xy: [68, 47]
            },
            {
              itemName: "mace",
              cost: 50,
              xy: [68, 38]
            },
            {
              itemName: "medium chest",
              cost: 200,
              xy: [95, 38]
            },
            {
              itemName: "throwing knife",
              cost: 50,
              xy: [68, 38]
            },
            {
              itemName: "messer",
              cost: 50,
              xy: [68, 38]
            },
            {
              itemName: "scythe",
              cost: 90,
              xy: [32, 21]
            },
            {
              itemName: "throwing knife",
              cost: 20,
              xy: [55, 20]
            }
          ]
        },
        {
          image: "camp-spot-2.jpg",
          items: [
            {
              itemName: "heavy hand axe",
              cost: 140,
              xy: [47, 55]
            },
            {
              itemName: "buckler",
              cost: 30,
              xy: [63, 59]
            },
            {
              itemName: "testtwo",
              cost: 30,
              xy: [63, 59]
            }
          ]
        }
      ]
    }
  ];

  useEffect(() => {
    console.log('displaying item:', displayItem?.itemName);
    console.log('map search:', displayImage);

  }, [displayItem, displayImage]);

  const searchItem = (itemSearchString, mapSearchString) => {
    const map = maps.find(map => map.mapName === mapSearchString);
    if (map) {
      map.pictures.forEach(picture => {
        const item = picture.items.find(item => item.itemName === itemSearchString)
        if (item) {
          setDisplayImage(picture.image);
          setDisplayItem(item);
          return;
        }
      });
    }
  }

  return (
      <Fragment>
      <div className="App">
        <Header />
        <SearchBar searchItem={searchItem} />
        <div className='map-image--wrapper'>
          {(displayImage && displayItem) && (
            <Fragment>
              <div className='indicator'></div>
              <img alt='img of map' src={process.env.PUBLIC_URL + "/mapImages/" + displayImage}/>
            </Fragment>
          )}
        </div>
      </div>
      <style jsx>
        {`
          .indicator {
            position: absolute;
            left:${displayItem?.xy?.[0]}%;
            top:${displayItem?.xy?.[1]}%;
          }
        `}
      </style>
    </Fragment>
  );
}



export default App;
