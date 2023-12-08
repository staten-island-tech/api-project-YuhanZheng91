import '../css/style.css';
//npm run dev; npm run preview

//const URL = `https://random-d.uk/api/v2/quack`;
//const URL = `https://random.dog/woof.json`;

const DOMSelectors = {
    form: document.querySelector(".formm"),
    count: document.querySelector(".text-box"),
};
//const URL = `https://shibe.online/api/shibes?${DOMSelectors.count}`;
let URL = `https://shibe.online/api/shibes`;
const response = await fetch(URL);
console.log(response);
console.log(URL);

async function displayDogs(){
/*     let data= await URL.json();
    console.log(data);
    data.results.forEach((data) =>
        console.log(data)
    );
 */
    DOMSelectors.form.addEventListener('submit', function(event){
        event.preventDefault();
        const number = DOMSelectors.count;
        let URL = `https://shibe.online/api/shibes?count=${number}`;
        console.log(URL);
    })
}
displayDogs();


/* 
async function getData(URL){
    try{
        //whem u ask the computer for smth, you are requesting a response REST APIs; relational estfdjkg transfer;
        const response = await fetch(URL); 
        console.log(response);
        if(response.status != 200){
            throw new Error(response.statusText);
        }
        //convert response to JSON
        const data = await response.json();
        document.querySelector(".container").innerHTML = `<img src= ${URL.url}>`;
    } catch (error) {
        console.log(error, "uh oh");
        document.querySelector("h2").textContent = "something happened";
    }
}
getData(URL); */

// smth?limit=[limit]&
//add ?api-key=[] or ?key=[] ;; depends on api