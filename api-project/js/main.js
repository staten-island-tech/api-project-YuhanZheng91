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
        const wordLink = DOMSelectors.word.value;
        let URL = `https://api.dictionaryapi.dev/api/v2/entries/en/${wordLink}`;
        console.log(URL);
        create();
    })
}
something(); 

function create(){
    document.querySelector(".container").innerHTML = '';
    const card = `
    <div class="card">
            <h3> ${URL.word} </h3>
        <div class="meanings">
            <h4> ${URL.partOfSpeech} </h4>
            <h5 class="def"> Definition: ${URL.definitions} </h5>
            <h5> Synonym(s): ${URL.synonyms} </h5>
            <h5> Antonyms(s): ${URL.antonyms} </h5>
            <h5 class = "ex-sentence" > Sentence: ${URL.example} </h5>
        </div>
        <input type='button' value="remove" class="remove-b">
        <div class="sources">
            <h6 class="s-head"> Source: "${URL.sourceUrls}"  </h6>
            <h6> License: ${URL.license.name} && ${URL.license.url}</h6>
        </div>
    </div>
    `;
    document.querySelector(".container").insertAdjacentHTML("afterbegin", card);
    
}

/* function removeCard(){       // if you want the card to be removed in a list of "history", or previously searched words
    document.querySelector(".remove-b").addEventListener('click', function(){
    })
} */

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
