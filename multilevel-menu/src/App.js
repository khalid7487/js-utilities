import React from "react";
import { MultilevelMenu } from 'react-multilevel-menu';

import './my-custom-class.css';

//  import { list } from './components/constants';


import popularImg from './img/side-bar/popular.png';
import img from './img/side-bar/summer.png';
import hygine from './img/side-bar/hygine.png';
import babyCare from './img/side-bar/bby-care.png';
import petCare from './img/side-bar/pets.png';
import food from './img/side-bar/food.png';
import homeCleaning from './img/side-bar/home&cleaning.png';
import officeProdut from './img/side-bar/officeProduct.png';
import beauty from './img/side-bar/beauty.png';
import homeApplinace from './img/side-bar/homeAppliance.png';
import vechileEssentials from './img/side-bar/essentials.png';

let popular ='Popular'

const list = [
    {
        label: `${popular}`,
        imageIcon: popularImg,
        link: '/popularImg',
    },
    {
        label: 'Summer Collection',
        imageIcon: img,
        link: '/popularImg',
    },
    {
        label: 'Hygine',
        imageIcon: hygine,
        link: '/popularImg',
    },
    {
        label: 'Baby Care',
        imageIcon: babyCare,
        items: [
            {
                label: 'Newborn Essentials',
                onSelected: function () {
                    console.log('Item 1.2.2.1');
                }
            },
            {
                label: 'Feeders',
                onSelected: function () {
                    console.log('Newborn Essentials');
                }
            },
            {
                label: 'Diapers & Wipes',
                onSelected: function () {
                    console.log('Diapers & Wipes');
                },
                items: [
                    {
                        label: 'Wipes',
                        onSelected: function () {
                            console.log('Diapers & Wipes');
                        }
                    },
                    {
                        label: 'Diapers',
                        onSelected: function () {
                            console.log('Diapers & Wipes');
                        }
                    }
                ]
            },
            {
                label: 'Bath & Skincare',
                link: '/bath&Skincare'
            },
            {
                label: 'Baby Accessories'
            },
            {
                label: 'Bath & Skincare'
            },
            {
                label: 'Baby Oral Care'
            }
            
        ]
    },
    {
        label: 'Pet Care',
        imageIcon: petCare,
        items: [
            {
                label: 'Kitten Food',

            },
            {
                label: 'Cat Food'
            },
            {
                label: 'Dog Food'
            },
            {
                label: 'Other Pet Foods'
            },{
                label: 'Pet Accessories'
            }
        ]
    },
    {
        label: 'Food',
        imageIcon: food,
        items: [
            {
                label: 'Fruits & Vegetables',
                items:[
                    {
                        label: 'Fresh Fruits'
                    },
                    {
                        label: 'Fresh Vegetables'
                    }
                ]
                
            },
            {
                label: 'Breakfast',
                items:[
                    {
                        label: 'Local Breakfast'
                    },
                    {
                        label: 'Energy Boosters'
                    },
                    {
                        label: 'Cereals'
                    },
                    {
                        label: 'Jam & Spreads'
                    }
                ]
            },
            {
                label: 'Beverages',
                items:[
                    {
                        label: 'Tea'
                    },
                    {
                        label: 'Coffee'
                    },
                    {
                        label: 'Juice'
                    },
                    {
                        label: 'Soft Drinks'
                    },{
                        label: 'Water'
                    }, 
                    {
                        label: 'Syrups & Powder Drinks'
                    }
                ]
            },
            {
                label: 'Meat & Fish',
                items:[
                    {
                        label:'Meat'
                    },
                    {
                        label: 'Fresh Fish'
                    }
                ]

            }
        ]
    },
    {
        label: 'Home & Cleaning',
        imageIcon: homeCleaning,
        items:[
            {
                label:'Air Fresheners'
            },
            {
                label: 'Dish Detergents'
            },
            {
                label: 'Cleaning Supplies'
            },
            {
                label:'Air Fresheners'
            },
            {
                label: 'Dish Detergents'
            },
            {
                label: 'Cleaning Supplies'
            }
        ]
    },
    {
        label: 'Office Product',
        link: '/item-4',
        imageIcon: officeProdut
    }
];

const config = {
    paddingAtStart: true,
    classname: 'my-custom-class',
    selectedListFontColor: `#D39B11`,
    highlightOnSelect: true,
    useDividers: false,

};

const App = () => {

    const selectedItem = (event) => {
        console.log(event);
    }


    return (

        <div className="app__page-container">
            <MultilevelMenu
                list={list}
                configuration={config}
                selectedListItem={selectedItem}
                selectedLabel={selectedItem}
            />
        </div>
    );
}

export default App;
