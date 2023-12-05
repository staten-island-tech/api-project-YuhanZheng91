import '../css/style.css';
//npm run dev; npm run preview

const URL = `https://random-d.uk/api/v2/quack`;
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
        document.querySelector("h2").textContent = data.content;
    } catch (error) {
        console.log(error, "uh oh");
        document.querySelector("h2").textContent = "something happened";
    }
}
getData(URL);