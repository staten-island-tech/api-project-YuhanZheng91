let Angelina = {
    name: "Angelina",   // a string
    age: 16,            // number or integer
    Angela: false,      // boolean
};
//console.log(Angelina.name[0]); //dislplays "A" in the console
//console.log(Angelina.age + "16"); //displays 1616 in the console

/* for(let i=0; i< Angelina.name.length; i++){
    console.log(Angelina.name[i]);
}

let i = 0;
while (i < Angelina.name.length){
    console.log(Angelina.name[i]);
    i++;
}
 */
/* 
function needle(name, search){
    if(name.includes(search)){ // can do "name === search" for a direct search; double and triple differenes !!!
        return true;
    } else {
        return false;
    }
}
console.log(needle(1, false)); */

/* function sortString(name){
    let x = Array.from(name);
    console.log(x);
}
sortString(Angelina.name); // displays each letter as a string in an array */

function sortString(name){
    let x = [...name].sort(); //spread operator/spread syntax (...)
    console.log(x);
}
sortString(Angelina.name); //displays the same thing as the function above

/* let x = [1, 2, 3];
let y = [4, 5, 6];
let z = [...x, ...y]; //combines the previous two arrays
console.log(z) */

function removeL(name){
    let x = [...name];  //fucntions the same as array.from
    x.splice(-1);       // the last letter of Angelina
    console.log(x);
}
removeL(Angelina.name);