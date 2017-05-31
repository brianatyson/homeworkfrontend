var vacation = {
  location: "Cancun",
  date: {"month": 12, "year": 2017},
  weather: function(temp) {
    console.log("In Cancun it is currently " + temp);
  },
  clothing: function() {
    console.log('Yay Swimsuits!');
  },
  flightTime: function(numHrs) {
    for (var i = 0; i < numHrs; i++) {
      console.log('Up, Up and Away!');
    }
  }
};

vacation.clothing();
vacation.weather('87 degrees and sunny!');
vacation.flightTime(2);

/* Output
Yay Swimsuits!
In Cancun it is currently 87 degrees and sunny!
Up, Up and Away */

vacation
//output:
//Object {location: "Cancun", date: Object, weather: function, clothing: function, flightTime: function}

delete vacation.date
delete vacation.weather
delete vacation.flightTime
delete vacation.clothing
//Output: True
//Object {location: "Cancun"}

vacation.departingCity = "Philadelphia";
vacation.traveler = "Briana Tyson";
vacation.airline = "American";
vacation
//Output: Object {location: "Cancun", departingCity: "Philadelphia", traveler: "Briana Tyson", airline: "American"}


Object.keys(vacation)
 //Output: ['location', "date", "weather", "clothing", "flightTime"]
var keys = Object.keys(vacation)
//this turns the keys into an array under the a variable named keys.


for (var i=0; i <keys.length; i++) {
var property = keys[i];
console.log(vacation[property]);
}
/* Here we loop through the array with keys.length
Then we get each value of the array by valling the current index, on that array (keys[i])
Then we pass the strings and call on each object
Output:
Cancun
Philadelphia
Briana Tyson
American
*/
