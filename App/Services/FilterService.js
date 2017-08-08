const category = [
  "Red Somewhere On Abdomen",
  "Striped, No Red",
  "White",
  "Black Butt, No Red"
];
const blackTail = {
  name: "Black tail BB",
  category: 1,
  bodySize: null,
  bodyParts: [
    null,
    "Cloudy",
    "Dark",
    "Yellow",
    "Yellow",
    "Red",
    "Red",
    "Cloudy",
    null,
    null
  ]
};

const central = {
  name: "Central BB",
  category: 1,
  bodySize: null,
  bodyParts: [
    null,
    null,
    "Dark Band",
    null,
    "Yellow",
    "Yellow",
    "Red",
    "Red",
    null,
    null
  ]
};

const hunts = {
  name: "Hunts BB",
  category: 1,
  bodySize: null,
  bodyParts: [
    null,
    null,
    null,
    null,
    "Yellow",
    "Red",
    "Red",
    "Yellow",
    null,
    null
  ]
};

const fuzzyHorned = {
  name: "Fuzzy Horned BB",
  category: 1,
  bodySize: null,
  bodyParts: [
    null,
    "Cloudy",
    "Dark Band",
    "Yellow",
    "Yellow",
    "Black",
    "Black",
    "Black",
    "Red",
    "Red"
  ]
};

const twoForm = {
  name: "Two Form BB",
  category: 2,
  bodySize: "Smaller",
  bodyParts: [
    null,
    "Cloudy",
    null,
    "Triangle",
    "Yellow",
    "Black",
    "Black",
    "Yellow",
    null,
    null
  ]
};

const yellowFaced = {
  name: "Yellow Faced BB",
  category: 2,
  bodySize: null,
  bodyParts: [
    "Yellow",
    "Yellow",
    "Black",
    "Black",
    "Black",
    "Black",
    "Black",
    "Yellow",
    "Black",
    "Black"
  ]
};

const western = {
  name: "Western BB",
  category: 1,
  bodySize: null,
  bodyParts: [
    "Black",
    "Golden",
    "Black",
    "Black",
    "Black",
    "Black",
    "Black",
    "White",
    "White",
    "White"
  ]
};

const whiteShouldered = {
  name: "BB",
  category: 3,
  bodySize: "Large",
  bodyParts: [
    "White",
    "White",
    "Black",
    "Golden",
    "Golden",
    "Golden",
    "Golden",
    "Golden",
    "Golden",
    "Golden"
  ]
};

const yellowHead = {
  name: "Yellow Head BB",
  category: 4,
  bodySize: null,
  bodyParts: [
    null,
    "Black",
    "Yellow",
    "Yellow",
    "Yellow",
    "Black",
    "Black",
    "Black",
    "Black"
  ]
};

const nevada = {
  name: "Nevada BB",
  category: 4,
  bodySize: null,
  bodyParts: [
    "Black",
    "Golden",
    "Black Dot",
    "Golden",
    "Golden",
    "Golden",
    "Golden",
    "Black",
    "Black",
    "Black"
  ]
};

const brownBelted = {
  name: "Brown Belted BB",
  category: 4,
  bodySize: "Large",
  bodyParts: [
    null,
    null,
    "Black Dot",
    null,
    null,
    "Brown",
    "Black",
    "Black",
    "Black",
    "Black"
  ]
};

const beeArray = [
  blackTail,
  central,
  hunts,
  fuzzyHorned,
  twoForm,
  yellowFaced,
  western,
  whiteShouldered,
  yellowHead,
  nevada,
  brownBelted
];

const bodyPartNamesArray = [
  "Face",
  "FT",
  "CT",
  "RT",
  "T1",
  "T2",
  "T3",
  "T4",
  "T5",
  "T6"
];

export const getBodyPartIndex = bodyPartCode => {
  return bodyPartNamesArray.findIndex(i => i === bodyPartCode);
};

export const getColorsForBodyPart = bodyPartCode => {
  const bodyPartIndex = getBodyPartIndex(bodyPartCode);
  let uniqueColors = new Set();
  uniqueColors.add("NC");
  beeArray.forEach(b => {
    if (b.bodyParts[bodyPartIndex] !== null) {
      uniqueColors.add(b.bodyParts[bodyPartIndex]);
    }
  });

  const colorsArray = Array.from(uniqueColors);
  const newArray = [];
  colorsArray.forEach(v => {
    if (v != null) {
      newArray.push(v);
    }
  });

  return newArray;
};

export const filter = attributeArray => {
  let filtedArray = [];
  beeArray.forEach(b => {
    let matched = true;
    for (let i = 0; i < b.bodyParts.length; i++) {
      if (attributeArray[i] !== "NC" && attributeArray[i] !== b.bodyParts[i]) {
        matched = false;
      }
    }
    if (matched) {
      filtedArray.push(b);
    }
  });
  return filtedArray;
};
