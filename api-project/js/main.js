import '../css/style.css';


const DOMSelectors = {
    form: document.querySelector(".formm"),
    word: document.querySelector(".text-box"),
    container: document.querySelector(".container"),
};


async function startDa(){
    let URLi = `https://api.dictionaryapi.dev/api/v2/entries/en/dictionary`;
    try {
        let response = await fetch(URLi);
        let data = await response.json();
        console.log(data);
        const dictMeaning = data[0].meanings;
        const cardI = `
        <div class="card">
                <h3>Dictionary</h3>
                <div class="meanings">
                    <h4>${dictMeaning[0].partOfSpeech}</h4>
                    <h5 class="def">Definition: ${dictMeaning[0].definitions[0].definition}</h5>
                    <h5>Synonym(s): ${dictMeaning.synonyms} </h5>
                    <h5>Antonyms(s): ${dictMeaning.antonyms}</h5>
                </div>
                <div class="sources">
                    <h6 class="s-head">Source: "${data[0].sourceUrls}"</h6>
                    <h6>License: ${data[0].license.name}, ${data[0].license.url}</h6>
                </div>
            </div>`;
            DOMSelectors.container.innerHTML = cardI;
       
    } catch (error) {
        console.log(error, "Uh oh! Something went wrong ...")
    }
}
startDa();


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
            console.log(data[0].phonetic);
            const mean = data[0].meanings;
            mean.forEach(element => {
                console.log(element.partOfSpeech);
            });
            mean.forEach(element => {
                console.log(element.definitions);
            });
            mean.forEach(element => {
                console.log(element.synonyms);
            })
            mean.forEach(element => {
                console.log(element.antonyms);
            })


            create(data);
            document.querySelector("h7").textContent = "";
        } catch (error) {
            console.log(error, "Uh oh! Something went wrong ...")
            document.querySelector("h7").textContent = "Please enter a real word.";
        }
    })
}
getData();

async function create(data) {
    DOMSelectors.container.innerHTML = ``;
    const diction = data[0].word;
    const meanings = data[0].meanings;


    meanings.forEach((meaning) => {
        const card = `
            <div class="card">
                <h3>${diction}</h3>
                <div class="meanings">
                    <h4>${meaning.partOfSpeech}</h4>
                    <h5 class="def">Definition: ${meaning.definitions[0].definition}</h5>
                    <h5>Synonym(s): ${meaning.synonyms} </h5>
                    <h5>Antonyms(s): ${meaning.antonyms}</h5>
                </div>
                <div class="sources">
                    <h6 class="s-head">Source: "${data[0].sourceUrls}"</h6>
                    <h6>License: ${data[0].license.name}, ${data[0].license.url}</h6>
                </div>
            </div>
        `;
        document.querySelector(".container").innerHTML += card;
    });
}
