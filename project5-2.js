/**
 * Created by Katlyn on 11/14/2016
 *   @author Katlyn Frosland (kfrosland@student.ncmich.edu)
 *   @version 0.0.2
 *   @summary Project 5 demo code || created: 12.07.2016
 *   @todo
 */

"use strict";
const PROMPT = require('readline-sync');

let prices = [];
let passengers, zones;

function main() {
    welcome();
    populatePrices();
    setPassengers();
    setZones();
    printShowCharge();
}

main();

function welcome() {
    console.log(`\nWelcome to The MidAmerica Bus Company: `);
}

function populatePrices() {
    prices[0] = [];
    prices[1] = [];
    prices[2] = [];
    prices[3] = [];
    prices[0][0] = 7.50;
    prices[0][1] = 10.00;
    prices[0][2] = 12.00;
    prices[0][3] = 12.75;
    prices[1][0] = 14.00;
    prices[1][1] = 18.50;
    prices[1][2] = 22.00;
    prices[1][3] = 23.00;
    prices[2][0] = 20.00;
    prices[2][1] = 21.00;
    prices[2][2] = 32.00;
    prices[2][3] = 33.00;
    prices[3][0] = 35.00;
    prices[3][1] = 27.50;
    prices[3][2] = 36.00;
    prices[3][3] = 37.00;
}

function setPassengers() {
    passengers = PROMPT.questionInt(`\nHow many passengers do you have with you? Enter a number 1-4: `);
    if (passengers > 4 || passengers < 1){
        console.log(`\nIncorrect input please try again: `);
        return setPassengers();
    }
    else {
        passengers = passengers - 1;
    }
}

function setZones() {
    zones = PROMPT.question(`\nHow many Zones have you crossed? Enter a number 0-3: `);
    if (zones > 3 || zones < 0) {
        console.log(`\nIncorrect input please try again: `);
        return setZones();
    }
}

function printShowCharge() {
    console.log(`\nYour ticket price today is $${prices[passengers][zones]}.\nThank you for using The MidAmerica Bus Company! `);
}