import React from 'react';
import ReactDOM from 'react-dom';
// How to add Javascript inside the page with react
const fName='Tim';
//NOTE: {}   =>  We add javascript inside the code using curly braces
//shift + [] = {}
// create a number 10 and use a const.
//Then display My favourite number is 10(use javsript const to render 10)
const num ="10";
const randomNumber=Math.floor(Math.random()*10);
//It should display 2 paragraph HTML elements.
//The paragraphs should say:
//Created by YOURNAME.
//Copyright CURRENTYEAR.
//E.g.
//Created by Ahmet Bayram(js).
//Copyright 2021(js).
const fullName='Ahmet Bayram';
console.log(fullName);//Logs Ahmet Bayram is the console. Just to check.
const currentDate=new Date();
console.log(currentDate);//Sun May 16 2021 11:53:03 GMT-0500 (Central Daylight Time)
const currentYear=currentDate.getFullYear();
console.log(currentYear);//2021
ReactDOM.render(
    <div>
        <h1>My name is Tim</h1>
        {/* I can add js variables using {} */}
        <h1>My name is {fName}</h1>
        <h1>My number is 10</h1>
        <h1>My favorite number is {num}</h1>
        <p>My favorite number is {6+10}</p>
        {/* I can add functions using {} */}
        <p>My favourite number is {Math.floor(Math.random()*10)}</p>
        {/* My name is Tim(js) and my fav number is randomNumber(js) */}
        <p>My name is Tim(js) and my fav number is randomNumber(js)</p>
        <p>My name is {fName} and my fav number is {randomNumber}</p>
        {/* I am using backtict to write a paragraph on the page */}
        <p> {`My name is ${fName}. My fav number ${randomNumber}`}</p>
        <p> `My name is ${fName}. My fav number ${randomNumber}`</p>
        <p>Created by {fullName}</p>
        <p>Copyright {currentYear}</p>
    </div>
,
    document.getElementById("root"));
