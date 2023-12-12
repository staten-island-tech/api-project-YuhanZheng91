import '../css/style.css';
//npm build; npm run preview

//const URL = `https://random-d.uk/api/v2/quack`;
//const URL = `https://random.dog/woof.json`;

const DOMSelectors = {
    form: document.querySelector(".formm"),
    word: document.querySelector(".text-box"),
};

//const URL = `https://shibe.online/api/shibes?count=[${DOMSelectors.count}]`;
let URL = `https://api.dictionaryapi.dev/api/v2/entries/en/word`;
const response = await fetch(URL);
console.log(response);
console.log(URL);

async function getData(){
    let response = await fetch(URL);
    let data = await response.json();
    console.log(data);
    // let data = await URL.json();
    // console.log(data);
    // data.results.forEach((data) =>
    // console.log(data)
    // ); 
}
getData();

async function something(){
    DOMSelectors.form.addEventListener('submit', function(event){
        event.preventDefault();
        const wordLink = DOMSelectors.word;
        let URL = `https://api.dictionaryapi.dev/api/v2/entries/en/${wordLink}`;
        console.log(URL);
        create();
    })
}
something(); 

function create(){
    const card = `
    <div class="card"
            <h3> [hello] </h3>
        <div class="meanings">
            <h4> <i> noun </i> </h4>
            <h5> Definition: [] </h5>
            <h5> Synonym(s): [] </h5>
            <h5> Antonyms(s): [] </h5>
            <h5> Sentence: [] </h5>
        </div>
        <div class="sources">
            <h6> Source: [] </h6>
            <h6> License: [] </h6>
        </div>
    </div>
    `;
    document.querySelector(".container").insertAdjacentHTML("afterbegin", card);
    
}

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