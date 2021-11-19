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
