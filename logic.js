window.$ = window.jQuery = require("jquery");
const replace = require("replace-in-file");
const fs = require("fs");
const cmd = require("node-cmd");
yaml = require("js-yaml");
let monList = [
  "Enemy_Assassin_Azito_Middle",
  // "Enemy_Assassin_Junior",
  // "Enemy_Assassin_Middle",
  // "Enemy_Assassin_Shooter_Junior",
  "Enemy_Bokoblin_Bone_Junior_AllDay",
  "Enemy_Bokoblin_Guard_Junior",
  "Enemy_Bokoblin_Guard_Middle",
  "Enemy_Bokoblin_Guard_Middle_Ambush",
  "Enemy_Bokoblin_Junior",
  "Enemy_Bokoblin_Middle",
  "Enemy_Chuchu_Electric_Junior",
  "Enemy_Chuchu_Electric_Middle",
  "Enemy_Chuchu_Electric_Senior",
  "Enemy_Chuchu_Fire_Junior",
  "Enemy_Chuchu_Fire_Middle",
  "Enemy_Chuchu_Fire_Senior",
  "Enemy_Chuchu_Ice_Junior",
  "Enemy_Chuchu_Ice_Middle",
  "Enemy_Chuchu_Ice_Senior",
  "Enemy_Chuchu_Junior",
  "Enemy_Chuchu_Middle",
  "Enemy_Chuchu_Senior",
  "Enemy_Giant_Junior",
  "Enemy_Giant_Middle",
  "Enemy_Giant_Senior",
  "Enemy_Golem_Fire",
  "Enemy_Golem_Ice",
  "Enemy_Golem_Junior",
  "Enemy_Golem_Middle",
  "Enemy_Golem_Senior",
  "Enemy_Golem_Little",
  "Enemy_Golem_Little_Fire",
  "Enemy_Golem_Little_Ice",
  "Enemy_Guardian_A",
  "Enemy_Guardian_A_Fixed_Moss",
  "Enemy_Guardian_A_Fixed_Sand",
  "Enemy_Guardian_A_Fixed_Snow",
  "Enemy_Guardian_A_Moss",
  "Enemy_Guardian_A_Sand",
  "Enemy_Guardian_A_Snow",
  "Enemy_Guardian_B",
  "Enemy_Guardian_C",
  "Enemy_Guardian_Mini_Baby",
  "Enemy_Guardian_Mini_Baby_Dark",
  "Enemy_Guardian_Mini_Junior",
  "Enemy_Guardian_Mini_Junior_Dark",
  "Enemy_Guardian_Mini_Junior_Wipe",
  "Enemy_Guardian_Mini_Middle",
  "Enemy_Guardian_Mini_Middle_Dark",
  "Enemy_Guardian_Mini_Senior",
  "Enemy_Guardian_Mini_Senior_Dark",
  "Enemy_Keese_AllDay",
  "Enemy_Keese_Electric_AllDay",
  "Enemy_Keese_Fire_AllDay",
  "Enemy_Keese_Ice_AllDay",
  "Enemy_Keese_Swarm_AllDay",
  "Enemy_Lizalfos_Bone_Junior",
  "Enemy_Lizalfos_Dark",
  "Enemy_Lizalfos_Electric",
  "Enemy_Lizalfos_Electric_ForestTower",
  "Enemy_Lizalfos_Fire",
  "Enemy_Lizalfos_Fire_Guard_Ambush",
  "Enemy_Lizalfos_Guard_Junior",
  "Enemy_Lizalfos_Guard_Junior_LongVisibility",
  "Enemy_Lizalfos_Guard_Middle_LongVisibility",
  "Enemy_Lizalfos_Ice",
  "Enemy_Lizalfos_Junior",
  "Enemy_Lizalfos_Junior_Guard_Ambush",
  "Enemy_Lizalfos_Middle",
  "Enemy_Lizalfos_Senior",
  "Enemy_Lynel_Dark",
  "Enemy_Lynel_Junior",
  "Enemy_Lynel_Junior_Mountain",
  "Enemy_Lynel_Middle",
  "Enemy_Lynel_Senior",
  "Enemy_Moriblin_Dark",
  "Enemy_Moriblin_Junior",
  "Enemy_Moriblin_Middle",
  "Enemy_Moriblin_Senior",
  "Enemy_Moriblin_Senior_Volcano",
  "Enemy_Octarock_Desert",
  "Enemy_Octarock_Forest",
  "Enemy_Octarock_Snow",
  "Enemy_Octarock_Stone",
  "Enemy_Wizzrobe_Electric",
  "Enemy_Wizzrobe_Fire",
  "Enemy_Wizzrobe_Ice",
];
let monListMelee = [
  "Enemy_Assassin_Azito_Middle",
  "Enemy_Assassin_Junior",
  "Enemy_Assassin_Middle",
  "Enemy_Bokoblin_Bone_Junior_AllDay",
  "Enemy_Bokoblin_Guard_Junior",
  "Enemy_Bokoblin_Guard_Middle",
  "Enemy_Bokoblin_Guard_Middle_Ambush",
  "Enemy_Bokoblin_Junior",
  "Enemy_Bokoblin_Middle",
  "Enemy_Guardian_Mini_Baby",
  "Enemy_Guardian_Mini_Baby_Dark",
  "Enemy_Guardian_Mini_Junior",
  "Enemy_Guardian_Mini_Junior_Dark",
  "Enemy_Guardian_Mini_Junior_Wipe",
  "Enemy_Guardian_Mini_Middle",
  "Enemy_Guardian_Mini_Middle_Dark",
  "Enemy_Guardian_Mini_Senior",
  "Enemy_Guardian_Mini_Senior_Dark",
  "Enemy_Lizalfos_Bone_Junior",
  "Enemy_Lizalfos_Dark",
  "Enemy_Lizalfos_Electric",
  "Enemy_Lizalfos_Electric_ForestTower",
  "Enemy_Lizalfos_Fire",
  "Enemy_Lizalfos_Fire_Guard_Ambush",
  "Enemy_Lizalfos_Guard_Junior",
  "Enemy_Lizalfos_Guard_Junior_LongVisibility",
  "Enemy_Lizalfos_Guard_Middle_LongVisibility",
  "Enemy_Lizalfos_Ice",
  "Enemy_Lizalfos_Junior",
  "Enemy_Lizalfos_Junior_Guard_Ambush",
  "Enemy_Lizalfos_Middle",
  "Enemy_Lizalfos_Senior",
  "Enemy_Moriblin_Dark",
  "Enemy_Moriblin_Junior",
  "Enemy_Moriblin_Middle",
  "Enemy_Moriblin_Senior",
];
let monListRanged = [
  "Enemy_Bokoblin_Bone_Junior_AllDay",
  "Enemy_Bokoblin_Guard_Junior",
  "Enemy_Bokoblin_Guard_Middle",
  "Enemy_Bokoblin_Guard_Middle_Ambush",
  "Enemy_Bokoblin_Junior",
  "Enemy_Bokoblin_Middle",
  "Enemy_Lizalfos_Bone_Junior",
  "Enemy_Lizalfos_Dark",
  "Enemy_Lizalfos_Electric",
  "Enemy_Lizalfos_Electric_ForestTower",
  "Enemy_Lizalfos_Fire",
  "Enemy_Lizalfos_Fire_Guard_Ambush",
  "Enemy_Lizalfos_Guard_Junior",
  "Enemy_Lizalfos_Guard_Junior_LongVisibility",
  "Enemy_Lizalfos_Guard_Middle_LongVisibility",
  "Enemy_Lizalfos_Ice",
  "Enemy_Lizalfos_Junior",
  "Enemy_Lizalfos_Junior_Guard_Ambush",
  "Enemy_Lizalfos_Middle",
  "Enemy_Lizalfos_Senior",
];
let monListLynel = [
  "Enemy_Lynel_Dark",
  "Enemy_Lynel_Junior",
  "Enemy_Lynel_Junior_Mountain",
  "Enemy_Lynel_Middle",
  "Enemy_Lynel_Senior",
];
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
  "Weapon_Sword_073",
];
rWeaponList = [
  "Weapon_Bow_001",
  "Weapon_Bow_002",
  "Weapon_Bow_003",
  "Weapon_Bow_004",
  "Weapon_Bow_006",
  "Weapon_Bow_009",
  "Weapon_Bow_011",
  "Weapon_Bow_013",
  "Weapon_Bow_014",
  "Weapon_Bow_015",
  "Weapon_Bow_016",
  "Weapon_Bow_017",
  "Weapon_Bow_023",
  "Weapon_Bow_026",
  "Weapon_Bow_027",
  "Weapon_Bow_028",
  "Weapon_Bow_029",
  "Weapon_Bow_030",
  "Weapon_Bow_032",
  "Weapon_Bow_033",
  "Weapon_Bow_035",
  "Weapon_Bow_036",
  "Weapon_Bow_038",
  "Weapon_Bow_040",
  "Weapon_Bow_071",
  "Weapon_Bow_072",
  "Weapon_Bow_074",
];
let weaponRods = [
  "Weapon_Sword_060",
  "Weapon_Sword_061",
  "Weapon_Sword_062",
  "Weapon_Sword_048",
  "Weapon_Sword_049",
  "Weapon_Sword_050",
];
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
  "Weapon_Shield_042",
];
let chestTypes = [
  "TBox_Field_Enemy",
  "TBox_Field_Iron",
  "TBox_Field_Stone",
  "TBox_Field_Wood",
];
let armors = [
  "Armor_001_Head",
  "Armor_001_Lower",
  "Armor_001_Upper",
  "Armor_005_Head",
  "Armor_005_Lower",
  "Armor_005_Upper",
  "Armor_006_Head",
  "Armor_006_Lower",
  "Armor_006_Upper",
  "Armor_008_Head",
  "Armor_008_Lower",
  "Armor_008_Upper",
  "Armor_009_Head",
  "Armor_009_Lower",
  "Armor_009_Upper",
  "Armor_011_Head",
  "Armor_011_Lower",
  "Armor_011_Upper",
  "Armor_012_Head",
  "Armor_012_Lower",
  "Armor_012_Upper",
  "Armor_014_Head",
  "Armor_014_Lower",
  "Armor_014_Upper",
  "Armor_017_Head",
  "Armor_017_Lower",
  "Armor_017_Upper",
  "Armor_020_Head",
  "Armor_020_Lower",
  "Armor_020_Upper",
  "Armor_021_Head",
  "Armor_021_Lower",
  "Armor_021_Upper",
  "Armor_022_Head",
  "Armor_024_Head",
  "Armor_025_Head",
  "Armor_026_Head",
  "Armor_027_Head",
  "Armor_028_Head",
  "Armor_029_Head",
  "Armor_044_Upper",
  "Armor_046_Head",
  "Armor_046_Lower",
  "Armor_046_Upper",
  "Armor_048_Head",
  "Armor_048_Lower",
  "Armor_048_Upper",
  "Armor_049_Lower",
  "Armor_053_Head",
  "Armor_053_Lower",
  "Armor_053_Upper",
  "Armor_055_Head",
  "Armor_056_Head",
  "Armor_160_Head",
  "Armor_160_Lower",
  "Armor_160_Upper",
  "Armor_200_Head",
  "Armor_200_Lower",
  "Armor_200_Upper",
  "Armor_205_Head",
  "Armor_205_Lower",
  "Armor_205_Upper",
  "Armor_210_Head",
  "Armor_210_Lower",
  "Armor_210_Upper",
  "Armor_215_Head",
  "Armor_215_Lower",
  "Armor_215_Upper",
  "Armor_220_Head",
  "Armor_225_Head",
  "Armor_225_Lower",
  "Armor_225_Upper",
  "Armor_230_Head",
  "Armor_230_Lower",
  "Armor_230_Upper",
  "Armor_215_Head",
  "Armor_215_Lower",
  "Armor_215_Upper",
];
let items = [
  "Animal_Insect_A",
  "Animal_Insect_AA",
  "Animal_Insect_AB",
  "Animal_Insect_B",
  "Animal_Insect_C",
  "Animal_Insect_E",
  "Animal_Insect_F",
  "Animal_Insect_G",
  "Animal_Insect_H",
  "Animal_Insect_I",
  "Animal_Insect_K",
  "Animal_Insect_M",
  "Animal_Insect_N",
  "Animal_Insect_O",
  "Animal_Insect_P",
  "Animal_Insect_Q",
  "Animal_Insect_R",
  "Animal_Insect_S",
  "Animal_Insect_T",
  "Animal_Insect_X",
  "Animal_Insect_Z",
  "Obj_BombArrow_A_01",
  "Obj_BombArrow_A_02",
  "Obj_BombArrow_A_03",
  "Obj_BombArrow_A_04",
  "Obj_ArrowBundle_A_01",
  "Obj_ArrowBundle_A_02",
  "Obj_ArrowNormal_A_01",
  "Obj_ElectricArrow_A_01",
  "Obj_ElectricArrow_A_02",
  "Obj_ElectricArrow_A_03",
  "Obj_IceArrow_A_01",
  "Obj_IceArrow_A_02",
  "Obj_IceArrow_A_03",
  "Obj_AncientArrow_A_01",
  "Obj_AncientArrow_B_01",
  "Obj_AncientArrow_C_01",
  "Item_Enemy_00",
  "Item_Enemy_01",
  "Item_Enemy_02",
  "Item_Enemy_03",
  "Item_Enemy_04",
  "Item_Enemy_05",
  "Item_Enemy_06",
  "Item_Enemy_07",
  "Item_Enemy_08",
  "Item_Enemy_12",
  "Item_Enemy_13",
  "Item_Enemy_14",
  "Item_Enemy_15",
  "Item_Enemy_16",
  "Item_Enemy_17",
  "Item_Enemy_18",
  "Item_Enemy_19",
  "Item_Enemy_20",
  "Item_Enemy_21",
  "Item_Enemy_24",
  "Item_Enemy_25",
  "Item_Enemy_26",
  "Item_Enemy_27",
  "Item_Enemy_28",
  "Item_Enemy_29",
  "Item_Enemy_30",
  "Item_Enemy_31",
  "Item_Enemy_32",
  "Item_Enemy_33",
  "Item_Enemy_34",
  "Item_Enemy_38",
  "Item_Enemy_39",
  "Item_Enemy_40",
  "Item_Enemy_41",
  "Item_Enemy_42",
  "Item_Enemy_43",
  "Item_Enemy_44",
  "Item_Enemy_45",
  "Item_Enemy_46",
  "Item_Enemy_47",
  "Item_Enemy_48",
  "Item_Enemy_49",
  "Item_Enemy_50",
  "Item_Enemy_51",
  "Item_Enemy_52",
  "Item_Enemy_53",
  "Item_Enemy_54",
  "Item_Enemy_55",
  "Item_Enemy_56",
  "Item_Enemy_57",
  "Item_Enemy_Put_57",
  "Item_FishGet_A",
  "Item_FishGet_B",
  "Item_FishGet_C",
  "Item_FishGet_D",
  "Item_FishGet_E",
  "Item_FishGet_F",
  "Item_FishGet_G",
  "Item_FishGet_H",
  "Item_FishGet_I",
  "Item_FishGet_J",
  "Item_FishGet_K",
  "Item_FishGet_L",
  "Item_FishGet_L_00",
  "Item_FishGet_M",
  "Item_FishGet_X",
  "Item_FishGet_Z",
  "Item_Fruit_A",
  "Item_Fruit_B",
  "Item_Fruit_C",
  "Item_Fruit_D",
  "Item_Fruit_E",
  "Item_Fruit_E_00",
  "Item_Fruit_F",
  "Item_Fruit_G",
  "Item_Fruit_H",
  "Item_Fruit_I",
  "Item_Fruit_J",
  "Item_Fruit_K",
  "Item_Fruit_L",
  "Item_HeartUtuwa",
  "Item_InsectGet_K",
  "Item_InsectGet_O",
  "Item_InsectGet_Z",
  "Item_Material_01",
  "Item_Material_02",
  "Item_Material_03",
  "Item_Material_04",
  "Item_Material_05",
  "Item_Material_05_00",
  "Item_Material_06",
  "Item_Material_07",
  "Item_Material_08",
  "Item_Meat_01",
  "Item_Meat_02",
  "Item_Meat_06",
  "Item_Meat_07",
  "Item_Meat_11",
  "Item_Meat_12",
  "Item_MushroomGet_D",
  "Item_Mushroom_A",
  "Item_Mushroom_B",
  "Item_Mushroom_C",
  "Item_Mushroom_D",
  "Item_Mushroom_E",
  "Item_Mushroom_F",
  "Item_Mushroom_F_00",
  "Item_Mushroom_H",
  "Item_Mushroom_J",
  "Item_Mushroom_L",
  "Item_Mushroom_M",
  "Item_Mushroom_N",
  "Item_Mushroom_N_00",
  "Item_Mushroom_O",
  "Item_Ore_A",
  "Item_Ore_A_00",
  "Item_Ore_B",
  "Item_Ore_C",
  "Item_Ore_D",
  "Item_Ore_E",
  "Item_Ore_F",
  "Item_Ore_G",
  "Item_Ore_H",
  "Item_Ore_I",
  "Item_Ore_J",
  "Item_Parastole2",
  "Item_PlantGet_A",
  "Item_PlantGet_B",
  "Item_PlantGet_C",
  "Item_PlantGet_E",
  "Item_PlantGet_F",
  "Item_PlantGet_G",
  "Item_PlantGet_H",
  "Item_PlantGet_I",
  "Item_PlantGet_J",
  "Item_PlantGet_L",
  "Item_PlantGet_M",
  "Item_PlantGet_O",
  "Item_PlantGet_Q",
  "Item_Plant_A",
  "Item_Plant_B",
  "Item_Plant_C",
  "Item_Plant_E",
  "Item_Plant_F",
  "Item_Plant_G",
  "Item_Plant_H",
  "Item_Plant_I",
  "Item_Plant_J",
  "Item_Plant_L",
  "Item_Plant_M",
  "Item_Plant_O",
  "Item_Plant_Q",
  "Animal_Fish_A",
  "Animal_Fish_B",
  "Animal_Fish_C",
  "Animal_Fish_D",
  "Animal_Fish_E",
  "Animal_Fish_F",
  "Animal_Fish_G",
  "Animal_Fish_H",
  "Animal_Fish_I",
  "Animal_Fish_J",
  "Animal_Fish_K",
  "Animal_Fish_L",
  "Animal_Fish_M",
  "Animal_Fish_X",
  "Animal_Fish_Z",
];
let armorChance = 10;
let copyDirectory;
let totalWeapons = mWeaponList.concat(rWeaponList);
let completedFiles = 0;
//probably don't need this
let pauseCounter = 0;
//stores file paths for randomizing
let fileArr = [];
//, "B", "C", "D", "E", "F", "G", "H", "I", "J"
let mapTiles = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J"];
//counter variable for mapTiles index
let currentFileLetterIndex = 0;
let currentFileLetter = mapTiles[currentFileLetterIndex];
//counter variable for current map file number (1-8)
let currentFileNumber = 1;
let staticOrDynamic = "Static";
let concatFileBin = `${currentFileLetter}-${currentFileNumber}_${staticOrDynamic}.yml`;
let concatFilesmuBin = `${currentFileLetter}-${currentFileNumber}_${staticOrDynamic}.smubin`;
//counter for indexing monlist array
let monListCounter = 0;
//regexp that change based on array index
let currentRegex = new RegExp(monList[monListCounter] + "[^_]");
let currentMon = monList[monListCounter];
let currentRandMon = monList[getRandomInt(0, monList.length - 1)] + "*";

//object to help keep track of actions and directories used on cmd
let cmdOptions = {
  actions: {
    compress: "yml_to_byml",
    decompress: "byml_to_yml",
  },
  directories: {
    unModifiedDir: "./unmodified/",
    modifiedDir: "./modified/aoc/0010/Map/MainField/",
    stagingDir: "./staging/",
  },
};

const replaceOpt = {
  files: fileArr,
  from: /\*/g,
  to: "",
};
//basic function for getting random number
function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
//function for running decompression or compression on the command line
function boxGhost(fileNameOne, fileNameTwo, action, currentDir, destDir) {
  cmd.runSync(`${action} ${currentDir}${fileNameOne} ${destDir}${fileNameTwo}`);
}
//creates ending mod directory structure with a bat file
function makeDir() {
  cmd.runSync("createfolders.bat");
}

function writeDoc(file) {
  console.log(file);
  let doc = yaml.load(fs.readFileSync(file, "utf8"));
  console.log(doc);

  doc.Objs.forEach((element) => {
    if (monList.includes(element.UnitConfigName)) {
      console.log("randomizing mons");
      element.UnitConfigName = monList[getRandomInt(0, monList.length - 1)];
    }
    if(chestTypes.includes(element.UnitConfigName)){
      if (getRandomInt(1, armorChance) === 1){
        console.log("armor spawned!")
        let randIndex = getRandomInt(1, armors.length -1)
        element["!Parameters"].DropActor = armors[randIndex];
        armors.splice(randIndex, 1);
        armorChance = 10;

      } else {
        element["!Parameters"].DropActor = items[getRandomInt(1, items.length - 1)]
        armorChance --;
      }
    }
  });
  doc.Objs.forEach((element) => {
    if (
      monListMelee.includes(element.UnitConfigName) &&
      monListRanged.includes(element.UnitConfigName)
    ) {
      if (getRandomInt(1, 2) == 1) {
        element["!Parameters"].EquipItem1 =
          mWeaponList[getRandomInt(0, mWeaponList.length - 1)];
        if (getRandomInt(1, 2) == 1) {
          element["!Parameters"].EquipItem2 =
            shieldList[getRandomInt(0, shieldList.length - 1)];
        }
      } else {
        element["!Parameters"].EquipItem1 =
          rWeaponList[getRandomInt(0, rWeaponList.length - 1)];
      }
    } else if (monListMelee.includes(element.UnitConfigName)) {
      element["!Parameters"].EquipItem1 =
        mWeaponList[getRandomInt(0, mWeaponList.length - 1)];
    } else if (monListRanged.includes(element.UnitConfigName))
      element["!Parameters"].EquipItem1 =
        rWeaponList[getRandomInt(0, mWeaponList.length - 1)];
    // if (element.UnitConfigName === "Enemy_Assassin_Shooter_Junior") {
    //   element["!Parameters"].EquipItem1 = "Weapon_Bow_040";
    // }
    // if (element.UnitConfigName === "Enemy_Assassin_Junior") {
    //   element["!Parameters"].EquipItem1 = "Weapon_Sword_053";
    // }
    if (
      element.UnitConfigName === "Enemy_Giant_Junior" ||
      element.UnitConfigName === "Enemy_Giant_Middle" ||
      element.UnitConfigName === "Enemy_Giant_Senior"
    ) {
      element["!Parameters"].EquipItem1 =
        totalWeapons[getRandomInt(0, totalWeapons.length - 1)];
      element["!Parameters"].EquipItem2 =
        totalWeapons[getRandomInt(0, totalWeapons.length - 1)];
      element["!Parameters"].EquipItem3 =
        totalWeapons[getRandomInt(0, totalWeapons.length - 1)];
    }
    if (monListLynel.includes(element.UnitConfigName)) {
      element["!Parameters"].EquipItem1 =
        mWeaponList[getRandomInt(0, mWeaponList.length - 1)];
      element["!Parameters"].EquipItem2 =
        shieldList[getRandomInt(0, shieldList.length - 1)];
      element["!Parameters"].EquipItem3 =
        rWeaponList[getRandomInt(0, rWeaponList.length - 1)];
    }
    if (
      element.UnitConfigName === "Enemy_Wizzrobe_Electric" ||
      element.UnitConfigName === "Enemy_Wizzrobe_Fire" ||
      element.UnitConfigName === "Enemy_Wizzrobe_Ice"
    ) {
      element["!Parameters"].EquipItem1 =
        weaponRods[getRandomInt(0, weaponRods.length - 1)];
    }
  });
  fs.writeFile(file, yaml.dump(doc), (err) => {
    if (err) {
      console.log(err);
    }
  });
  if (staticOrDynamic === "Static") {
    staticOrDynamic = "Dynamic";
  } else if (staticOrDynamic === "Dynamic") {
    staticOrDynamic = "Static";
    currentFileNumber++;
  }
  randomize();
}
//decompress all .smubin files in unmodified folder and moves them to staging folder
function decompress() {
  concatFileBin = `${currentFileLetter}-${currentFileNumber}_${staticOrDynamic}.yml`;
  concatFilesmuBin = `${currentFileLetter}-${currentFileNumber}_${staticOrDynamic}.smubin`;
  if (currentFileLetterIndex <= mapTiles.length - 1) {
    if (currentFileNumber <= 8) {
      completedFiles++;
      $(".completed-files").html(completedFiles);
      console.log(`decompressing ${concatFilesmuBin}`);
      boxGhost(
        concatFilesmuBin,
        concatFileBin,
        cmdOptions.actions.decompress,
        `${cmdOptions.directories.unModifiedDir}${currentFileLetter}-${currentFileNumber}/`,
        cmdOptions.directories.stagingDir
      );
      fileArr.push(`./staging/${concatFileBin}`);
      if (staticOrDynamic === "Static") {
        staticOrDynamic = "Dynamic";
      } else if (staticOrDynamic === "Dynamic") {
        staticOrDynamic = "Static";
        currentFileNumber++;
      }
    } else if (currentFileNumber > 8) {
      staticOrDynamic = "Static";
      console.log("End of this tile series. Moving to next letter.");
      currentFileLetterIndex++;
      currentFileNumber = 1;
      currentFileLetter = mapTiles[currentFileLetterIndex];
      concatFileBin = `${currentFileLetter}-${currentFileNumber}_${staticOrDynamic}.yml`;
      concatFilesmuBin = `${currentFileLetter}-${currentFileNumber}_${staticOrDynamic}.smubin`;
    }
  } else {
    //returning variables to default values
    completedFiles = 0;
    console.log(fileArr);
    currentFileLetterIndex = 0;
    currentFileLetter = mapTiles[currentFileLetterIndex];
    currentFileNumber = 1;
    staticOrDynamic = "Static";
    concatFileBin = `${currentFileLetter}-${currentFileNumber}_${staticOrDynamic}.yml`;
    concatFilesmuBin = `${currentFileLetter}-${currentFileNumber}_${staticOrDynamic}.smubin`;
    console.log("done!");
    replaceOpt.from = /!u/g;
    replaceOpt.to = "u";
    replace(replaceOpt).then(() => {
      replaceOpt.from = /\.0/g;
      replaceOpt.to = ".42069";
      replace(replaceOpt);
    });
    $(".loading").fadeOut("fast", () => {
      $(".randomize").fadeIn("fast");
    });


    return;
  }

  decompress();
}

function randomize() {
  concatFileBin = `${currentFileLetter}-${currentFileNumber}_${staticOrDynamic}.yml`;
  if (currentFileLetterIndex <= mapTiles.length - 1) {
    if (currentFileNumber <= 8) {
      writeDoc(`./staging/${concatFileBin}`);
    } else if (currentFileNumber > 8) {
      console.log("End of this tile series. Moving to next letter.");
      currentFileLetterIndex++;
      currentFileNumber = 1;
      currentFileLetter = mapTiles[currentFileLetterIndex];
      concatFileBin = `${currentFileLetter}-${currentFileNumber}_${staticOrDynamic}.yml`;
      randomize();
    }
  } else {
    console.log(armors.length);
    completedFiles = 0;
    replaceOpt.from = /42069/g;
    replaceOpt.to = 0;
    replace(replaceOpt).then(() => {
      replaceOpt.from = / u /g;
      replaceOpt.to = " !u ";
      replace(replaceOpt);
    });

    currentFileLetterIndex = 0;
    currentFileLetter = mapTiles[currentFileLetterIndex];
    currentFileNumber = 1;
    staticOrDynamic = "Static";
    concatFileBin = `${currentFileLetter}-${currentFileNumber}_${staticOrDynamic}.yml`;
    concatFilesmuBin = `${currentFileLetter}-${currentFileNumber}_${staticOrDynamic}.smubin`;
    $(".loading").fadeOut("fast", () => {
      $(".compress").fadeIn("fast");
    });

    return;
  }
}
function compress() {
  concatFileBin = `${currentFileLetter}-${currentFileNumber}_${staticOrDynamic}.yml`;
  concatFilesmuBin = `${currentFileLetter}-${currentFileNumber}_${staticOrDynamic}.smubin`;
  if (currentFileLetterIndex <= mapTiles.length - 1) {
    if (currentFileNumber <= 8) {
      console.log(`compressing ${concatFileBin}`);
      boxGhost(
        concatFileBin,
        concatFilesmuBin,
        cmdOptions.actions.compress,
        cmdOptions.directories.stagingDir,
        `${cmdOptions.directories.modifiedDir}${currentFileLetter}-${currentFileNumber}/`
      );
      if (staticOrDynamic === "Static") {
        staticOrDynamic = "Dynamic";
      } else if (staticOrDynamic === "Dynamic") {
        staticOrDynamic = "Static";
        currentFileNumber++;
      }
    } else if (currentFileNumber > 8) {
      staticOrDynamic = "Static";
      console.log("End of this tile series. Moving to next letter.");
      currentFileLetterIndex++;
      currentFileNumber = 1;
      currentFileLetter = mapTiles[currentFileLetterIndex];
      concatFileBin = `${currentFileLetter}-${currentFileNumber}_${staticOrDynamic}.yml`;
      concatFilesmuBin = `${currentFileLetter}-${currentFileNumber}_${staticOrDynamic}.smubin`;
    }
  } else {
    cmd.runSync(
      'botw_flag_util generate ./modified -r 1 0 -b -v'
    )
    console.log("done compressing have a nice day!");
    $(".loading").fadeOut("fast");
    alert("Done! have a nice day!");
    return;
  }
  compress();
}

// cmd.runSync(
//   "deletefolders.bat"
// )
makeDir();

$(".currDir").on("click", () => {
  window.postMessage({
    type: "select-dirs",
  });
});
// $(".randomize").on("click", () => {
//   $(".randomize").fadeOut("fast");
//

//   setTimeout(() => {
//     decompress();
//     setTimeout(() => {
//       randomize();
//       setTimeout(() => {
//         compress();
//       }, 500);
//     }, 500);
//   }, 500);
// });
$(".decompress").on("click", () => {
  $(".decompress").fadeOut("fast");
  $(".loading").fadeIn("fast");
  setTimeout(function () {
    decompress();
  }, 500);
});
$(".randomize").on("click", () => {
  $(".randomize").fadeOut("fast");
  $(".loading").fadeIn("fast");
  setTimeout(function () {
    randomize();
  }, 500);
});

$(".compress").on("click", () => {
  $(".compress").fadeOut("fast");
  $(".loading").fadeIn("fast");
  setTimeout(function () {
    compress();
  }, 500);
});
$("#choose-folder").on("change", () => {
  let directory = document.getElementById("choose-folder").files[0].path;
  let regex1 = /LazyTraverseList.smubin/;
  directory = directory.replace(regex1, "");
  console.log(directory);
  if (directory.includes("Map\\MainField\\")) {
    copyDirectory = `xcopy /S /E /exclude:excludedfilelist.txt "${directory}" .\\unmodified`;
    $(".custom-input").fadeOut("fast");
    $("#submit-folder").fadeIn("fast");
  } else {
    alert("bad directory");
  }
});
$("#submit-folder").on("click", function () {
  $(".loading").fadeIn("fast");
  $("#submit-folder").fadeOut("fast");
  fs.writeFile("copyfolders.bat", copyDirectory, function (err) {
    console.log("copied");
    cmd.runSync("copyfolders.bat");
  });
  setTimeout(function () {
    $(".loading").fadeOut("fast");
    $(".decompress").fadeIn("fast");
  }, 2000);
});
console.log(armors.length);
