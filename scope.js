// C is for Cookie

const cookies = [
    "Oatmeal Raisin",
    "Chocolate Chip",
    "Sugar",
    "Peanut Butter",
    "Snickerdoodle",
    "Ginger",
];

for (let y = 0; y < cookies.length; y++) {
    const currentCookie = cookies[y];
    console.log(`Mmmmmmm... that's a good ${currentCookie} cookie`);
}

// Conjunction Function

const conjunction = function (firstWord, secondWord) {
    const conjoinedWord = `${firstWord} ${secondWord}`;
    return conjoinedWord;
};

let masterC = conjunction("Master", "Card");
console.log(masterC);

// Mod Squad

const modFun = () => {
    const modSquad = {
        members: [
            "Pete Cochran",
            "Linc Hayes",
            "Julie Barnes",
            "Capt. Adam Greer",
            "Chief Barney Metcalf",
        ],
        series: {
            start: "1968",
            end: "1973",
        },
    };

    let HTMLRepresentation = `<h1>The Mod Squad</h1>`;

    modSquad.members.forEach((member) => {
        HTMLRepresentation += `<div>${member}</div>`;
    });
    return HTMLRepresentation;
};

console.log(modFun());

// Simon Says

const locations = [
    [1, 1],
    [1, 2],
    [1, 3],
    [2, 1],
    [2, 2],
    [2, 3],
];

for (const location of locations) {
    if (location[0] > 2) {
        console.log("This location is invalid");
    }
}

// Lambda Llama

const llamaNamer = function () {
    const possibleNames = [
        "Larry",
        "Leon",
        "Leona",
        "Les",
        "Laura",
        "Lemony",
        "Lars",
        "Lekisha",
    ];
    const randomizer = Math.floor(Math.random() * 7);
    let name;
    let suffix;

    const namer = function () {
        suffix = " the Llama";
        name = possibleNames[randomizer];
    };
    namer();
    return name + suffix;
};

nameMaker = llamaNamer();
console.log(nameMaker);
