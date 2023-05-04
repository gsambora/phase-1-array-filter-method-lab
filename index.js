// Code your solution here
//const drivers = ['Bobby', 'Sammy', 'Sally', 'Annette', 'Sarah', 'Bobby']


function findMatchingTwo(driverArray, nameToMatch) {
    let matchingNameDrivers = [];
    driverArray.filter(function(driverName){
        //console.log(driverName)
        if (driverName.toLowerCase() === nameToMatch.toLowerCase()) {
            matchingNameDrivers.push(driverName);
        }
    });

    return matchingNameDrivers;
}

function findMatching(driverArray, nameToMatch) {
    return driverArray.filter(driverName => driverName.toLowerCase() === nameToMatch.toLowerCase())
}

function fuzzyMatch(driverArray, letterToMatch) {
    //console.log(letterToMatch, letterToMatch.length)
    //driverArray.filter(driverName => driverName.slice(0, letterToMatch.length) === letterToMatch)
    let matchingNameDrivers = [];

    driverArray.filter(function(driverName){
        console.log(driverName.slice(0,letterToMatch.length))
        console.log(driverName.slice(0, letterToMatch.length) === letterToMatch)
        if(driverName.slice(0, letterToMatch.length) === letterToMatch){
            matchingNameDrivers.push(driverName)
        }
    } )
    return matchingNameDrivers;
}

const drivers = [
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

function matchName(driverArray, nameToMatch){
    let matchingNameDrivers = [];

    console.log(driverArray);

    driverArray.filter( function(driver){

        console.log(nameToMatch, driver.name)

        if(nameToMatch === driver.name){
            console.log("I found a match")
            matchingNameDrivers.push(driver)
        }
    })

    return matchingNameDrivers;
}

matchName(drivers, "Bobby");