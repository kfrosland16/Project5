
/**
 *   @author Frosland, Katlyn (kfrosland@student.ncmich.edu)
 *   @version 0.0.2
 *   @summary Project 6 demo code || created: 12/12/2016
 *   @todo
 */

"use strict";
const PROMPT = require('readline-sync');
const IO = require('fs');  
const SERVICE_CAP = 750;
const MASTER_FILE_COLUMNS = 4;
const SECONDARY_FILE_COLUMNS = 3;
const FIRST_NAME = 1;
const LAST_NAME = 2;
const ID = 0;
const PRICE_PAID = 2;
const TOTAL_SPENT = 3;
let continueResponse;
let pricePaid;
let masterArray = [];
let secondaryArray = [];
let errorReports = [];

function main() {
    setContinueResponse();
    while (continueResponse === 1) {
        populateMasterArray();
        populateSecondaryArray();
        testingArrayInput();
        printArrays();
        writeMainFile();
        errorReport();
        setContinueResponse();
    }
    
}

main();

function setContinueResponse() {
    if (continueResponse) {
        continueResponse = -1;
        while (continueResponse !== 0 && continueResponse !== 1) {
            continueResponse = Number(PROMPT.question(`\nDo you want to continue? [0=no, 1=yes]: `));
        }
    } else {
        continueResponse = 1;
    }
}

function populateMasterArray() {
    let fileContents = IO.readFileSync(`MainFile.csv`, 'utf8');
    let lines = fileContents.toString().split(/\r?\n/); // Automatically creates SD array on newlines
    for (let i = 0; i < lines.length; i++) {
            masterArray.push(lines[i].toString().split(/,/));
        }
}

function populateSecondaryArray() {
    let fileContents = IO.readFileSync(`SecondaryFile.csv`, 'utf8');
    let lines = fileContents.toString().split(/\r?\n/); // Automatically creates SD array on newlines
    for (let i = 0; i < lines.length; i++) {
            secondaryArray.push(lines[i].toString().split(/,/));
        }
}

function testingArrayInput() {
    for (let i = 0; i < masterArray.length; i++) {
        for (let j = 0; j < secondaryArray.length; j++) {
            if(masterArray[i][ID] === secondaryArray[j][ID]){
                //let paid = Number(secondaryArray[j][PRICE_PAID]);
                //let spent = Number(masterArray[i][TOTAL_SPENT]);
                //let value = Number(paid + spent);
                masterArray[i][TOTAL_SPENT] = Number(masterArray[i][TOTAL_SPENT]) + Number(secondaryArray[j][PRICE_PAID]);
                console.log(`\nmatch to record: `);
            }
        }
    }
}
function writeMainFile() {
    for (let i = 0; i < masterArray.length -1; i++) {
        for (let j = 0; j < MASTER_FILE_COLUMNS; j++) {
            if (j < MASTER_FILE_COLUMNS - 1) {
                IO.writeFile(`MainFile.csv`, `${masterArray[i][j]},`, 'utf8');
            } else {
                IO.writeFile(`MainFile.csv`, masterArray[i][j], 'utf8');
            }
        }
        IO.writeFile(`MainFile.csv`, "\n", 'utf8');
    }
}

function printArrays() {
    for (let i = 0; i < masterArray.length -1; i++) {
        console.log(`record: ${i}`);
        for (let j = 0; j < MASTER_FILE_COLUMNS; j++) {
            console.log(masterArray[i][j]);
        }
        console.log(`\n`);
    }
}


function errorReport(){
    if (errorReports.length = 0) {
       console.log(`\nNo new entries: `);
    }
}
