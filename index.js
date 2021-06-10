//Define three variables for the LaunchCode shuttle - one for the starting fuel level, another for the number of astronauts aboard, and the third for the altitude the shuttle reaches.
let fuel;
let astronautsAboard;
let shuttleAltitude = 0;
const input = require('readline-sync');

/*Exercise #4: Construct while loops to do the following:
  a. Query the user for the starting fuel level. Validate that the user enters a positive, integer value greater than 5000 but less than 30000. */
fuel = input.question("Enter the starting fuel level between 5000 and 30000: ");

while (fuel < 5000 || fuel > 30000)
{
  console.log("The starting fuel is out of range.");
  fuel = input.question("Enter the starting fuel level between 5000 and 30000: ");
}

//b. Use a second loop to query the user for the number of astronauts (up to a maximum of 7). Validate the entry.
astronautsAboard = Number(input.question("Enter the number of astronauts aboard between 1 and 7: "));

while (astronautsAboard < 1 || astronautsAboard > 7)
{
  console.log("The number of astronauts is out of range.");
  astronautsAboard = Number(input.question("Enter the number of astronauts aboard between 1 and 7: "));
}  
  
//c. Use a final loop to monitor the fuel status and the altitude of the shuttle. Each iteration, decrease the fuel level by 100 units for each astronaut aboard. Also, increase the altitude by 50 kilometers.
/*Exercise #5: Output the result with the phrase, “The shuttle gained an altitude of ___ km.”*/
while (fuel > 0)
{
  if (fuel >= astronautsAboard*100)
  {
    shuttleAltitude = shuttleAltitude + 50;
    console.log("The shuttle gained an altitude of", shuttleAltitude, "km.\n")
    fuel = fuel - (astronautsAboard*100);
  }
  else
  {
    break;
  }
}

/*If the altitude is 2000 km or higher, add “Orbit achieved!” Otherwise add, “Failed to reach orbit.”*/
if (shuttleAltitude >= 2000)
  {
    console.log("Orbit achieved!")
  }
else
  {
    console.log("Faild to reach orbit.")
  }