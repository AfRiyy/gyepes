/*
* File: app.ts/app.js
* Author: Madarász Dávid
* Copyright: 2021, Madarász Dávid
* Group: Szoft II N
* Date: 2021-10-07
-----------------
* Last Modified Date: 2021-10-07
* Last Modified by: Madarász Dávid
* Github: https://github.com/afriyy/
* Licenc: ISC
*/

const diameter = document.querySelector('#diameter') as HTMLInputElement;
const result = document.querySelector('#result') as HTMLInputElement;
const calcButton = document.querySelector('#calcButton') as HTMLInputElement;
const moveButton = document.querySelector('#moveButton') as HTMLInputElement;
function calculateArea(diameter: number):number{
    let radius = diameter / 2;
    return (Math.pow(radius,2)*Math.PI);
}

function calculatePrice(area: number):number{
    return area * 2500;
}
calcButton.addEventListener('click', event=>{
    let area = calculateArea(+diameter.value);
    let res = calculatePrice(area);
    result.value= String((res.toFixed(2))); 
});

