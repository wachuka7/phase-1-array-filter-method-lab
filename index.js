// Code your solution here
// first assign drivers the array
const drivers = ['Bobby', 'Sammy', 'Sally', 'Annette', 'Sarah', 'bobby'];
//the function have .toLowerCase() to ensure they are case insenstive
//the .toLowerCase() converts the names to lower case
    //so it will return any name not withstanding its case
// Function that takes two arguments drivers and name.
//It returns a list of drivers that match without considering the case.
function findMatching(drivers, name) {
    return drivers.filter(driver => driver.toLowerCase() === name.toLowerCase());
  }
  //fuzzyMatching function
  // Function finds drivers whose names begin with provide letters
  function fuzzyMatch(drivers, letters) {
    
    return drivers.filter(driver => driver.startsWith(letters));
  }
  //matchName function
  // Function finds drivers whose name will the provided string
  const driversNameAndCity = [
    {
      name: 'Bobby',
      hometown: 'Pittsburgh' },
    {
      name: 'Sammy',
      hometown: 'New York' } ,
    {
      name: 'Sally',
      hometown: 'Cleveland' },
    {
      name: 'Annette',
      hometown: 'Los Angeles' },
    {
      name: 'Bobby',
      hometown: 'Tampa Bay' }
  ];

  function matchName(driversNameAndCity, name) {
    return driversNameAndCity.filter(driversNameAndCity => driversNameAndCity.name === name);
  }
  