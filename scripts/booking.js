/********* create variables *********/
// useful variables might be: the cost per day, the number of days selected, and elements on the screen that will be clicked or will need to be modified. 
// Do any of these variables need to be initialized when the page is loaded? 
// When do they need to be reset or updated?
// when the full-day button is clicked, the daily rate is set back to $35, the clicked class is added to "full" and removed from "half", and the total cost is recalculated.
/********* calculate *********/
// when a calculation is needed, set the innerHTML of the calculated-cost element to the appropriate value
var halfDayColor = 0;
var fullDayColor = 1;
var totalDays = 0;
var dayRate = 35;
var totalCost = 0;
let calcCost = document.getElementById('calculated-cost');

/********* colour change days of week *********/
// when the day buttons are clicked, we will apply the "clicked" class to that element, and update any other relevant variables. Then, we can recalculate the total cost.
// added challenge: don't update the dayCounter if the same day is clicked more than once. hint: .classList.contains() might be helpful here!



var mon = document.getElementById('monday');  /*Grab the Id of the button "not the text but the item itself" */
var tue = document.getElementById('tuesday');/*Grab the Id of the button "not the text but the item itself" */
var wed = document.getElementById('wednesday');/*Grab the Id of the button "not the text but the item itself" */
var thu = document.getElementById('thursday');/*Grab the Id of the button "not the text but the item itself" */
var fri = document.getElementById('friday');/*Grab the Id of the button "not the text but the item itself" */

class selectDay{/*create a new class called select day with one function onclick. htis class method requires one argument dayargu */
    constructor (dayArgu){
    this.day = dayArgu;  
    }

    onClick(){/*this function adds or removes the CSS class .clicked{background color:orangeish } to the id element by checking if the element already has it applied. */
    if (this.day.classList.contains('clicked')){ /*check to see if this.day attribute which is tied to its object which is tied to the day ID      if it  has the class .clicked */
        this.day.classList.remove('clicked');/* removes clicked class from specific ID*/
        totalDays -= 1;
        console.log('totaldays=',totalDays); /* show the total day count in the console. used to caclulate the total weekly cost */
    } else {
        this.day.classList.add('clicked');/* the .add is the key here add the class to this element*/
        totalDays += 1;/*increase total days variable by 1 */
        console.log('totaldays=',totalDays);
        
        }
        totalCost = dayRate * totalDays; /** Update the calculated cost everytime a click happens */
        calcCost.textContent = totalCost;/** Update the calculated cost everytime a click happens */
    }
    
}
const mondayObject = new selectDay(mon);/* create new object from sleect day class associated with the mon variable ID which was declared above*/
const tuesdayObject = new selectDay(tue);/* create new object from sleect day class associated with the tue variable ID which was declared above*/
const wednesdayObject = new selectDay(wed);/* create new object from sleect day class associated with the wed variable ID which was declared above*/
const thursdayObject = new selectDay(thu);/* create new object from sleect day class associated with the thu variable ID which was declared above*/
const fridayObject = new selectDay(fri);/* create new object from sleect day class associated with the fri variable ID which was declared above*/


mon.addEventListener('click', function () { /* javascript is weird I cannot just call on an object with the addeventlistener. this listener wants the object called with one of its methods. cannot just call objects in javascript must call objects with one of thier own methods. */
    mondayObject.onClick();
});

tue.addEventListener('click', function () {
    tuesdayObject.onClick();
});
wed.addEventListener('click', function () {
    wednesdayObject.onClick();
});
thu.addEventListener('click', function () {
    thursdayObject.onClick();
});
fri.addEventListener('click', function () {
    fridayObject.onClick();
});

// fri.addEventListener('click',fridayObject.handleClick()); /* <<<<<<<<< this does not work. the addEventlistener wants the object to be called through a function. and the object must be called with its method or maybe methods? maybe if you have multiple methods call with a method that runs all the other methods in the object */


/********* clear days *********/
// when the clear-button is clicked, the "clicked" class is removed from all days, any other relevant variables are reset, and the calculated cost is set to 0.

var clearButton = document.getElementById('clear-button');/*Grab the Id of the button "not the text but the item itself" */
clearButton.addEventListener('click', clearAll);

function clearAll(){
    mon.classList.remove('clicked');
    tue.classList.remove('clicked');
    wed.classList.remove('clicked');
    thu.classList.remove('clicked');
    fri.classList.remove('clicked');
    totalDays = 0;
    totalCost = 0;
    totalCost = dayRate * totalDays;/** Update the calculated cost everytime a click happens */
    calcCost.textContent = totalCost; /** Update the calculated cost everytime a click happens */
}



/********* change rate *********/
// when the half-day button is clicked, set the daily rate to $20, add the "clicked" class to the "half" element, remove it from the "full" element, and recalculate the total cost.
// when the full-day button is clicked, the daily rate is set back to $35, the clicked class is added to "full" and removed from "half", and the total cost is recalculated.

/**Var dayRate declared above */
var halfDay = document.getElementById('half');
var fullDay = document.getElementById('full');
halfDay.addEventListener('click', changeColorHalfDay);
fullDay.addEventListener('click', changeColorFullDay);


function changeColorHalfDay () {
    if (halfDayColor === 0){
        halfDay.classList.add('clicked');
        fullDay.classList.remove('clicked');
        fullDayColor = 0;
        halfDayColor = 1;
        console.log('halfDaycolor=',halfDayColor);
        console.log('fullDayColor=',fullDayColor);
        dayRate = 20;
        console.log('dayRate=',dayRate);
    }
    totalCost = dayRate * totalDays;/** Update the calculated cost everytime a click happens */
    calcCost.textContent = totalCost;/** Update the calculated cost everytime a click happens */

}
function changeColorFullDay () {
    if (fullDayColor === 0){
        halfDay.classList.remove('clicked');
        fullDay.classList.add('clicked');
        halfDayColor = 0;
        fullDayColor = 1;
        console.log('halfDaycolor=',halfDayColor);
        console.log('fullDayColor=',fullDayColor);
        dayRate = 35;
        console.log('dayRate=',dayRate);
    }
    totalCost = dayRate * totalDays;/** Update the calculated cost everytime a click happens */
    calcCost.textContent = totalCost;/** Update the calculated cost everytime a click happens */
    
}






