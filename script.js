

const car = {
    engine: 'LS',
    turbo: 'Twin'
}
//This removal removes a specified part of an object (or multiple), and then returns it as a new array without the specified objects
//turbo is removed, newCar is the name of the updated array
const {turbo, ...newCar} = car;

console.log(newCar);

//The filter(Boolean) method removes an value that is false, null, undefined, 0, NaN, and "" then it returns it into a new array
const array = [1,2,3,4,null,5]

if (array.length === array.filter(Boolean).length) {
    console.log(1);
} else {
    console.log(2);
}

//This destructuring method allows for arrays to be destructured
//The first part is the array position and the second part is the name you want to call it
const engineArray = ['pistons', 'camshaft', 'header gasket', 'oilpan'];

const {0: thingsThatGoUpAndDown, 3: thingThatCatchesOil} = engineArray;
console.log(thingThatCatchesOil);
console.log(thingsThatGoUpAndDown);

//This destructing method copys an array and then removes values from the coppied array
//It does this by using commas 
const website = ['admins', 'customers'];

const [, ...removeAdminsFromWebsiteWithoutRemovingAdmins] = website;
console.log(removeAdminsFromWebsiteWithoutRemovingAdmins);


/*
JSON.stringify in this case takes 3 arguments
1st - the object or array being messed with
2nd - a replacer method: this allows for the developer to make a function that replaces in this case the "4 banger" key value to evo
3rd - a number or string for the amount of spaces you want to show in your console (meaning it just makes it easier to read)
*/
const engines = {
    '4 banger': '4G63',
    'inline-6': '2JZ',
    'V8': 'LS'
}

const replacer = (key, value) => key === '4 banger' ? 'evo' : value;
console.time()
const newEngines = JSON.stringify(engines, replacer, "     ");
console.log(newEngines);
