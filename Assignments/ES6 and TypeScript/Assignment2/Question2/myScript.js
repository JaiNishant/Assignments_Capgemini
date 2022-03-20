const listAM=[0,1,153,370,371,407]
const i = listAM[Symbol.iterator]();
function getNextArmstrong(){
    return i.next().value;
}

console.log(getNextArmstrong());
console.log(getNextArmstrong());
console.log(getNextArmstrong());