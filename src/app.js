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
var diameter = document.querySelector('#diameter');
var result = document.querySelector('#result');
var calcButton = document.querySelector('#calcButton');
var moveButton = document.querySelector('#moveButton');
function calculateArea(diameter) {
    var radius = diameter / 2;
    return (Math.pow(radius, 2) * Math.PI);
}
function calculatePrice(area) {
    return area * 2500;
}
calcButton.addEventListener('click', function (event) {
    var area = calculateArea(+diameter.value);
    var res = calculatePrice(area);
    result.value = String((res.toFixed(2)));
});
