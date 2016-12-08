/**
 * Created by Katlyn on 11/14/2016
 *   @author Katlyn Frosland (kfrosland@student.ncmich.edu)
 *   @version 0.0.2
 *   @summary Project 4 demo code || created: 03.16.2016
 *   @todo
 */

"use strict";
const PROMPT = require('readline-sync');

let movieTitles = [], currentUserRating = [], totalRating = [], numOfRatings = [], averageRating = [];
let continueResponse, userResponse, currentMovie;

function main() {
    if (continueResponse == null) {
        populateMovieTitles();
        setContinueResponse();
    }
    while (continueResponse == 1) {
        setMenu();
        if(userResponse == 1)
            seeRatings();
        if(userResponse == 2)
            setRatings();
        setContinueResponse();
    }
}

main();

function setContinueResponse() {
    if (continueResponse != null) {
        continueResponse = -1;
        while (continueResponse !== 0 && continueResponse !== 1) {
            continueResponse = Number(PROMPT.question(`\nDo you want to continue? [0=no, 1=yes]: `));
        }
    } else {
        continueResponse = 1;
    }
}

function populateMovieTitles() {
    movieTitles[0] = 'The Grinch';
    movieTitles[1] = 'Elf';
    movieTitles[2] = 'Santa Clause';
    movieTitles[3] = 'Blended';
    movieTitles[4] = 'The House Bunny';
    movieTitles[5] = 'Hocus Pocus';
    movieTitles[6] = 'Tangled';
    movieTitles[7] = 'Star Wars';
    movieTitles[8] = 'Home Alone';
    movieTitles[9] = 'Peter Pan';
    movieTitles[10] = 'Frozen';
}

function setMenu() {
    userResponse = -1;
    userResponse = PROMPT.questionInt(`\nWelcome to the movie Kiosk! Would you like to rate a movie or see ratings? 
                                        \n1. See Current Ratings\n2.Rate a Movie\nYour answer: `);
    if(userResponse == 1){
        console.log('\nWhat movie do you want to see?' );
        for (let i=0; i < movieTitles.length; i++){
            console.log(`${i}. ${movieTitles[i]}`);
        }
        currentMovie = -1;
        while (currentMovie < 0 || currentMovie > 10) {
            currentMovie = PROMPT.questionInt(`\nEnter number: `);
        }
        console.log(`You have chosen ${movieTitles[currentMovie]}`);
    }
    else if (userResponse == 2){
        console.log(`\nWhat movie do you want to rate? `);
        for (let i=0; i < movieTitles.length; i++){
            console.log(`${i}. ${movieTitles[i]}`);
        }
        currentMovie = -1;
        while (currentMovie < 0 || currentMovie > 10) {
            currentMovie = PROMPT.questionInt(`\nEnter number: `);
        }
        console.log(`You have chosen ${movieTitles[currentMovie]}`);
    }
    else {
        console.log(`\nWrong answer. Try again.`);
        return setMenu();
    }
    if (totalRating[currentMovie] == null)
        totalRating[currentMovie] = -1;
    if (numOfRatings[currentMovie] == null)
        numOfRatings[currentMovie] = 0;
}

function seeRatings() {
    averageRating[currentMovie] = totalRating[currentMovie] / numOfRatings[currentMovie];
    if (totalRating[currentMovie] == -1){
        console.log(`\nThis movie has not been rated yet: `);
        return main();
    }
    console.log(`\nThe average rating of ${movieTitles[currentMovie]} is ${averageRating[currentMovie]}. It has been rated ${numOfRatings[currentMovie]} time(s). `);
}

function setRatings() {
    userResponse = -1;
    userResponse = PROMPT.questionInt(`\nHow would you rate ${movieTitles[currentMovie]} 0-5?\nYour answer:  `);
    if (userResponse < 0 || userResponse > 5){
        console.log(`\n That was an incorrect answer please try again`);
        return setRatings();
    }
    if (totalRating[currentMovie] == -1) {
        totalRating[currentMovie] = 0;
    }
    totalRating[currentMovie] = totalRating[currentMovie] + userResponse;
    numOfRatings[currentMovie]++;
    console.log(`\nThank you for rating ${movieTitles[currentMovie]}.`);
}