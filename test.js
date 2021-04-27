const replace = require('replace-in-file');
const fs = require('fs');
const cmd = require('node-cmd');

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
    'Enemy_Chuchu_Senior',
    'Enemy_Golem_Junior',
    'Enemy_Golem_Little',
    'Enemy_Golem_Little_Fire',
    'Enemy_Golem_Little_Ice',
    'Enemy_Guardian_A',
    'Enemy_Guardian_A_Fixed_Moss',
    'Enemy_Guardian_A_Fixed_Sand',
    'Enemy_Guardian_A_Fixed_Snow',
    'Enemy_Guardian_A_Moss',
    'Enemy_Guardian_A_Old',
    'Enemy_Guardian_A_Sand',
    'Enemy_Guardian_A_Snow',
    'Enemy_Guardian_B',
    'Enemy_Guardian_C',
    'Enemy_Guardian_Mini',
    'Enemy_Guardian_Mini_Baby',
    'Enemy_Guardian_Mini_Baby_Dark',
    'Enemy_Guardian_Mini_Junior',
    'Enemy_Guardian_Mini_Junior_Dark',
    'Enemy_Guardian_Mini_Junior_Wipe',
    'Enemy_Guardian_Mini_Middle',
    'Enemy_Guardian_Mini_Middle_Dark',
    'Enemy_Guardian_Mini_Practice',
    'Enemy_Guardian_Mini_Senior',
    'Enemy_Guardian_Mini_Senior_Dark',
    'Enemy_Keese',
    'Enemy_Keese_AllDay',
    'Enemy_Keese_Electric',
    'Enemy_Keese_Electric_AllDay',
    'Enemy_Keese_Fire',
    'Enemy_Keese_Fire_AllDay',
    'Enemy_Keese_Ice',
    'Enemy_Keese_Ice_AllDay',
    'Enemy_Keese_Swarm',
    'Enemy_Keese_Swarm_AllDay',
    'Enemy_Keese_Swarm_AllDay_HeapMeasure',
    'Enemy_Keese_Swarm_HeapMeasure',
    'Enemy_Lizalfos',
    'Enemy_Lizalfos_Bone',
    'Enemy_Lizalfos_Bone_Junior',
    'Enemy_Lizalfos_Bone_Junior_Head',
    'Enemy_Lizalfos_Dark',
    'Enemy_Lizalfos_Electric',
    'Enemy_Lizalfos_Electric_ForestTower',
    'Enemy_Lizalfos_Fire',
    'Enemy_Lizalfos_Fire_Guard_Ambush',
    'Enemy_Lizalfos_Guard_Junior',
    'Enemy_Lizalfos_Guard_Junior_LongVisibility',
    'Enemy_Lizalfos_Guard_Middle_LongVisibility',
    'Enemy_Lizalfos_Ice',
    'Enemy_Lizalfos_Junior',
    'Enemy_Lizalfos_Junior_Guard_Ambush',
    'Enemy_Lizalfos_Middle',
    'Enemy_Lizalfos_Senior',
    'Enemy_Lynel',
    'Enemy_Lynel_Dark',
    'Enemy_Lynel_Junior',
    'Enemy_Lynel_Junior_Mountain',
    'Enemy_Lynel_Middle',
    'Enemy_Lynel_Senior',
    'Enemy_Moriblin',
    'Enemy_Moriblin_Bone',
    'Enemy_Moriblin_Bone_Junior',
    'Enemy_Moriblin_Bone_Junior_Head',
    'Enemy_Moriblin_Dark',
    'Enemy_Moriblin_Junior',
    'Enemy_Moriblin_Middle',
    'Enemy_Moriblin_Senior',
    'Enemy_Moriblin_Senior_Volcano',
    'Enemy_Octarock',
    'Enemy_Octarock_Desert',
    'Enemy_Octarock_Forest',
    'Enemy_Octarock_Snow',
    'Enemy_Octarock_Stone',
    'Enemy_Wizzrobe',
    'Enemy_Wizzrobe_Electric',
    'Enemy_Wizzrobe_Electric_Senior',
    'Enemy_Wizzrobe_Fire',
    'Enemy_Wizzrobe_Fire_Senior',
    'Enemy_Wizzrobe_Ice',
    'Enemy_Wizzrobe_Ice_Senior'
]
let cmdOptions = {
    actions: {
        compress: 'yml_to_byml',
        decompress: 'byml_to_yml',
    },
    directories: {
        unModifiedDir: './unmodified/',
        modifiedDir: './modified/',
        stagingDir: './staging/'
    },
}

let mapTiles = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J']
//counter variable for mapTiles index
let currentFileLetterIndex = 0;
let currentFileLetter = mapTiles[currentFileLetterIndex]
//counter variable for current map file number (1-8)
let currentFileNumber = 1;
let staticOrDynamic = "Static"
let smubinOrBin = "smubin"
let concatFileBin = `${currentFileLetter}-${currentFileNumber}_${staticOrDynamic}.bin`
let concatFilesmuBin = `${currentFileLetter}-${currentFileNumber}_${staticOrDynamic}.smubin`


//counter for indexing monlist array
let monListCounter = 0;
//regexp that change based on array index
let currentRegex = new RegExp(monList[monListCounter] + '[^_]');


let currentMon = monList[monListCounter];
let currentRandMon = monList[getRandomInt(0, monList.length - 1)] + '*'

//options for find and replace 
const options = {
    files: `./staging/${concatFileBin}`,
    from: currentRegex,
    to: currentRandMon
}


//function for running console commands
function runconsole(fileNameOne, fileNameTwo, action, currentDir, destDir) {
    console.log('running command')
    cmd.runSync(
        `${action} ${currentDir}${fileNameOne} ${destDir}${fileNameTwo}`
    )
}

//checkfile() looks through the file for first case of variable "currentRegex"
//If it finds an isntance it executes runReplace() 
//If not it increases the array counter variable, reasigns the value of current Regex to the current index of monlist, and reruns the function
//If counter > monlist length the loop will end

function checkFile() {
    fs.readFile(`./staging/A-1_Static.bin`, 'utf8', (err, data) => {
        if(err) {
            console.log(err);
        }
        console.log(data)



        if (currentRegex.test(data)) {
            console.log(`found ${monList[monListCounter]} changing to ${currentRandMon}`)

            runReplace();
        } else if (monListCounter < monList.length - 1) {
            monListCounter++;
            currentRegex = new RegExp(monList[monListCounter] + '[^_]');
            options.from = currentRegex;
            currentMon = monList[monListCounter];
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
            console.log(results)
            currentRandMon = monList[getRandomInt(0, monList.length - 1)] + "*";
            options.to = currentRandMon
            checkFile();

        })
        .catch(error => {
            console.error('Error occurred:', error);
        });
}

let state = "decompress"
let pauseCounter = 0;
//the main program logic executes within this loop depending on what state is
function mainLoop() {


    concatFileBin = `${currentFileLetter}-${currentFileNumber}_${staticOrDynamic}.bin`
    concatFilesmuBin = `${currentFileLetter}-${currentFileNumber}_${staticOrDynamic}.smubin`
    if (state === "decompress") {
        if (currentFileLetterIndex <= mapTiles.length) {
            if (currentFileNumber <= 8) {
                if (staticOrDynamic === "Static") {
                    console.log(`decompressing ${concatFilesmuBin}`)
                    runconsole(concatFilesmuBin, concatFileBin, cmdOptions.actions.decompress, cmdOptions.directories.unModifiedDir, cmdOptions.directories.stagingDir)
                    staticOrDynamic = "Dynamic";
                } else if (staticOrDynamic === "Dynamic") {
                    console.log(`decompressing ${concatFilesmuBin}`)
                    runconsole(concatFilesmuBin, concatFileBin, cmdOptions.actions.decompress, cmdOptions.directories.unModifiedDir, cmdOptions.directories.stagingDir)
                    staticOrDynamic = "Static";
                    currentFileNumber++
                }
            } else if (currentFileNumber > 8) {
                console.log('End of this tile series. Moving to next letter.')
                currentFileLetterIndex++;
                currentFileNumber = 1;
                currentFileLetter = mapTiles[currentFileLetterIndex]
                concatFileBin = `${currentFileLetter}-${currentFileNumber}_${staticOrDynamic}.bin`
                concatFilesmuBin = `${currentFileLetter}-${currentFileNumber}_${staticOrDynamic}.smubin`
            }
        }

        state = 'randomize'
    } else if (state === "randomize") {
       
     checkFile();

    } else {
        return
    }
    mainLoop();


}
// mainLoop();
mainLoop();