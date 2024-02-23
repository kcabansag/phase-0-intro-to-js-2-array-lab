// Write your solution here!
const cats =["Milo", "Otis", "Garfield"];


function destructivelyAppendCat(name){
cats.push(name);
}

function destructivelyPrependCat(name){
    cats.unshift(name);
}

function destructivelyRemoveLastCat(name){
    cats.pop(name);
}

function destructivelyRemoveFirstCat(name){
    cats.shift(name);
}


function appendCat(name) {
    const newCats = cats.slice();
    newCats.push(name);
    return newCats;

}

function prependCat(name){
    const kitten = cats.slice();
    kitten.unshift(name);
    return kitten;
}

function removeLastCat(name){
    const lessCats = cats.slice();
    lessCats.pop(name);
    return lessCats;
}

function removeFirstCat(){
    const fewCats = cats.slice();
    fewCats.shift();
    return fewCats;
}

