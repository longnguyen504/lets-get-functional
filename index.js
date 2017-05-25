#!/usr/bin/env node

'use strict';

const customers = require("./data/customers.json");


/**
 * 1. Import your lodown module using the require() method, 
 *    using the string 'lodown-<my-username>', or whatever 
 *    name with which you published your npm lodown project.
 * 
 * 2. Solve all problems as outlined in the README.
 */
 const _ = require("lodown-longnguyen504-apr-24-17");
 
 
 function numMales(array) {
    return _.filter(array, function(customers){
         return customers.gender === 'male';
     }).length
 }
console.log(numMales(customers));

function numFemales(array) {
    return _.filter(array, function(customers) {
        return customers.gender === 'female';
    }).length
}
console.log(numFemales(customers));

// function youngest() {
//     var ages = _.pluck(customers, 'age')
//     var index;
//     _.reduce(ages, function(young, next, i){
//         if (young > next) {
//             index = i;
//             return next;
//         }
//         return young;
//     })
//     return (customers[index]['name']) + ' ' + customers[index]['age']
// }
// console.log(youngest());
function youngest(){
customers.sort(function(young, old) {
    customers.concat().sort(young, old);
    return young.age - old.age;
});
    return customers[0].name + ' ' + customers[0].age
    
};
console.log(youngest())
// function oldest() {
//     var ages = _.pluck(customers, 'age')
//     var index;
//     _.reduce(ages, function(old, next, i){
//         if (old < next){
//         index = i
//         return next
//         } 
//         return old;
//     })
//     return (customers[index]['name']) + ' ' + customers[index]['age']
// }
// console.log(oldest());
function oldest(){
customers.sort(function(young, old) {
     customers.concat().sort(young, old);
      return old.age - young.age;
    })
    return customers[0].name + ' ' + customers[0].age
    
};
console.log(oldest())


// function average(){
    var balances = customers.map(function(customers){
        return customers.balance.replace(/[^0-9-.]/g, '')
    });
    var average = balances.map(function(e, i, a){
        return e / a.length}).reduce(function(a,b){
            return a + b}, 0).toFixed(2)
            console.log('$' +average)
                

function custLetter(collection) {
    var letters = [];
    for (var i = 65; i < 91; i++) {
        letters.push(String.fromCharCode(i));
    }
    for (var j = 0; j < letters.length; j++){
            var results = _.filter(collection, function(customer) {
                return customer.name.charAt(0) == letters[j];
            }).length;
            if(results) {
                console.log(letters[j] + ' ' + results);
            }
    }
}
custLetter(customers);

function custFriendName(collection, letter) {
    var friends = _.map(collection, function(customer){
        return customer.friends;
    });
    var merge = [].concat.apply([], friends);
    var results = _.filter(merge, function(friend) {
        return friend.name.charAt(0) === letter;
    }).length;
    console.log(letter + ' ' + results);
}
custFriendName(customers, 'A');


console.log(customerFriends('Shelly Walton'));

function customerFriends() {
    var numFriends = 0;
    _.each(customers, function(customer){
        _.each(customer.friends, function(friend){
            _.each(customers, function(customerJ){
                if (customerJ.name === friend.name) numFriends++;
            });
        });
    });
    return numFriends;
}
console.log(customerFriends());

function topTags(amount) {
    var allTags = [];
    _.each(customers, function(customer){
      _.each(customer.tags, function(tag){
          allTags.push(tag);
      });
    });
    var uniques = _.unique(allTags);
    var uniqueCount = [];
    _.each(uniques, function(uniqueTag){
        var counter = 0;
        _.each(allTags, function(tag){
            if(tag === uniqueTag) counter++;
        });
        uniqueCount.push(counter);
    });
    var results = [];
    while (results.length < amount){
        var index = 0;
        _.reduce(uniqueCount, function(max, next, i){
            if(max < next){
                index = i;
                return next;
            }
            return max;
        });
        results.push(uniques[index]);
        uniques.splice(index,1);
        uniqueCount.splice(index,1);
    }
    return results;
}
console.log(topTags(3));

function countGender(array) {
    var genders = _.map(array, function (customer){
        return customer.gender;
    });
    return _.reduce(genders, function (e, i, a) {
        if (typeof e[i] == 'undefined') {
            e[i] = 1;
        } else {
            e[i] += 1;
        }
    return e;
    }, {});
}
console.log(countGender(customers));
