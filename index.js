// Write your solution here!

const cats= ["Milo","Otis","Garfield"];

function destructivelyAppendCat() {
    const destructivelyAppendCat = cats.push("Ralph");
}

function destructivelyPrependCat() {
    const destructivelyPrependCat = cats.unshift("Bob");
}

function destructivelyRemoveLastCat() {
    const destructivelyRemoveLastCat = cats.pop();
}

function destructivelyRemoveFirstCat() {
    const destructivelyRemoveFirstCat = cats.shift();
} 

function appendCat() {
    const appendCat = [...cats, "Broom"];
    return appendCat;
}

function prependCat() {
    const prependCat =["Arnold", ...cats];
    return prependCat;
}

function removeLastCat() {
    const removeLastCat = cats.slice(0,2);
    return removeLastCat;
}

function removeFirstCat() {
    const removeFirstCat = cats.slice(1);
    return removeFirstCat;
}