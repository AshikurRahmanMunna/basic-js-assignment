// Problem 1: ana to vori 
function anaToVori(ana) {
    if(typeof ana == 'string') {
        return 'Please Give a Number value';
    }
    else if(ana < 0) {
        return 'Please give a positive value';
    }
    const vori = 16;
    const result = ana / vori;
    return result;
}

const vori = anaToVori(32);
console.log(vori);

// problem 2: panda cost
function pandaCost(singaraQuantity, somuchaQuantity, jilapiQuantity) {
    if(typeof singaraQuantity == 'string' || typeof somuchaQuantity == 'string' || typeof jilapiQuantity == 'string') {
        return 'Please Give a Number Value';
    }
    else if(singaraQuantity < 0 || somuchaQuantity < 0 || jilapiQuantity < 0) {
        return 'Please Give a Positive Value';
    }
    const singaraPrice = 7;
    const somuchaPrice = 10;
    const jilapiPrice = 15;
    const singaraTotalPrice = singaraPrice * singaraQuantity;
    const somuchaTotalPrice = somuchaPrice * somuchaQuantity;
    const jilapiTotalPrice = jilapiPrice * jilapiQuantity;
    const totalPrice = singaraTotalPrice + somuchaTotalPrice + jilapiTotalPrice;
    return totalPrice;
}

const totalPrice = pandaCost(20, 25, 30);
console.log(totalPrice);

// Problem 3: picnic budget
function picnicBudget(peoples) {
    const cost1To100 = 5000;
    const cost101To200 = 4000;
    const cost201ToInfinite = 3000;


    if(typeof peoples == 'string') {
        return 'Please give a number value';
    }
    else if(peoples < 0) {
        return 'Please give a positive number';
    }
    else if(peoples >= 0 && peoples <= 100) {
        const totalCost = peoples * cost1To100;
        return totalCost;
    }
    else if(peoples > 100 && peoples <= 200) {
        const first100PeoplesCost = 100 * cost1To100;
        const restPeoples = peoples - 100;
        const second101To200PeoplesCost = restPeoples * cost101To200;
        const totalCost = first100PeoplesCost + second101To200PeoplesCost;
        return totalCost;
    }
    else if( peoples > 200 ) {
        const first100PeoplesCost = 100 * cost1To100;
        const second100PeoplesCost = cost101To200 * 100;
        const first200PeoplesCost = first100PeoplesCost + second100PeoplesCost;
        const restPeoples = peoples - 200;
        const greaterThan201PeoplesCost = restPeoples * cost201ToInfinite;
        const totalCost = first100PeoplesCost + second100PeoplesCost + greaterThan201PeoplesCost;
        return totalCost;
    }
}

const myPeoples = picnicBudget(250);
console.log(myPeoples);



// Problem 4: odd freind
function oddFriend(friendsArr) {
    if(typeof friendsArr == 'string') {
        return 'Please give a number value';
    }
    else if(friendsArr < 0) {
        return 'Please give a positive value';
    }
    for(i = 1; i <= 100; i+=2) {
        for (const element of friendsArr) {
            if(element.length % 2 != 0) {
                return element;
            }
        }
    }
}
const myFriends = oddFriend(['Kodoma','kodom', 'Kodom ali']);
console.log(myFriends);