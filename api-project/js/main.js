import '../css/style.css';

const DOMSelectors = {
    form: document.querySelector(".formm"),
    word: document.querySelector(".text-box"),
    container: document.querySelector(".container"),
};

async function getData(){
    DOMSelectors.form.addEventListener('submit', async function(event){
        event.preventDefault();
        const wordLink = DOMSelectors.word.value;
        let URL = `https://api.dictionaryapi.dev/api/v2/entries/en/${wordLink}`;
        console.log(URL);
        create();

        try {
            let response = await fetch(URL);
            let data = await response.json();
            console.log(data);
            create(data);
            document.querySelector("h7").textContent = "";
        } catch (error) {
            console.log(error, "Uh oh! Something went wrong ...")
            document.querySelector("h7").textContent = "Please make sure the word is recognized as an official word and/or enter a word.";
        }
    })
}
getData();

async function create(data){
    const diction = data.word;
    DOMSelectors.container.innerHTML = ``;
    const card = `
    <div class="card">
    <h3> ${diction} </h3>
    </div>
    `;
    document.querySelector(".container").innerHTML += card;
}


/*
function create(data){
    document.querySelector(".container").innerHTML = '';
    const card = `
    <div class="card">
            <h3> ${data.word} </h3>
        <div class="meanings">
            <h4> ${data.partOfSpeech} </h4>
            <h5 class="def"> Definition: ${data.definitions} </h5>
            <h5> Synonym(s): ${data.synonyms} </h5>
            <h5> Antonyms(s): ${data.antonyms} </h5>
            <h5 class = "ex-sentence"> Sentence: ${data.example} </h5>
        </div>
        <div class="sources">
            <h6 class="s-head"> Source: "${data.sourceUrls}"  </h6>
            <h6> License: ${data.license} && ${data.license}</h6>
        </div>
    </div>
    `;
    document.querySelector(".container").insertAdjacentHTML("afterbegin", card);
    
}
*/

//wave extension firefox ; contrast & error stuff