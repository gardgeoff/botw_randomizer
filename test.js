const replace = require('replace-in-file');
const fs = require('fs');
function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
let monList = [
    'Enemy_Assassin_Azito_Middle',
    'Enemy_Assassin_Middle',
    'Enemy_Assassin_Senior',
    'Enemy_Assassin_Shooter_Azito_Junior',
    'Enemy_Assassin_Shooter_Junior',
    'Enemy_Bokoblin_Bone_Junior',
    'Enemy_Bokoblin_Bone_Junior_AllDay',
    'Enemy_Bokoblin_Guard_Junior',
    'Enemy_Bokoblin_Guard_Junior_Ambush',
    'Enemy_Bokoblin_Guard_Junior_TreeHouseTop',
    'Enemy_Bokoblin_Guard_Middle',
    'Enemy_Bokoblin_Guard_Middle_Ambush',
    'Enemy_Bokoblin_Junior',
    'Enemy_Bokoblin_Middle',
    'Enemy_Chuchu',
    'Enemy_Chuchu_Electric_Junior',
    'Enemy_Chuchu_Electric_Middle',
    'Enemy_Chuchu_Electric_Senior',
    'Enemy_Chuchu_Fire_Junior',
    'Enemy_Chuchu_Fire_Middle',
    'Enemy_Chuchu_Fire_Senior',
    'Enemy_Chuchu_Ice_Junior',
    'Enemy_Chuchu_Ice_Middle',
    'Enemy_Chuchu_Ice_Senior',
    'Enemy_Chuchu_Junior',
    'Enemy_Chuchu_Middle',
    'Enemy_Chuchu_Senior'
]

//counter for indexing array
let counter = 0;
//regexp that change based on array index
let currentRegex = new RegExp(monList[counter]+'$');


const options = {
    files: './modified/D-6_Static.bin',
    from: currentRegex,
    to: monList[getRandomInt(0, monList.length - 1)]
};
//checkfile() looks through the file for first case of variable "currentRegex"
//If it finds an isntance it executes runReplace() 
//If not it increases the array counter variable, reasigns the value of current Regex to the current index of monlist, and reruns the function
//If counter > monlist length the loop will end
function checkFile() {
    fs.readFile('D-6_Static.bin', 'utf8', (err, data) => {
        if (data.includes(currentRegex)) {
            console.log(`found ${monList[counter]}`)
            runReplace();
        } else if (counter < monList.length -1) {
            counter++;
            currentRegex = new RegExp(monList[counter]);
            checkFile();

        } else {
            console.log('no more to change');
        }
    })
}

//run replace acts as a 'change all instances of current regex'
//also adds a * to any modified unit so that it will not be altered again
//After it has replaced it will re run check file
function runReplace() {
    replace(options)
        .then(results => {
            console.log('Replacement results:', results);
            options.to = monList[getRandomInt(0, monList.length - 1)] + "*";
            checkFile();
        })
        .catch(error => {
            console.error('Error occurred:', error);
        });
}
checkFile()