export const beeCategory = ["Red On Abdomen", "Striped, No Red", "White", "Black Butt, No Red"];
const blackTail = {
  id: 0,
  name: "Black tail BB",
  category: 0,
  bodySize: null,
  bodyParts: [null, "Cloudy", "Dark", "Yellow", "Yellow", "Red", "Red", "Cloudy", null, null]
};

const central = {
  id: 1,
  name: "Central BB",
  category: 0,
  bodySize: null,
  bodyParts: [null, null, "Dark Band", null, "Yellow", "Yellow", "Red", "Red", null, null]
};

const hunts = {
  id: 2,
  name: "Hunts BB",
  category: 0,
  bodySize: null,
  bodyParts: [null, null, null, null, "Yellow", "Red", "Red", "Yellow", null, null]
};

const fuzzyHorned = {
  id: 3,
  name: "Fuzzy Horned BB",
  category: 0,
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
  id: 4,
  name: "Two Form BB",
  category: 1,
  bodySize: "Smaller",
  bodyParts: [null, "Cloudy", null, "Triangle", "Yellow", "Black", "Black", "Yellow", null, null]
};

const yellowFaced = {
  id: 5,
  name: "Yellow Faced BB",
  category: 1,
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
  id: 6,
  name: "Western BB",
  category: 0,
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
  id: 7,
  name: "BB",
  category: 2,
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
  id: 8,
  name: "Yellow Head BB",
  category: 3,
  bodySize: null,
  bodyParts: [null, "Black", "Yellow", "Yellow", "Yellow", "Black", "Black", "Black", "Black"]
};

const nevada = {
  id: 9,
  name: "Nevada BB",
  category: 3,
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
  id: 10,
  name: "Brown Belted BB",
  category: 3,
  bodySize: "Large",
  bodyParts: [null, null, "Black Dot", null, null, "Brown", "Black", "Black", "Black", "Black"]
};

export const beeArray = [
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

const bodyPartNamesArray = ["Face", "FT", "CT", "RT", "T1", "T2", "T3", "T4", "T5", "T6"];

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

export const getFormattedBeeArray = () => {
  let arr = [...beeArray];
  arr.sort(beeCompare);
  arr.forEach(b => {
    b.categoryText = beeCategory[b.category];
  });

  const dataBlob = {};
  const sectionIds = [];
  const rowIds = [];

  for (let sectionId = 0; sectionId < beeCategory.length; sectionId++) {
    const bees = arr.filter(b => b.category === sectionId);

    if (bees.length > 0) {
      // Add a section id to our array so the listview knows that we've got a new section
      sectionIds.push(sectionId);

      // Store any data we would want to display in the section header. In our case we want to show
      // the current character
      dataBlob[sectionId] = { categoryText: beeCategory[sectionId] };

      // Setup a new array that we can store the row ids for this section
      rowIds.push([]);

      // Loop over the valid bees for this section
      for (let i = 0; i < bees.length; i++) {
        // Create a unique row id for the data blob that the listview can use for reference
        const rowId = `${sectionId}:${i}`;

        // Push the row id to the row ids array. This is what listview will reference to pull
        // data from our data blob
        rowIds[rowIds.length - 1].push(rowId);

        // Store the data we care about for this row
        dataBlob[rowId] = bees[i];
      }
    }
  }

  return { dataBlob, sectionIds, rowIds };
};

const beeCompare = (a, b) => {
  if (a.category < b.category) {
    return -1;
  } else if (a.category > b.category) {
    return 1;
  } else {
    const aName = a.name.toLowerCase();
    const bName = b.name.toLowerCase();
    if (aName < bName) {
      return -1;
    } else if (aName > bName) {
      return 1;
    } else return 0;
  }
};
