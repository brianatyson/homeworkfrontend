CHEAT SHEET

var calculatorOn = false;

function pressPowerButton() {
  if (calculatorOn) {
    console.log('Calculator Turning Off');
    calculatorOn = false;
  } else {
    console.log('Calculator Turning On');
    calculatorOn = true;
  }
}

pressPowerButton();
//Output: Calculator Turning off

start with JS Keyword - function
function name = pressPowerButton
Between the {} is the code block that the function is processing (currently an if/else statement)
Call the function (ie, run the code inside the functions code block) using pressPowerButton()




x = 0
while (x < 12) {
  console.log(x)
  x = x + 1      (this is your modification)
}

1. Define x
2. create your while statement -- Remember you have to modify x or it will run forever!

//Output: 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11
(if you want it to print up to 12, you have to make it [while (x <= 12)])





var dogYears = 50;
if (dogYears >=0 && dogYears < 24) {
  console.log('You\'re 1 in Human Years!');
} else { (dogYears >= 24) || (dogYears <= 120)
  console.log('You\'re not a puppy anymore!');
}

//Output: You're not a puppy anymore!



for (var i = 0; i <= 12; i++) {
console.log('i is now ' + i);
}

i <= 12 is you condition. Here is where you set what stops the loop.
i++ (alt: i = i + 1, i = i + 2 is looped number)

var x = 15;
if (x <= 10) {
  alert('Your Variable is less than or equal to 10!');
} else {
  console.log('Your variable was ' + x + ', which is greater then 10.');
}
//Output: Your variable was 15 which is greater than 10



var jennysNumber = '8675309';
if (jennysNumber.length > 10) {
  alert("Jenny's Number is greater than 10 digits!");
} else {
  console.log('Jenny gave you a fake number!');
}
//Output: Jenny gave you a fake number!




function takeOrder(topping, crustType) {
  console.log('Order a ' + crustType + ' pizza topped with ' + topping);
}

takeOrder('bacon', 'thin crust');
takeOrder('pepperoni', 'cheesy crust');

/*Output:
Order a thin crust pizza topped with bacon
Order a cheesy crust pizza topped with pepperoni
*/




function multiplyBy(celsius) {
  return celsius * (9/5);
}
function getFahrenheit(celsius) {
  return multiplyBy(celsius) + 32;
}
console.log('The temperature is ' + getFahrenheit(15) + ' degrees Fahrenheit');
//Output: The temperature is 59 degrees Fahrenheit




var verbs = ['Jumping', 'Running', 'Swimming', 'Kicking', 'Hitting', 'Dancing'];
for (var i = 0; i < verbs.length; i++) {
  console.log('I always knew I\'d be good at ' + verbs[i]);
}

/* Output:
I always knew I'd be good at Jumping
I always knew I'd be good at Running
I always knew I'd be good at Swimming
I always knew I'd be good at Kicking
I always knew I'd be good at Hitting
I always knew I'd be good at Dancing
*/
