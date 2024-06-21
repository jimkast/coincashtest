import {createRoot} from "react-dom/client";
import {HomePage} from "./homepage";

createRoot(document.getElementById('app')).render(HomePage({
    icoPromos: [
        {text: 'You can book tickets', svgPath: './img/icons.svg#plane'},
        {text: 'You can buy groceries', svgPath: './img/icons.svg#cart'},
        {text: 'You can pay your bills', svgPath: './img/icons.svg#file'},
    ],
    imgPromos: [
        {img: './img/banner1.jpeg', title: 'Shop anywhere', subtitle: 'The easiest way to use cryptocurrencies for everyday purchases.'},
        {img: './img/banner2.jpeg', title: 'Zero fees', subtitle: 'The easiest way to use your cryptocurrencies for everyday purchases', imgPosition: 'right'},
    ],
    blueSlogan: 'over 200,000+ users have chosen COINCASH for everyday payments',
    title: 'Buy anything you can imagine',
    subtitle: 'The easiest way to use cryptocurrencies for everyday purchases.'
}));

