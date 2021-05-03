window.$ = window.jQuery = require('jquery');
const replace = require('replace-in-file');
const fs = require('fs');
const cmd = require('node-cmd');
YAML = require('yamljs');

let monList = [
    // 'Enemy_Assassin_Azito_Middle',
    // 'Enemy_Assassin_Middle',
    // 'Enemy_Assassin_Shooter_Junior', 
    'Enemy_Bokoblin_Bone_Junior_AllDay',
    'Enemy_Bokoblin_Guard_Junior',
    'Enemy_Bokoblin_Guard_Middle',
    'Enemy_Bokoblin_Guard_Middle_Ambush',
    'Enemy_Bokoblin_Junior',
    'Enemy_Bokoblin_Middle',
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
    'Enemy_Giant_Junior',
    'Enemy_Giant_Middle',
    'Enemy_Giant_Senior',
    'Enemy_Golem_Fire',
    'Enemy_Golem_Ice',
    'Enemy_Golem_Junior',
    'Enemy_Golem_Middle',
    'Enemy_Golem_Senior',
    'Enemy_Golem_Little',
    'Enemy_Golem_Little_Fire',
    'Enemy_Golem_Little_Ice',
    'Enemy_Guardian_A',
    'Enemy_Guardian_A_Fixed_Moss',
    'Enemy_Guardian_A_Fixed_Sand',
    'Enemy_Guardian_A_Fixed_Snow',
    'Enemy_Guardian_A_Moss',
    'Enemy_Guardian_A_Sand',
    'Enemy_Guardian_A_Snow',
    'Enemy_Guardian_B',
    'Enemy_Guardian_C',
    'Enemy_Guardian_Mini_Baby',
    'Enemy_Guardian_Mini_Baby_Dark',
    'Enemy_Guardian_Mini_Junior',
    'Enemy_Guardian_Mini_Junior_Dark',
    'Enemy_Guardian_Mini_Junior_Wipe',
    'Enemy_Guardian_Mini_Middle',
    'Enemy_Guardian_Mini_Middle_Dark',
    'Enemy_Guardian_Mini_Senior',
    'Enemy_Guardian_Mini_Senior_Dark',
    'Enemy_Keese_AllDay',
    'Enemy_Keese_Electric_AllDay',
    'Enemy_Keese_Fire_AllDay',
    'Enemy_Keese_Ice_AllDay',
    'Enemy_Keese_Swarm_AllDay',
    'Enemy_Lizalfos_Bone_Junior',
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
    'Enemy_Lynel_Dark',
    'Enemy_Lynel_Junior',
    'Enemy_Lynel_Junior_Mountain',
    'Enemy_Lynel_Middle',
    'Enemy_Lynel_Senior',
    'Enemy_Moriblin_Dark',
    'Enemy_Moriblin_Junior',
    'Enemy_Moriblin_Middle',
    'Enemy_Moriblin_Senior',
    'Enemy_Moriblin_Senior_Volcano',
    'Enemy_Octarock_Desert',
    'Enemy_Octarock_Forest',
    'Enemy_Octarock_Snow',
    'Enemy_Octarock_Stone',
    'Enemy_Wizzrobe_Electric',
    'Enemy_Wizzrobe_Fire',
    'Enemy_Wizzrobe_Ice',
]
let mWeaponList = [
    //LSWORDS
    "Weapon_Lsword_001",
    "Weapon_Lsword_002",
    "Weapon_Lsword_003",
    "Weapon_Lsword_004",
    "Weapon_Lsword_005",
    "Weapon_Lsword_006",
    "Weapon_Lsword_010",
    "Weapon_Lsword_011",
    "Weapon_Lsword_012",
    "Weapon_Lsword_013",
    "Weapon_Lsword_014",
    "Weapon_Lsword_015",
    "Weapon_Lsword_016",
    "Weapon_Lsword_017",
    "Weapon_Lsword_018",
    "Weapon_Lsword_019",
    "Weapon_Lsword_020",
    "Weapon_Lsword_023",
    "Weapon_Lsword_024",
    "Weapon_Lsword_027",
    "Weapon_Lsword_029",
    "Weapon_Lsword_030",
    "Weapon_Lsword_031",
    "Weapon_Lsword_032",
    "Weapon_Lsword_033",
    "Weapon_Lsword_034",
    "Weapon_Lsword_035",
    "Weapon_Lsword_036",
    "Weapon_Lsword_037",
    "Weapon_Lsword_038",
    "Weapon_Lsword_041",
    "Weapon_Lsword_045",
    "Weapon_Lsword_047",
    "Weapon_Lsword_051",
    "Weapon_Lsword_054",
    "Weapon_Lsword_055",
    "Weapon_Lsword_056",
    "Weapon_Lsword_057",
    "Weapon_Lsword_059",
    "Weapon_Lsword_060",
    "Weapon_Lsword_074",
    "Weapon_Lsword_097",
    //SPEARS
    "Weapon_Spear_001",
    "Weapon_Spear_002",
    "Weapon_Spear_003",
    "Weapon_Spear_004",
    "Weapon_Spear_005",
    "Weapon_Spear_006",
    "Weapon_Spear_007",
    "Weapon_Spear_008",
    "Weapon_Spear_009",
    "Weapon_Spear_010",
    "Weapon_Spear_011",
    "Weapon_Spear_012",
    "Weapon_Spear_013",
    "Weapon_Spear_014",
    "Weapon_Spear_015",
    "Weapon_Spear_016",
    "Weapon_Spear_017",
    "Weapon_Spear_018",
    "Weapon_Spear_021",
    "Weapon_Spear_022",
    "Weapon_Spear_023",
    "Weapon_Spear_024",
    "Weapon_Spear_025",
    "Weapon_Spear_027",
    "Weapon_Spear_028",
    "Weapon_Spear_029",
    "Weapon_Spear_030",
    "Weapon_Spear_031",
    "Weapon_Spear_032",
    "Weapon_Spear_033",
    "Weapon_Spear_034",
    "Weapon_Spear_035",
    "Weapon_Spear_036",
    "Weapon_Spear_037",
    "Weapon_Spear_038",
    "Weapon_Spear_047",
    "Weapon_Spear_049",
    "Weapon_Spear_050",
    //SWORDS
    "Weapon_Sword_001",
    "Weapon_Sword_002",
    "Weapon_Sword_003",
    "Weapon_Sword_004",
    "Weapon_Sword_005",
    "Weapon_Sword_006",
    "Weapon_Sword_007",
    "Weapon_Sword_008",
    "Weapon_Sword_009",
    "Weapon_Sword_013",
    "Weapon_Sword_014",
    "Weapon_Sword_015",
    "Weapon_Sword_016",
    "Weapon_Sword_017",
    "Weapon_Sword_018",
    "Weapon_Sword_019",
    "Weapon_Sword_020",
    "Weapon_Sword_021",
    "Weapon_Sword_022",
    "Weapon_Sword_023",
    "Weapon_Sword_024",
    "Weapon_Sword_025",
    "Weapon_Sword_027",
    "Weapon_Sword_029",
    "Weapon_Sword_030",
    "Weapon_Sword_031",
    "Weapon_Sword_033",
    "Weapon_Sword_034",
    "Weapon_Sword_035",
    "Weapon_Sword_040",
    "Weapon_Sword_041",
    "Weapon_Sword_042",
    "Weapon_Sword_043",
    "Weapon_Sword_044",
    "Weapon_Sword_047",
    "Weapon_Sword_048",
    "Weapon_Sword_049",
    "Weapon_Sword_050",
    "Weapon_Sword_051",
    "Weapon_Sword_052",
    "Weapon_Sword_053",
    "Weapon_Sword_057",
    "Weapon_Sword_059",
    "Weapon_Sword_060",
    "Weapon_Sword_061",
    "Weapon_Sword_062",
    "Weapon_Sword_073"
]
shieldList = [
    "Weapon_Shield_001",
    "Weapon_Shield_002",
    "Weapon_Shield_003",
    "Weapon_Shield_004",
    "Weapon_Shield_005",
    "Weapon_Shield_006",
    "Weapon_Shield_007",
    "Weapon_Shield_008",
    "Weapon_Shield_009",
    "Weapon_Shield_013",
    "Weapon_Shield_014",
    "Weapon_Shield_015",
    "Weapon_Shield_016",
    "Weapon_Shield_017",
    "Weapon_Shield_018",
    "Weapon_Shield_021",
    "Weapon_Shield_022",
    "Weapon_Shield_023",
    "Weapon_Shield_025",
    "Weapon_Shield_026",
    "Weapon_Shield_030",
    "Weapon_Shield_031",
    "Weapon_Shield_032",
    "Weapon_Shield_033",
    "Weapon_Shield_034",
    "Weapon_Shield_035",
    "Weapon_Shield_036",
    "Weapon_Shield_037",
    "Weapon_Shield_038",
    "Weapon_Shield_040",
    "Weapon_Shield_041",
    "Weapon_Shield_042"
]
// nativeObject = YAML.load('../../staging/D-6_Static.bin');
// nativeObject.Objs.forEach(item => {
//     if (item.UnitConfigName === "Enemy_Bokoblin_Junior"){
//         item['!Parameters'].EquipItem1 = mWeaponList[getRandomInt(0, mWeaponList.length -1)]
//     }
// })
// yamlString = YAML.stringify(nativeObject, 4);
// fs.writeFile('./staging/D-6_Static.bin', yamlString, function(err){
//     if (err) return console.log(err);
// });

// let testOptions = {
//     files: "./staging/D-6_Static.bin",
//     from: / u /g,
//     to: " !u "
// }

// replace(testOptions).then(results => {
//     console.log(results)
// })

let completedFiles = 0;
//probably don't need this
let pauseCounter = 0;
//stores file paths for randomizing
let fileArr = [];
//, 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J' 
let mapTiles = ['D'];

//counter variable for mapTiles index
let currentFileLetterIndex = 0;
let currentFileLetter = mapTiles[currentFileLetterIndex];
//counter variable for current map file number (1-8)
let currentFileNumber = 1;
let staticOrDynamic = "Static";
let concatFileBin = `${currentFileLetter}-${currentFileNumber}_${staticOrDynamic}.bin`;
let concatFilesmuBin = `${currentFileLetter}-${currentFileNumber}_${staticOrDynamic}.smubin`;
//counter for indexing monlist array
let monListCounter = 0;
//regexp that change based on array index
let currentRegex = new RegExp(monList[monListCounter] + '[^_]');
let currentMon = monList[monListCounter];
let currentRandMon = monList[getRandomInt(0, monList.length - 1)] + '*'

//object to help keep track of actions and directories used on cmd
let cmdOptions = {
    actions: {
        compress: 'yml_to_byml',
        decompress: 'byml_to_yml',
    },
    directories: {
        unModifiedDir: './unmodified/',
        modifiedDir: './modified/aoc/0010/Map/MainField/',
        stagingDir: './staging/'
    },
}
//both objects passed in as function parameters for find and replace
//This one is used for randomization
const options = {
    files: `./staging/${concatFileBin}`,
    from: currentRegex,
    to: currentRandMon
}
//This one is used for removing asterisks after randomization
const remove = {
    files: fileArr,
    from: /\*/g,
    to: ""
}
let regexAst = /\*/g
let regexU = /!u/g
//basic function for getting random number
function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
//function for running decompression or compression on the command line
function boxGhost(fileNameOne, fileNameTwo, action, currentDir, destDir) {
    cmd.runSync(
        `${action} ${currentDir}${fileNameOne} ${destDir}${fileNameTwo}`
    )
}
//creates ending mod directory structure with a bat file
function makeDir() {
    cmd.runSync('createfolders.bat')
}
//checkfile() looks through the file for first case of variable "currentRegex"
//If it finds an instance it executes runReplace() 
//If not it increases the array counter variable, reasigns the value of current Regex to the current index of monlist, and reruns the function
//If counter > monlist length the loop will end
function checkFile() {
    if (currentFileNumber < 9) {
        concatFileBin = `${currentFileLetter}-${currentFileNumber}_${staticOrDynamic}.bin`
        options.files = `./staging/${concatFileBin}`
    }
    fs.readFile(`./staging/${concatFileBin}`, 'utf8', (err, data) => {
        if (err) {
            console.log(err);
        }
        if (currentRegex.test(data)) {
            runReplace();
        } else if (monListCounter < monList.length - 1) {
            monListCounter++;
            currentRegex = new RegExp(monList[monListCounter] + '[^_]');
            options.from = currentRegex;
            currentMon = monList[monListCounter];
            checkFile();
        } else {
            if (staticOrDynamic === "Static") {
                staticOrDynamic = "Dynamic";
            } else if (staticOrDynamic === "Dynamic") {
                staticOrDynamic = "Static";
                currentFileNumber++;
            }
            monListCounter = 0;
            console.log('no more to change');
            completedFiles++;
            $('.completed-files').html(completedFiles)
            randomize()
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
//decompress all .smubin files in unmodified folder and moves them to staging folder
function decompress() {
    concatFileBin = `${currentFileLetter}-${currentFileNumber}_${staticOrDynamic}.bin`
    concatFilesmuBin = `${currentFileLetter}-${currentFileNumber}_${staticOrDynamic}.smubin`
    if (currentFileLetterIndex <= mapTiles.length - 1) {
        if (currentFileNumber <= 8) {
            console.log(`decompressing ${concatFilesmuBin}`)
            boxGhost(concatFilesmuBin, concatFileBin, cmdOptions.actions.decompress, cmdOptions.directories.unModifiedDir, cmdOptions.directories.stagingDir)
            fileArr.push(`./staging/${concatFileBin}`);
            if (staticOrDynamic === "Static") {
                staticOrDynamic = "Dynamic";
            } else if (staticOrDynamic === "Dynamic") {
                staticOrDynamic = "Static";
                currentFileNumber++;
            }
        } else if (currentFileNumber > 8) {
            staticOrDynamic = "Static"
            console.log('End of this tile series. Moving to next letter.')
            currentFileLetterIndex++;
            currentFileNumber = 1;
            currentFileLetter = mapTiles[currentFileLetterIndex]
            concatFileBin = `${currentFileLetter}-${currentFileNumber}_${staticOrDynamic}.bin`
            concatFilesmuBin = `${currentFileLetter}-${currentFileNumber}_${staticOrDynamic}.smubin`
        }
    } else {
        pauseCounter++
        if (pauseCounter > 5000) {
            //returning variables to default values
            currentFileLetterIndex = 0;
            currentFileLetter = mapTiles[currentFileLetterIndex]
            currentFileNumber = 1;
            staticOrDynamic = "Static"
            concatFileBin = `${currentFileLetter}-${currentFileNumber}_${staticOrDynamic}.bin`
            concatFilesmuBin = `${currentFileLetter}-${currentFileNumber}_${staticOrDynamic}.smubin`
            console.log('done!')
            remove.from = /!u/g
            remove.to = "u"
            replace(remove)

            return
        }
    }
    decompress();
}
function randomize() {

    if (currentFileLetterIndex <= mapTiles.length - 1) {
        if (currentFileNumber <= 8) {
            console.log(`randomizing ${concatFileBin}`)
            checkFile();

        } else if (currentFileNumber > 8) {
            console.log('End of this tile series. Moving to next letter.')
            currentFileLetterIndex++;
            currentFileNumber = 1;
            currentFileLetter = mapTiles[currentFileLetterIndex]
            concatFileBin = `${currentFileLetter}-${currentFileNumber}_${staticOrDynamic}.bin`
            randomize();
        }
    } else {
        console.log('all done randomizing! Removing asterisks')
        remove.from = regexAst
        remove.to = ""
        replace(remove)
            .then(results => {
                console.log(results)
                remove.from = / u /g
                remove.to = " !u "
                replace(remove)
            })
            .catch(err => {
                console.log(`error occured with replacing asterisks: ${err}`)
            })
        currentFileLetterIndex = 0;
        currentFileLetter = mapTiles[currentFileLetterIndex]
        currentFileNumber = 1;
        staticOrDynamic = "Static"
        concatFileBin = `${currentFileLetter}-${currentFileNumber}_${staticOrDynamic}.bin`
        concatFilesmuBin = `${currentFileLetter}-${currentFileNumber}_${staticOrDynamic}.smubin`
        alert('done!')
        $('.state').html('Ready');
        return
    }
}
function compress() {
    concatFileBin = `${currentFileLetter}-${currentFileNumber}_${staticOrDynamic}.bin`
    concatFilesmuBin = `${currentFileLetter}-${currentFileNumber}_${staticOrDynamic}.smubin`
    if (currentFileLetterIndex <= mapTiles.length - 1) {
        if (currentFileNumber <= 8) {
            console.log(`comrpessing ${concatFileBin}`)
            boxGhost(concatFileBin, concatFilesmuBin, cmdOptions.actions.compress, cmdOptions.directories.stagingDir, `${cmdOptions.directories.modifiedDir}${currentFileLetter}-${currentFileNumber}/`)
            if (staticOrDynamic === "Static") {
                staticOrDynamic = "Dynamic";
            } else if (staticOrDynamic === "Dynamic") {
                staticOrDynamic = "Static";
                currentFileNumber++;
            }
        } else if (currentFileNumber > 8) {
            staticOrDynamic = "Static"
            console.log('End of this tile series. Moving to next letter.')
            currentFileLetterIndex++;
            currentFileNumber = 1;
            currentFileLetter = mapTiles[currentFileLetterIndex]
            concatFileBin = `${currentFileLetter}-${currentFileNumber}_${staticOrDynamic}.bin`
            concatFilesmuBin = `${currentFileLetter}-${currentFileNumber}_${staticOrDynamic}.smubin`
        }
    } else {
        console.log('done compressing have a nice day!')
        return
    }
    compress()
}
// makeDir();
// compress()
$('.currDir').on('click', () => {
    window.postMessage({
        type: 'select-dirs'
    })
})
$('.decompress').on('click', () => {
    makeDir();
    decompress()
})
$('.randomize').on('click', () => {
    randomize();
})
$('.compress').on('click', () => {
    compress();
})