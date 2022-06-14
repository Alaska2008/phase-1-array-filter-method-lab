// Code your solution here
const drivers = ['Bobby', 'Sammy', 'Sally', 'Annette', 'Sarah', 'Bobby']

function findMatching(driv, name){
    const result= driv.filter(dri => dri === name || dri.slice(0,1).toUpperCase()=== name.toUpperCase() || dri.toLowerCase()=== name.toLowerCase());
    return result 
}
function fuzzyMatch(driv, name){
        const result= driv.filter(dri => dri.slice(0,2)=== name);
        return result;
}
function matchName(driv, string){
    const result= driv.filter(dri => dri.name=== string);
        return result;
}