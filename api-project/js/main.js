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
            console.log(data[0].word);
            create(data);
            document.querySelector("h7").textContent = "";
        } catch (error) {
            console.log(error, "Uh oh! Something went wrong ...")
            document.querySelector("h7").textContent = "Please enter a word.";
        }
    })
}
getData();

async function create(data){
    const diction = data[0].word;
    DOMSelectors.container.innerHTML = ``;
    const card = `
    <div class= "card">
    <h3> ${diction}</h3>
    </div>
    `;
    document.querySelector(".container").innerHTML += card;
    
}


/*     <div class="card">
            <h3> ${diction} </h3>
        <div class="meanings">
            <h4> ${data[0].partOfSpeech} </h4>
            <h5 class="def"> Definition: ${data[0].meanings.definitions.definition} </h5>
            <h5> Synonym(s): ${data[0].meanings.synonyms} </h5>
            <h5> Antonyms(s): ${data[0].meanings.antonyms} </h5>
            <h5 class = "ex-sentence"> Sentence: ${data[0].meanings.example} </h5>
        </div>
        <div class="sources">
            <h6 class="s-head"> Source: "${data[0].sourceUrls}"  </h6>
            <h6> License: ${data[0].license.name}, ${data[0].license.url}</h6>
        </div>
    </div> */
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