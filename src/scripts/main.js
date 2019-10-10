// Lightning Exercise One

/* console.log("We're learning about objects!");

const car = {
    make: "Ford",
    model: "Mustang",
    year: 2015,
    color: "red",
};

console.log(car);

const shelterNames = ["Kippers", "Jack", "Gypsy", "Angus", "Seymour Bouts", "Sharky" ];

console.log(shelterNames);

const brother = {
    name: "Adam",
    age: "26",
    gender: "male" 
};

const sister = {
    name: "Abbey",
    age: "23", 
    gender: "female"
};

const mom = {
    name: "Lisa",
    age: "52",
    gender: "female" 
};

const dad = {
    name: "Craig",
    age: "60",
    gender: "male" 
};

familyMembers = [brother, sister, mom, dad];

console.log(familyMembers); */

// Lightning Exercise Two

/* const wardrobe = {
    height: 80,
    manufacturer: "Killibrew & Sons",
    contents: ["Dress shirt", "Jeans", "Suit", "Skirt", "Tennis shoes"],
    depth: 38,
    width: 50
}

console.log(wardrobe.height);

console.log(wardrobe.manufacturer);

console.log(wardrobe.contents);

console.log(wardrobe.depth);

console.log(wardrobe.width);

 */

// Lightning exercise 3

/* const empireStateBuilding = {
    stories: 103,
    height: 1453,
    address: "350 Fifth Avenue, Manhattan, New York 10118",
    squareFeet: 2768591,
    constructionDate: 1931,
    cost: 40948900,
    owner: "Empire State Realty Trust",
    eastWestLength: 424,
    northSouthLength: 187,
    architect: "Shreve, Lamb & Harmon"
}

console.log("Stories", empireStateBuilding.stories)
console.log("Height", empireStateBuilding.height)
console.log("Square Feet", empireStateBuilding.squareFeet)
console.log("eastWestLength", empireStateBuilding.eastWestLength)
console.log("northSouthLength", empireStateBuilding.northSouthLength)

console.log("Address", empireStateBuilding["address"])
console.log("Construction Date", empireStateBuilding["constructionDate"])
console.log("Cost", empireStateBuilding["cost"])
console.log("Owner", empireStateBuilding["owner"])
console.log("Architect", empireStateBuilding["architect"])
 */

// Lightning exercise 4

/* const nashvilleSoftwareSchool = {
    founded: 2012,
    director: "John Wark",
    instructors: {
        fullTime: ["Jisie", "Brenda", "Steve", "Joe", "Andy"],
        partTime: ["Zoe", "Nathan"]
    },
    address: "500 Interstate Blvd. S"
}
const fullTimeInstructors = nashvilleSoftwareSchool.instructors.fullTime
const partTimeInstructors = nashvilleSoftwareSchool.instructors.partTime

for (let i = 0; i < partTimeInstructors.length; i++) {
    console.log(partTimeInstructors[i])
}

for (let i = 0; i < fullTimeInstructors.length; i++) {
    console.log(fullTimeInstructors[i])
}


console.log(fullTimeInstructors[4])
console.log(partTimeInstructors[0])
 */

// Practice Exercise 1

const beatles = {
    albums: ["Abbey Road", "Sgt Peppers Lonely Heart's Club Band", "Revolver", "Magical Mystery Tour", "Something New"],
    history: {
        formed: 1960,
        disbanded: 1970
    },
    members: [
        {
            name: "George Harrison",
            birth: 1943,
            death: 2001
        },
        {
            name: "Paul McCartney",
            birth: 1942,
            death: null
        },
        {
            name: "John Lennon",
            birth: 1940,
            death: 1980
        },
        {
            name: "Ringo Starr",
            birth: 1940,
            death: null
        }
    ]
}

// console.log(`The empire state building is ${empireStateBuilding.height} high with ${empireStateBuilding.stories} stories. The east west length is ${empireStateBuilding.eastWestLength} and the north south length is ${empireStateBuilding.northSouthLength}. It is ${empireStateBuilding.squareFeet} square footage.`)

console.log(`${beatles.members[1].name} was in the Beatles from 1960 to 1970. He was born in ${beatles.members[1].birth}. He contributed heavily to the ${beatles.albums[3]} album.`)

